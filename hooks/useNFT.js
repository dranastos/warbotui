import { useState, useEffect, useMemo } from 'react'
import Contract from 'web3-eth-contract'
import nanonft from '../build/contracts/NanoNFT.json'
import useWeb3 from './useWeb3'

const useNFT = (address) => {
  const web3 = useWeb3()
  const [contract, setContract] = useState({})
  const [connected, setConnected] = useState(false)

  useEffect(() => {
	 
    if (address) {
      Contract.setProvider(global.window && window.ethereum)
      setContract(new Contract(nanonft.abi, address))
	  setConnected(true)
      console.log("NANONFT ADDRESS", address)
    } else {
      console.log("NANONFT NOT SET")
    }
  }, [address])

  return [contract.methods, web3, connected]
}



export default useNFT
