import { useState, useEffect, useMemo } from 'react'
import Contract from 'web3-eth-contract'
import nanosales from '../build/contracts/Nanosales.json'
import useWeb3 from './useWeb3'

const useNanosales = (address) => {
  const web3 = useWeb3()
  const [contract, setContract] = useState({})
  const [connected, setConnected] = useState(false)

  useEffect(() => {
	 
    if (address) {
      Contract.setProvider(global.window && window.ethereum)
      setContract(new Contract(nanosales.abi, address))
	  setConnected(true)
      console.log("NANOSALES ADDRESS", address)
    } else {
      console.log("NANOSALES NOT SET")
    }
  }, [address])

  return [contract.methods, web3]
}

export default useNanosales
