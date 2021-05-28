import { useState, useEffect, useMemo } from 'react'
import Contract from 'web3-eth-contract'
import Welfare from '../build/contracts/Welfare.json'
import useWeb3 from './useWeb3'

const useVault = (address) => {
  const web3 = useWeb3()
  const [contract, setContract] = useState({})

  useEffect(() => {
    if (address) {
      Contract.setProvider(web3.givenProvider)
      setContract(new Contract(Welfare.abi, address))
      console.log("WELFARE ADDRESS", address)
    } else {
      console.log("WELFARE NOT SET")
    }
  }, [address])

  return [contract.methods, web3]
}

export default useVault
