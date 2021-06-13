import { useState, useEffect, useMemo } from 'react'
import Contract from 'web3-eth-contract'
import SSecurity from '../build/contracts/SocialSecurity.json'
import useWeb3 from './useWeb3'

const useSecurity = (address) => {
  const web3 = useWeb3()
  const [contract, setContract] = useState({})
  const [connected, setConnected] = useState(false)

  useEffect(() => {
    if (address) {
      Contract.setProvider(global.window && window.ethereum)
      setContract(new Contract(SSecurity.abi, address))
      setConnected(true)
      console.log("SOCIAL SECURITY ADDRESS", address)
    } else {
      console.log("SOCIAL SECURITY ADDRESS NOT SET")
    }
  }, [address])

  const getFields = async( taxWallet , wicBonusWallet, bonusWallet, wicCards ) => {
    try {
      let owner = await getField('owner')
      let timePeriod = await getField('timePeriod')
      let ssTaxReceivingContract = await getField('ssTaxReceivingContract')
      let globalDepositNumber = await getField('globalDepositNumber')
      let globalDepositTimeValue = await getField('globalDepositTimeValue')
      let globalSSTaxDepositNumber = await getField('globalSSTaxDepositNumber')
      let totalTaxCollected = await getField('totalTaxCollected')
      let totalSSVaults = await getField('totalSSVaults')
      let totalTaxCollectedByPensioners = await getField('totalTaxCollectedByPensioners')
	  

      let token = await getField('token')
      let bonusVault = await getField('bonusVault')
      let emergencyAddress = await getField('EmergencyAddress')
      let welfareAddress = await getField('WelfareCommandCenterAddress')
      let reflectBalance = await getField('getReflectBalance')
      //let balance = taxWallet;
	  
	  if ( taxWallet === undefined ) taxWallet = 0;
	  if ( wicBonusWallet === undefined ) wicBonusWallet = 0;
	  if ( bonusWallet === undefined ) bonusWallet = 0;
	  console.log ( "wb: " + wicBonusWallet )
	  console.log ( "b: " + bonusWallet )
	  totalTaxCollected =  web3.utils.fromWei( totalTaxCollected.toString(), 'nano');
	  totalTaxCollectedByPensioners = web3.utils.fromWei( totalTaxCollectedByPensioners.toString(), 'nano');
      
	  return {
        taxWallet: web3.utils.fromWei(taxWallet.toString(), 'nano'),
		wicBonusWallet: web3.utils.fromWei(wicBonusWallet.toString(), 'nano'),
		bonusWallet: web3.utils.fromWei(bonusWallet.toString(), 'nano'),
	    wicCards,
        timePeriod: `${(timePeriod / 60 / 60)} days`,
        ssTaxReceivingContract,
        globalDepositNumber,
        globalSSTaxDepositNumber,
        globalDepositTimeValue: web3.utils.fromWei(globalDepositTimeValue.toString(), 'nano'),
        reflectBalance: web3.utils.fromWei(reflectBalance.toString(), 'nano'),
        totalTaxCollected,
        totalSSVaults,
        totalTaxCollectedByPensioners,
        globalDepositTimeValue: web3.utils.fromWei(globalDepositTimeValue.toString(), 'nano'),
        reflectBalance: web3.utils.fromWei(reflectBalance.toString(), 'nano'),
        totalTaxCollected,
        totalSSVaults,
        totalTaxCollectedByPensioners,
        token,
        bonusVault,
        emergencyAddress,
        welfareAddress,
      }
    } catch (e) {
      return {}
    }
  }

  const getField = async(field) => {
    if (connected) {
      return await contract.methods[field]().call()
    }
    return false
  }

  const sendTx = async(field, wallet, ...rest) => {
    if (connected) {
      return await contract.methods[field](...rest).send({ from: wallet, to: address })
    }
    return false
  }

  return {
    security: contract.methods,
    web3,
    getField,
    sendTx,
    getFields,
    connected
  }
}

export default useSecurity
