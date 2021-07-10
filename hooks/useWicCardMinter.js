import { useState, useEffect, useMemo } from 'react'
import Contract from 'web3-eth-contract'
import nanonft from '../build/contracts/NanoNFT.json'
import useWeb3 from './useWeb3'

const useWicCardMinter = (address) => {
  const web3 = useWeb3()
  const [contract, setContract] = useState({})
  const [connected, setConnected] = useState(false)

  useEffect(() => {
    if (address) {
      Contract.setProvider(global.window && window.ethereum)
      setContract(new Contract( WicCardMinter.abi, address))
      setConnected(true)
	  console.log ( "connected " , address )
    }
  }, [address])
  
  const sendWicCardTx = async(field, wallet, ...rest) => {
    if (connected) {
      return await contract.methods[field](...rest).send({ from: wallet, to: address })
    }
    return false
  }

  return {
    "wiccardminter":contract.methods,
    web3,
    connected,
	sendWicCardTx
  }
  
  
}

export default useWicCardMinter
