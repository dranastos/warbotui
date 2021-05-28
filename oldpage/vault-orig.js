import { useEffect, useState } from 'react'
import Head from 'next/head'
import { Layout, Menu, Breadcrumb, Typography, Space, Row, Col, Card, Slider, Form, Button, Input, Descriptions, notification } from 'antd'
const { Title, Text } = Typography
import PublicLayout from '../layouts/PublicLayout'
import { useWallet } from 'use-wallet'
const { Item } = Descriptions
import contract from '../forms/pensionContract'
import VaultDepositForm from '../forms/VaultDepositForm'
import SettleForm from '../forms/SettleForm'
import PenaltyAdjustForm from '../forms/PenaltyAdjustForm'

export default function Dashboard() {
  const wallet = useWallet()
  const [pension, setPension] = useState({ })
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    if (wallet.status == 'connected') {
      getInfo()
    }
  }, [wallet.status])

  const getInfo = async() => {
    let owner = await getField('owner')
    let timePeriod = await getField('timePeriod')
    let pensionTaxReceivingContract = await getField('pensionTaxReceivingContract')
    let globalDepositNumber = await getField('globalDepositNumber')
    let globalPensionTaxDepositNumber = await getField('globalPensionTaxDepositNumber')
    let totalTaxCollected = await getField('totalTaxCollected')
    let totalPensionVaults = await getField('totalPensionVaults')
    let totalTaxCollectedByPensioners = await getField('totalTaxCollectedByPensioners')

    let token = await getField('token')
    let pensionvault = await getField('pensionvault')

    setPension({ ...pension,
      owner, timePeriod, pensionTaxReceivingContract,
      pensionTaxReceivingContract, globalDepositNumber, globalPensionTaxDepositNumber,
      totalTaxCollected, totalPensionVaults, totalTaxCollectedByPensioners,
      token, pensionvault
    })

    setCounter(counter + 1)
  }

  const comradeVaultDeposit = async() => {
    const reply = await contract.methods.comradeVaultDeposit().send()
  }

  const getField = async(field) => await contract.methods[field]().call()

// Pension 0xEe01AA16D9F79623a174B61F6BE67dB287fc9722

  return (
    <PublicLayout>
      <div style={{ padding: `20px 0px` }}>
        <Title>Pension Vault</Title>
      </div>
    </PublicLayout>
  )
}
