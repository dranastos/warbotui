import { useState, useEffect, useMemo } from 'react'
import Contract from 'web3-eth-contract'
import Bonus from '../build/contracts/BonusVault.json'
import useWeb3 from './useWeb3'

const useContract = (address) => {
  const web3 = useWeb3()
  const [contract, setContract] = useState({})
  const [connected, setConnected] = useState(false)

  useEffect(() => {
    if (address) {
      Contract.setProvider(global.window && window.ethereum)
      setContract(new Contract(Bonus, address))
      setConnected(true)
    }
  }, [address])

  return {
    bonus: contract.methods,
    web3,
    connected
  }
}

export default useContract
