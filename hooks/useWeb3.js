import Web3 from 'web3'

const useWeb3 = () => {
  return new Web3(global.window && window.ethereum)
}

export default useWeb3
