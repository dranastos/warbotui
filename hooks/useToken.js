import { useState, useEffect, useMemo } from 'react'
import Contract from 'web3-eth-contract'
import ERC20 from '../build/contracts/ERC20.json'
import useWeb3 from './useWeb3'

const useToken = (address) => {
  const web3 = useWeb3()
  const [contract, setContract] = useState({})
  const [connected, setConnected] = useState(false)

  useEffect(() => {
	 
    if (address) {
      Contract.setProvider(global.window && window.ethereum)
      setContract(new Contract(ERC20.abi, address))
	  setConnected(true)
      console.log("TOKEN ADDRESS", address)
    } else {
      console.log("TOKEN NOT SET")
    }
  }, [address])

  return [contract.methods, web3, connected]
}

export default useToken
