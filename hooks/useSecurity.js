import { useState, useEffect, useMemo } from 'react'
import Contract from 'web3-eth-contract'
import SSecurity from '../build/contracts/SocialSecurity.json'
import useWeb3 from './useWeb3'

const useSecurity = (address) => {
  const web3 = useWeb3()
  const [contract, setContract] = useState({})

  useEffect(() => {
    if (address) {
      Contract.setProvider(web3.givenProvider)
      setContract(new Contract(SSecurity.abi, address))
      console.log("SOCIAL SECURITY ADDRESS", address)
    } else {
      console.log("SOCIAL SECURITY ADDRESS NOT SET")
    }
  }, [address])

  const getField = async(field) => await contract.methods[field]().call()

  return [contract.methods, web3, getField]
}

export default useSecurity
