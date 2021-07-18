import { useState, useEffect, useMemo } from 'react'
import Contract from 'web3-eth-contract'
import WarbotStatsData from '../build/contracts/WarbotStatsData.json'
import useWeb3 from './useWeb3'

const useWarbotStatsData = (address) => {
  const web3 = useWeb3()
  const [contract, setContract] = useState({})
  const [connected, setConnected] = useState(false)

  useEffect(() => {
	 
    if (address) {
      Contract.setProvider(global.window && window.ethereum)
      setContract(new Contract(WarbotStatsData.abi, address))
	  setConnected(true)
	  console.log("WARBOTSTATSDATA CONNECTED")
      console.log("WARBOTSTATSDATA ADDRESS", address)
     
	} else {
      console.log("WARBOTSTATSDATA NOT SET")
    }
  }, [address])

  return [contract.methods, connected]
}

export default useWarbotStatsData
