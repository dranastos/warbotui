import { useState, useEffect, useMemo } from 'react'
import Contract from 'web3-eth-contract'
import Nanomachines from '../build/contracts/Nanomachines.json'
import useWeb3 from './useWeb3'

const useMicrobnblp = (address) => {
  const web3 = useWeb3()
  const [contract, setContract] = useState({})

  useEffect(() => {
    if (address) {
      Contract.setProvider(global.window && window.ethereum)
      setContract(new Contract(Nanomachines.abi, address))
      console.log("MICROBNBLP ADDRESS", address)
    } else {
      console.log("MICROBNBLP NOT SET")
    }
  }, [address])

  return [contract.methods, web3]
}

export default useMicrobnblp
