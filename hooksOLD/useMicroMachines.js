import { useState, useEffect, useMemo } from 'react'
import Contract from 'web3-eth-contract'
import MicroMachines from '../build/contracts/MicroMachines.json'
import useWeb3 from './useWeb3'

const useMicroMachines = (address) => {
  const web3 = useWeb3()
  const [contract, setContract] = useState({})
  const [connected, setConnected] = useState(false)

  useEffect(() => {
	 
    if (address) {
      Contract.setProvider(global.window && window.ethereum)
      setContract(new Contract(MicroMachines.abi, address))
	  setConnected(true)
      console.log("MicroMachines ADDRESS", address)
    } else {
      console.log("MICROMACHINES NOT SET")
    }
  }, [address])

  return [contract.methods, web3, connected]
}

export default useMicroMachines
