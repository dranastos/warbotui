import React from 'react';
import globalHook from './globalHook';

const actions = {
  setSecurity: (store, security) => {
	  console.log("SETTING Sec WITH " + welfare )
    if (security && security.startsWith('0x') && security.length == 42) {
      store.setState({ security, hasSecurity: true })
    } else {
      store.setState({ security: '', hasSecurity: false })
    }
  },
  setSecurityInfo: (store, securityInfo) => {
    store.setState({ securityInfo })
  },
  setVault: (store, vault) => {
    if (vault && vault.startsWith('0x') && vault.length == 42) {
      store.setState({ vault, hasVault: true })
    } else {
      store.setState({ vault: '', hasVault: false })
    }
  },
  setBonus: (store, bonus) => {
    if (bonus && bonus.startsWith('0x') && bonus.length == 42) {
      store.setState({ bonus, hasBonus: true })
    } else {
      store.setState({ bonus: '', hasBonus: false })
    }
  },
  setWicBonus: (store, wicbonus) => {
    if (wicbonus && wicbonus.startsWith('0x') && wicbonus.length == 42) {
      store.setState({ wicbonus, hasWicBonus: true })
    } else {
      store.setState({ wicbonus: '', hasWicBonus: false })
    }
  },
  setCenter: (store, center) => {
    if (center && center.startsWith('0x') && center.length == 42) {
      store.setState({ center, hasCenter: true })
    } else {
      store.setState({ center: '', hasCenter: false })
    }
  },
  setWelfare: (store, welfare) => {
    console.log("SET WELFARE")
	console.log("SETTING WITH " + welfare )
    if (welfare && welfare.startsWith('0x') && welfare.length == 42) {
      store.setState({ welfare, hasWelfare: true })
    } else {
      store.setState({ welfare: '', hasWelfare: false })
    }
  },
  setWicCardMinter: (store, wicCardMinter) => {
    console.log("SET WICCARDMINTER")
    if (wicCardMinter && wicCardMinter.startsWith('0x') && wicCardMinter.length == 42) {
      store.setState({ wicCardMinter, haswicCardMinter: true })
    } else {
      store.setState({ wicCardMinter: '', hasWicCardMinter: false })
    }
  },
  setNanomachines: (store, nanomachines) => {
    console.log("SET NANOMACHINE")
    if (nanomachines && nanomachines.startsWith('0x') && nanomachine.length == 42) {
      store.setState({ nanomachines, hasNanomachines: true })
    } else {
      store.setState({ nanomachines: '', hasNanomachines: false })
    }
  },
  setNanostaking: (store, nanostaking) => {
    console.log("SET NANOMACHINE")
    if (nanostaking && nanostaking.startsWith('0x') && nanostaking.length == 42) {
      store.setState({ nanostaking, hasNanostaking: true })
    } else {
      store.setState({ nanostaking: '', hasNanostaking: false })
    }
  },
  setMasterchef: (store, masterchef) => {
    console.log("SET MASTERCHEF")
    if (masterchef && masterchef.startsWith('0x') && masterchef.length == 42) {
      store.setState({ masterchef, hasMasterchef: true })
    } else {
      store.setState({ masterchef: '', hasMasterchef: false })
    }
  },
  setBusd: (store, busd) => {
    console.log("SET BUSD")
    if (busd && busd.startsWith('0x') && busd.length == 42) {
      store.setState({ busd, hasBusd: true })
    } else {
      store.setState({ busd: '', hasBusd: false })
    }
  },
  setNanosales: (store, busd) => {
    console.log("SET NANOSALES")
    if (nanosales && nanosales.startsWith('0x') && busd.length == 42) {
      store.setState({ nanosales, hasNanosales: true })
    } else {
      store.setState({ nanosales: '', hasNanosales: false })
    }
  },
   setWarbotmanufacturer: (store, warbotmanufacturer) => {
    console.log("SET Warbotmanufacturer")
    if (warbotmanufacturer && warbotmanufacturer.startsWith('0x') && busd.length == 42) {
      store.setState({ warbotmanufacturer, hasWarbotmanufacturer: true })
    } else {
      store.setState({ warbotmanufacturer: '', hasWarbotmanufacturer: false })
    }
  },
  setTestnet: (store) => store.setState({ chain: 97 }),
  setMainnet: (store) => store.setState({ chain: 56 }),
  addVaultCount: (store) => store.setState({ vaultCount: store.state.vaultCount + 1 })
}

const initialState = {
  chain: 137, // 56 - Mainnet | 97 - Testnet
  //bsc chain: 97, // 56 - Mainnet | 97 - Testnet
  security: '0x99465Cd00D42AEd0262c54EaE49365558AD5066f',
  // BNB security: '0x4e368038DeE69A290eD4433661F159Ee34eB5c69',
  securityInfo: {},
  hasSecurity: true,
  vault: '',
  hasVault: false,
  center: '0x53019b3DA4acC6c3C01bEa4FDD8E93773716715D',
  hasCenter: true,
  bonus: '0x60d80ae39F74d6Cd694E61ec43c90A6B02130b47',
  hasBonus: true,
  wicbonus: '0x390895B239a6e1FaBd22FecBaBC71F39948f39cC',
  hasWicBonus: true,
  
  nanosales: '0xcd62fAf0AE83EbfE726AD6BbA966c9084c3AD866',
  //bnb nanosales: '0x0e92A7fE6b298671ED6b6cA7Df0962eE757c9A3F',
  hasNanosales: true, 
  
  busd : '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
  hasBusd: true, 
  
  masterchef: '0xe7576D71f162dfCC64c7128d46Ac41Ee8116d424',
  //bnb masterchef: '0x9eB6DEA48F004FF1A20f0499C9099616C8038Bbb',
  hasMasterchef: true,
  
  micromachines: '0x9c053B671de651fA1d4C7eDE10a09789218068c1',
  //bnb micromachines: '0xc50Dcd6612eEE0A69822C2a0ABa2572ee65bD853',
  hasMicromachines: true,
  
  nanomachines: '0xc10006027DCFdABdce5BA9c589b7900241681510',
  //bnb nanomachines: '0x9E59667490263361F39774D4e31678340795Ac81',
  hasNanomachines: true,
  
  nanostaking:   '0x029B2Cc69a3f43F166C5684bD2E60a43CAC33e68',
  hasNanostaking: true,
  
  nanobnblp:   '0x3BeD127C91E82A8FfE331C1Fd9d25d7e0d5B8E7e',
  // bnb nanobnblp:   '0xad7806487D47613ce9Ce9e78633058381Abd784C',
  hasNanobnblp: true,
  
  microbnblp: '0xb0E283BB71471F6b1A046580AA2117317D1b50a1',
  //bnb microbnblp:   '0xd1E0Da81736d365C1Ce99ABd942e490cFD0D5DDB',
  hasMicrobnblp: true,
  warbotmanufacturer: '0x99465Cd00D42AEd0262c54EaE49365558AD5066f',
  // BNB warbotmanufacturer: '0x4e368038DeE69A290eD4433661F159Ee34eB5c69',
  warbotmanufacturerInfo: {},
  hasWarbotmanufacturer: true,
  vaultCount: 0
}

export const useGlobal = globalHook(React, initialState, actions)

export default useGlobal
