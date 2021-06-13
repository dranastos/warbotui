import React from 'react';
import globalHook from './globalHook';

const actions = {
  setSecurity: (store, security) => {
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
      store.setState({ wicCardMinter: '', hasWelfare: false })
    }
  },
  setTestnet: (store) => store.setState({ chain: 97 }),
  setMainnet: (store) => store.setState({ chain: 56 }),
  addVaultCount: (store) => store.setState({ vaultCount: store.state.vaultCount + 1 })
}

const initialState = {
  chain: 97, // 56 - Mainnet | 97 - Testnet
  security: '0x0293130729b0e45A40e4236c12AC7DFEDc4f1BFb',
  securityInfo: {},
  hasSecurity: true,
  vault: '',
  hasVault: false,
  center: '0x09F5Db17dc0339cDc3F66BC51c77d00d368d9842',
  hasCenter: true,
  bonus: '0x17cD2397A2b23c1241029B1d6711e788538d7655',
  hasBonus: true,
  wicbonus: '0xCAe88a40787D82Ba4438FD3e65f69d30D4132A64',
  hasWicBonus: true,
  welfare: '0xB3c64913E2417f33c08af57fA4810D4B6DF406E3',
  hasWelfare: true,
  wicCardMinter: '0xEd8E23e0Ab749995ceC18787812cfDC5A837aa65',
  hasWicCardMinter: true,
  vaultCount: 0
}

export const useGlobal = globalHook(React, initialState, actions)

export default useGlobal
