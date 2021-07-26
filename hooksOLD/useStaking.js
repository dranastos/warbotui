import { useState, useEffect, useMemo } from 'react'
import { notification } from 'antd'
import Contract from 'web3-eth-contract'
import SSVault from '../build/contracts/SSVault.json'
import MicroMachineManufacturingPlant from '../build/contracts/MicroMachineManufacturingPlant.json'
import SSecurity from '../build/contracts/MicroMachineManufacturingPlant.json'
import useWeb3 from './useWeb3'
import moment from 'moment'
import useSecurity from '../hooks/useSecurity'
import useGlobal from '../hooks/useGlobal'
import useMicroMachineManufacturingPlant from '../hooks/useMicroMachineManufacturingPlant'

const useStaking = () => {
  const web3 = useWeb3()
  const [contract, setContract] = useState({})
  const [state, actions] = useGlobal(['security', 'hasSecurity', 'vaultCount'])
  const { warbotmanufacturer,  connected } = useMicroMachineManufacturingPlant(state.warbotmanufacturer)
 
  useEffect(() => {
    Contract.setProvider(global.window && window.ethereum)
  }, [])

  const sendVaultTx = async(name, vault, wallet, ...rest) => {
    const contract = new Contract(SSecurity.abi, state.security)
    const tx = await contract.methods[name](...rest).send({
      from: wallet,
      to: vault
    })
    if (tx.status) {
      notification.success({
        message: 'Transaction Successful',
        description: tx.transactionHash
      })
    }
  }

  const getVault = async(rawdata) => {
    
	
	const timeperiod = await warbotmanufacturer.manufacturingPeriod().call(); 
	
	const owner = rawdata['_owner']	    const micromachinesstaked = rawdata['_micromachinesstaked']
	const timeofexpiration = rawdata['_timeofexpiration']
	const timeunitslocked = rawdata['_timeunitslocked']
	const timeinitiated = rawdata['_timeinitiated']
    const lastmanufacture = rawdata['_lastmanufacture']
	const warbotsmanufactured = rawdata['_warbotsmanufactured']
	const periodproductionrate = rawdata['_periodproductionrate']
	const periodsmanufactured = rawdata['_periodsmanufactured']
    const status = rawdata['_status']
	
	var timeNow = new Date().getTime()/1000
    const timeLeft = timeofexpiration - timeNow;
   
     
   
    return {
      
      "MicroMachinesStaked" :  web3.utils.fromWei( micromachinesstaked.toString(), 'nano') ,
      "PlantStatus": status ? 'Active' : 'Inactive',
	  "NextBatch/Shutdown": (parseInt(lastmanufacture) + parseInt(timeperiod)) > timeNow ? "Not Ready":"Ready" ,
      "Last Manufacture": lastmanufacture==timeinitiated?"Manufacturing Initiated": moment.unix(lastmanufacture).format('MM/DD/YYYY HH:mm'),
      "Time At Deposit": moment.unix(timeinitiated).format('MM/DD/YYYY HH:mm'),
      "timeAtExpiration": moment.unix(timeofexpiration).format('MM/DD/YYYY HH:mm'),
      "timeAtExpirationUnix": timeofexpiration,
      "Time Left to Expiration": timeLeft<0?0:(timeLeft/60) + " Minutes",
      "Total Periods Locked":timeunitslocked,
	  "MonthlyProductionRate":periodproductionrate,
	  "WarBotsManufactured":warbotsmanufactured,
	  "Periods Manufactured":periodsmanufactured,
      
    }
  }

  return [getVault, sendVaultTx]
}

function toFixed(x) {
  if (Math.abs(x) < 1.0) {
    var e = parseInt(x.toString().split('e-')[1]);
    if (e) {
        x *= Math.pow(10,e-1);
        x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
    }
  } else {
    var e = parseInt(x.toString().split('+')[1]);
    if (e > 20) {
        e -= 20;
        x /= Math.pow(10,e);
        x += (new Array(e+1)).join('0');
    }
  }
  return x;
}

export default useStaking
