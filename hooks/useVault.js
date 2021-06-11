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
	//const vaultStatus = true;
	const vaultStatus = await contract.methods.activeVault().call()
	
    const timeLockUnits = await contract.methods.timeLockUnits().call()
    const totalTaxCollected = await contract.methods.totalTaxCollected().call()
    if ( vaultStatus == true ){
		var balance =  (  parseFloat(reflectBalance) + parseFloat(depositamount) + parseFloat(totalTaxCollected) );
	balance = toFixed(balance);}
		else { balance = 0 }
	
	
	
   
    return {
      pensioner,
      depositamount: web3.utils.fromWei(depositamount, 'nano'),
      "Pool Weight": web3.utils.fromWei(depositTimeValueAmount, 'nano'),
      "Emergency Withdrawal Amount": web3.utils.fromWei(emergencyWithdrawalAmount, 'nano'),
	  "vaultStatus": vaultStatus ? 'Active' : 'Inactive',
      
      "Last Update":lastUpdate,
      "Reflect Balance": web3.utils.fromWei(reflectBalance , 'nano'),
      "Time At Deposit": moment.unix(timeAtDeposit).format('MM/DD/YYYY HH:mm'),
      "timeAtExpiration": moment.unix(timeAtExpiration).format('MM/DD/YYYY HH:mm'),
      timeAtExpirationUnix: timeAtExpiration,
      "Time Left to Expiration": (timeLeft/60) + " Minutes",
      "Total Months Locked":timeLockUnits,
      "total Tax Collected": web3.utils.fromWei(totalTaxCollected , 'nano'),
	  "Total Vault Balance": web3.utils.fromWei(balance.toString(), 'nano') ,
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

export default useVault
