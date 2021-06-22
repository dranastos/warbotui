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
      store.setState({ wicCardMinter: '', hasWicCardMinter: false })
    }
  },
  setTestnet: (store) => store.setState({ chain: 97 }),
  setMainnet: (store) => store.setState({ chain: 56 }),
  addVaultCount: (store) => store.setState({ vaultCount: store.state.vaultCount + 1 })
}

const initialState = {
  chain: 97, // 56 - Mainnet | 97 - Testnet
  security: '0xADF698bfbB5E44A594b40332a7EdBcC161414159',
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
  welfare: '0xc34885ec2a16C1BA95308F3bebdB7407766AAEe4',
  hasWelfare: true,
  wicCardMinter: '0x4415F97e358b4C084DE270aa9E929b07311829dC',
  hasWicCardMinter: true,
  vaultCount: 0
}

export const useGlobal = globalHook(React, initialState, actions)

export default useGlobal
