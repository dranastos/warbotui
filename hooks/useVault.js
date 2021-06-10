import { useState, useEffect, useMemo } from 'react'
import { notification } from 'antd'
import Contract from 'web3-eth-contract'
import SSVault from '../build/contracts/SSVault.json'
import useWeb3 from './useWeb3'
import moment from 'moment'

const useVault = () => {
  const web3 = useWeb3()
  const [contract, setContract] = useState({})

  useEffect(() => {
    Contract.setProvider(global.window && window.ethereum)
  }, [])

  const sendVaultTx = async(name, vault, wallet, ...rest) => {
    const contract = new Contract(SSVault.abi, vault)
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

  const getVault = async(address) => {
    const contract = new Contract(SSVault.abi, address)
    
    
	const pensioner = await contract.methods.pensioner().call()
  
	const depositamount = await contract.methods.depositamount().call()
	
    const depositTimeValueAmount = await contract.methods.depositTimeValueAmount().call()
	
    const emergencyWithdrawalAmount = await contract.methods.emergencyWithdrawalAmount().call()
	
    const lastUpdate = await contract.methods.lastUpdate().call()
	
     
    const reflectBalance = await contract.methods.reflectBalance().call()
	
    const timeAtDeposit = await contract.methods.timeAtDeposit().call()
	
    const timeAtExpiration = await contract.methods.timeAtExpiration().call()
	
    const timeLeft = await contract.methods.timeLeft().call()
	
    const timeLockUnits = await contract.methods.timeLockUnits().call()
    const totalTaxCollected = await contract.methods.totalTaxCollected().call()
	const balance =  (parseInt(reflectBalance) + parseInt(depositamount) + parseInt(totalTaxCollected)).toString();
	
   
    return {
      pensioner,
      depositamount: web3.utils.fromWei(depositamount, 'nano'),
      "Deposit Time Value Amount": web3.utils.fromWei(depositTimeValueAmount, 'nano'),
      "Emergency Withdrawal Amount": web3.utils.fromWei(emergencyWithdrawalAmount, 'nano'),
      
      "Last Update":lastUpdate,
      "Reflect Balance": web3.utils.fromWei(reflectBalance , 'nano'),
      "Time At Deposit": moment.unix(timeAtDeposit).format('MM/DD/YYYY HH:mm'),
      "timeAtExpiration": moment.unix(timeAtExpiration).format('MM/DD/YYYY HH:mm'),
      timeAtExpirationUnix: timeAtExpiration,
      "Time Left to Expiration": (timeLeft/60) + " Minutes",
      "Total Months Locked":timeLockUnits,
      "total Tax Collected": web3.utils.fromWei(totalTaxCollected , 'nano'),
	  "Total Vault Balance": web3.utils.fromWei( balance , 'nano'),
    }
  }

  return [getVault, sendVaultTx]
}

export default useVault
