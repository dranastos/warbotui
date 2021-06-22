import { useState, useEffect, useMemo } from 'react'
import Contract from 'web3-eth-contract'
import SSecurity from '../build/contracts/MicroMachineManufacturingPlant.json'
import useWeb3 from './useWeb3'

const useMicroMachineManufacturingPlant = (address) => {
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

  const getFields = async(  ) => {
    console.log( "hey")
	try {
     
	  let totalSupply = await getField('totalSupply')
	  let globalwarbotproduction = await getField('globalwarbotproduction')
	  let globalwarbotmanufacturingplants = await getField('globalwarbotmanufacturingplants')
      
      
      
	  return {
        totalSupply,
		globalwarbotproduction,
		globalwarbotmanufacturingplants,
		
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

export default useMicroMachineManufacturingPlant
