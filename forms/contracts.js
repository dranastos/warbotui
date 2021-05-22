import Contract from 'web3-eth-contract'
import SSecurity from '../build/contracts/SocialSecurity.json'
Contract.setProvider(global.window && window.ethereum)

export const SocialSecurity = new Contract(SSecurity.abi, '0xCe3dd2ABFA5fC3D9bA951F6bA5d9786c0f90D0B5')

export default {
  SocialSecurity
}

// Command Center
//
