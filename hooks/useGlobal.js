import React from 'react';
import globalHook from './globalHook';

const actions = {
  setSecurity: (store, security) => {
    if (security && security.startsWith('0x') && security.length == 42) {
      store.setState({ security, hasSecurity: true })
    } else {
      store.setState({ hasSecurity: false })
    }
  },
  setVault: (store, vault) => {
    if (vault && vault.startsWith('0x') && vault.length == 42) {
      store.setState({ vault, hasVault: true })
    } else {
      store.setState({ hasVault: false })
    }
  },
  setBonus: (store, bonus) => {
    if (bonus && bonus.startsWith('0x') && bonus.length == 42) {
      store.setState({ bonus, hasBonus: true })
    } else {
      store.setState({ hasBonus: false })
    }
  },
  setCenter: (store, center) => {
    if (center && center.startsWith('0x') && center.length == 42) {
      store.setState({ center, hasCenter: true })
    } else {
      store.setState({ hasCenter: false })
    }
  },
  setWelfare: (store, welfare) => {
    if (welfare && welfare.startsWith('0x') && welfare.length == 42) {
      store.setState({ welfare, hasWelfare: true })
    } else {
      store.setState({ hasWelfare: false })
    }
  },
  setTestnet: (store) => store.setState({ chain: 97 }),
  setMainnet: (store) => store.setState({ chain: 56 }),
  addVaultCount: (store) => store.setState({ vaultCount: store.state.vaultCount + 1 })
}

const initialState = {
  chain: 97, // 56 - Mainnet | 97 - Testnet
  security: false,
  hasSecurity: false,
  vault: false,
  hasVault: false,
  center: false,
  hasCenter: false,
  bonus: false,
  hasBonus: false,
  welfare: false,
  hasWelfare: false,
  vaultCount: 0
}

export const useGlobal = globalHook(React, initialState, actions)

export default useGlobal
