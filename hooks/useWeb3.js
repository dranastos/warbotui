import Web3 from 'web3'

const useWeb3 = () => {
  return new Web3(Web3.givenProvider)
}

export default useWeb3
