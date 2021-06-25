import { useState, useEffect, useMemo } from 'react'
import Contract from 'web3-eth-contract'
import Masterchef from '../build/contracts/Masterchef.json'
import useWeb3 from './useWeb3'

const useMasterchef = (address) => {
  const web3 = useWeb3()
  const [contract, setContract] = useState({})
  const [connected, setConnected] = useState(false)

  useEffect(() => {
	  console.log("ADDRESS WE HAVE for Masterchef ", address)
    if (address) {
      Contract.setProvider(global.window && window.ethereum)
      setContract(new Contract(Masterchef.abi, address))
	  setConnected(true)
      console.log("MASTERCHEF ADDRESS", address)
    } else {
      console.log("MASTERCHEF NOT SET")
    }
  }, [address])

  return [contract.methods, web3]
}

export default useMasterchef
