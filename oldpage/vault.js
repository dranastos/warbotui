import { useEffect, useState } from 'react'
import Head from 'next/head'
import { Layout, Menu, Breadcrumb, Typography, Space, Row, Col, Card, Slider, Form, Button, Input, Descriptions, notification } from 'antd'
const { Title, Text } = Typography
import PublicLayout from '../layouts/PublicLayout'
import { useWallet } from 'use-wallet'
const { Item } = Descriptions
import VaultDepositForm from '../forms/VaultDepositForm'
import SettleForm from '../forms/SettleForm'
import PenaltyAdjustForm from '../forms/PenaltyAdjustForm'

import useVault from '../hooks/useVault';

export default function Dashboard() {
  const wallet = useWallet()
  const [vault, web3] = useVault()

  useEffect(() => {
    if (wallet.status == 'connected') {
      getInfo()
    }
  }, [wallet.status])

  const getInfo = async() => {

  }

  return (
    <PublicLayout>
      <div style={{ padding: `20px 0px` }}>
        <Title>Pension Vault</Title>

        

      </div>
    </PublicLayout>
  )
}
