import { useState, useEffect, useMemo } from 'react'
import Contract from 'web3-eth-contract'
import CCenter from '../build/contracts/WelfareCommandCenter.json'
import useWeb3 from './useWeb3'

const useCommandCenter = (address) => {
  const web3 = useWeb3()
  const [contract, setContract] = useState({})

  useEffect(() => {
    if (address) {
      Contract.setProvider(web3.givenProvider)
      setContract(new Contract(CCenter.abi, address))
      console.log("WELFARE COMMAND CENTER ADDRESS", address)
    } else {
      console.log("WELFARE COMMAND CENTER NOT SET")
    }
  }, [address])

  return [contract.methods, web3]
}

export default useCommandCenter
