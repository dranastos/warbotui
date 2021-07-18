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
import useWarbotStats from '../hooks/useWarbotStats'
import useWarbotStatsData from '../hooks/useWarbotStatsData'

const useWarbots = () => {
  const web3 = useWeb3()
  const [contract, setContract] = useState({})
  const [state, actions] = useGlobal(['warbotmanufacturer', 'hasWarbotmanufacturer', 'warbotstats' , 'hasWarbotstats' ])
  const [ warbotstats, wbconnected ] = useWarbotStats(state.warbotstats)
  const [ warbotstatsdata, wbdconnected ] = useWarbotStatsData(state.warbotstatsdata)
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

  const getVault = async(warbot, wallet) => {
    
	 
	 
	const level = await warbotstatsdata.getWarBotLevel(warbot).call()
	
	const owner = await warbotmanufacturer.ownerOf(warbot).call() 
	const warbottype = await warbotstatsdata.WarbotType(warbot).call() 
	const warbotprofile = await warbotstatsdata.WarBotProfiles(warbot).call() 
	var type = getType ( warbottype )
	  
	    
	return {
     
	  
	  "WarbotNumber" : warbot,
      "WarbotType" : type,
	  "Level" :  level ,
	  "Hull Hitpoints" :  warbotprofile.hitpoints  ,
      "Speed" :   warbotprofile.speed  ,
	  "Attack" :   warbotprofile.attack,
      "Defense" :   warbotprofile.defense,
      "Reroll Count": warbotprofile.rerollCount	  
	 
     }
	
  }

  return [getVault, sendVaultTx]
}

function getType ( x ) {
   
	switch(x){
		case "1":
			console.log( "Tractor")
			return "Tractor"
		case "2":
			console.log( "Walker")
			return "Walker"
		case "3":
			console.log( "Aerial Drone")
			return "Aerial Drone"
			
	}
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

export default useWarbots
