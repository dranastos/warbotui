import { useState, useEffect, useMemo } from 'react'
import Contract from 'web3-eth-contract'
import WarContract from '../build/contracts/WarContract.json'
import useWeb3 from './useWeb3'

const useWarContract = (address) => {
  const web3 = useWeb3()
  const [contract, setContract] = useState({})
  const [connected, setConnected] = useState(false)

  useEffect(() => {
	 console.log("war contract address: " + address)
    if (address) {
      Contract.setProvider(global.window && window.ethereum)
      setContract(new Contract(WarContract.abi, address))
	  setConnected(true)
      console.log("WarContract ", address)
    } else {
      console.log("WarContract  NOT SET")
    }
  }, [address])

  return [contract.methods, web3, connected]
}

export default useWarContract
