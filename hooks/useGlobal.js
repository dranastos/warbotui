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
  setTestnet: (store) => store.setState({ chain: 97 }),
  setMainnet: (store) => store.setState({ chain: 56 }),
  addVaultCount: (store) => store.setState({ vaultCount: store.state.vaultCount + 1 })
}

const initialState = {
  chain: 97, // 56 - Mainnet | 97 - Testnet
  security: '0xD2511C55246Bd9f697931C5e5CAfD64c30882B91',
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
 
  masterchef: '0x9eB6DEA48F004FF1A20f0499C9099616C8038Bbb',
  hasMasterchef: true,
  micromachines: '0xEA0f4B6fF0E921dB09F4f2A214a5927B09EC8103',
  hasMicromachines: true,
  nanomachines: '0x9E59667490263361F39774D4e31678340795Ac81',
  hasNanomachines: true,
  nanostaking:   '0x029B2Cc69a3f43F166C5684bD2E60a43CAC33e68',
  hasNanostaking: true,
  nanobnblp:   '0xad7806487D47613ce9Ce9e78633058381Abd784C',
  hasNanobnblp: true,
  microbnblp:   '0xd1E0Da81736d365C1Ce99ABd942e490cFD0D5DDB',
  hasMicrobnblp: true,
  warbotmanufacturer: '0xD2511C55246Bd9f697931C5e5CAfD64c30882B91',
  warbotmanufacturer: {},
  hasWarbotmanufacturer: true,
  vaultCount: 0
}

export const useGlobal = globalHook(React, initialState, actions)

export default useGlobal
