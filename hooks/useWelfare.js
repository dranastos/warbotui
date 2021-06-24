import { useState, useEffect, useMemo } from 'react'
import Contract from 'web3-eth-contract'
import Welfare from '../build/contracts/Welfare.json'
import useWeb3 from './useWeb3'

const useWelfare = (address) => {
  const web3 = useWeb3()
  const [contract, setContract] = useState({})
  const [connected, setConnected] = useState(false)

  useEffect(() => {
	  console.log("ADDRESS WE HAVE for WELFARE ", address)
    if (address) {
      Contract.setProvider(global.window && window.ethereum)
      setContract(new Contract(Welfare.abi, address))
	  setConnected(true)
      console.log("WELFARE ADDRESS", address)
    } else {
      console.log("WELFARE NOT SET")
    }
  }, [address])

  return [contract.methods, web3]
}

export default useWelfare
