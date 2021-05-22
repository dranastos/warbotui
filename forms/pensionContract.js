import Contract from 'web3-eth-contract'
import Pension from '../build/contracts/Pension.json'
Contract.setProvider(global.window && window.ethereum)
const contract = new Contract(Pension.abi, '0xEe01AA16D9F79623a174B61F6BE67dB287fc9722')
export default contract


// Command Center
//
