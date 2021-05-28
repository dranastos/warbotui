import { useState, useEffect, useMemo } from 'react'
import Contract from 'web3-eth-contract'
import abi from '../build/contracts/FreeWelfare.json'
import useWeb3 from './useWeb3'

const useFree = (address) => {
  const web3 = useWeb3()
  const [contract, setContract] = useState({})

  useEffect(() => {
    if (address) {
      Contract.setProvider(web3.givenProvider)
      setContract(new Contract(abi, address))
    }
  }, [address])

  return [contract.methods, web3]
}

export default useFree
