import { useState, useEffect, useMemo } from 'react'
import Contract from 'web3-eth-contract'
import Nanostaking from '../build/contracts/Nanostaking.json'
import useWeb3 from './useWeb3'

const useNanostaking = (address) => {
  const web3 = useWeb3()
  const [contract, setContract] = useState({})

  useEffect(() => {
    if (address) {
      Contract.setProvider(global.window && window.ethereum)
      setContract(new Contract(Nanostaking.abi, address))
      console.log("NANOSTAKING ADDRESS", address)
    } else {
      console.log("NANOSTAKING NOT SET")
    }
  }, [address])

  return [contract.methods, web3]
}

export default useNanostaking
