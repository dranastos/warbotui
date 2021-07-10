import { useState, useEffect, useMemo } from 'react'
import Contract from 'web3-eth-contract'
import WarbotStats from '../build/contracts/WarbotStats.json'
import useWeb3 from './useWeb3'

const useWarbotStats = (address) => {
  const web3 = useWeb3()
  const [contract, setContract] = useState({})
  const [connected, setConnected] = useState(false)

  useEffect(() => {
	 
    if (address) {
      Contract.setProvider(global.window && window.ethereum)
      setContract(new Contract(WarbotStats.abi, address))
	  setConnected(true)
	   console.log("WARBOTSTATS CONNECTED")
      console.log("WARBOTSTATS ADDRESS", address)
    } else {
      console.log("WARBOTSTATS NOT SET")
    }
  }, [address])

  return [contract.methods, connected]
}

export default useWarbotStats
