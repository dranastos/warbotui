import { useState, useEffect, useMemo } from 'react'
import Contract from 'web3-eth-contract'
import CCenter from '../build/contracts/WelfareCommandCenter.json'
import useWeb3 from './useWeb3'

const useCommandCenter = (address) => {
  const web3 = useWeb3()
  const [contract, setContract] = useState({})
  const [connected, setConnected] = useState(false)

  useEffect(() => {
    if (address) {
      Contract.setProvider(global.window && window.ethereum)
      setContract(new Contract(CCenter.abi, address))
      setConnected(true)
      console.log("WELFARE COMMAND CENTER ADDRESS", address)
    } else {
      console.log("WELFARE COMMAND CENTER NOT SET")
    }
  }, [address])

  return {
    center: contract.methods,
    web3,
    connected
  }
}

export default useCommandCenter
