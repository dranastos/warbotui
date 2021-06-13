import { useState, useEffect, useMemo } from 'react'
import Contract from 'web3-eth-contract'
import WicCardMinter from '../build/contracts/WicCardMinter.json'
import useWeb3 from './useWeb3'

const useWicCardMinter = (address) => {
  const web3 = useWeb3()
  const [contract, setContract] = useState({})

  useEffect(() => {
    if (address) {
      Contract.setProvider(global.window && window.ethereum)
      setContract(new Contract(WicCardMinter.abi, address))
      console.log("WICCARDMINTER ADDRESS", address)
    } else {
      console.log("WICCARDMINTER NOT SET")
    }
  }, [address])

  return [contract.methods, web3]
}

export default useWicCardMinter
