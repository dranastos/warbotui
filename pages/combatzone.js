import { useEffect, useState, useCallback } from 'react'
import { useWallet } from 'use-wallet'
import moment from 'moment'
import Head from 'next/head'
import {
  Layout, Menu, Breadcrumb, Typography, Space, Spin, Alert,
  Tabs, Statistic, Row, Col, Card, Slider, Form, Button, Input, Descriptions,
  notification
} from 'antd'

import PublicLayout from '../layouts/PublicLayout'

import useGlobal from '../hooks/useGlobal'
import useBonus from '../hooks/useBonus'

const { Title, Text } = Typography
const { Item } = Descriptions

// COMMAND CENTER: 0xe73C89DFA51E82e7895b0E9E9B8E9b1b4A91b2b6
// BONUS: 0xEeCFE0b4c47cb5d61F180d721674a405A86FB53c
// WELFARE ADDRESS: 0xbEDA6Df7a5bCA914915fb80D13c1b6b32dF8F8ab
// SOCIAL SECURITY: 0x5d09f5E94f8f2cAb11DB1A7D1C71cdd80E7c0e69

export default function BonusVault() {
  const wallet = useWallet()
  const [address, setAddress] = useState(false)
  const [state, actions] = useGlobal(['chain', 'bonus', 'hasBonus'])
  const { bonus, web3, connected } = useBonus(state.bonus)
  const [show, setShow] = useState(false)
  const [data, setData] = useState({ })
  const [counter, setCounter] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log("STATE", state)
    if (connected && state.hasBonus) {
      getInfo()
    }
  }, [connected, state.hasBonus])

  const getInfo = async() => {
    setLoading(true)
    const welfareAddr = await bonus.welfarecontract().call()
    const securityAddr = await bonus.socialsecuritycontract().call()
    const centerAddr = await bonus.WelfareCommandCenterAddress().call()
    setData({ centerAddr, securityAddr, welfareAddr })
    setLoading(false)
  }

  const updateInfo = async(field, value) => {
    setLoading(true)
    if (value.startsWith('0x') && value.length == 42) {
      const tx = await contract[field](value).send({ from: wallet.account, to: state.center })
      if (tx.status) {
        notification.success({
          message: 'Update Successful',
          description: tx.transactionHash,
        })
      }
    } else {
      notification.error({
        message: 'Update Failed',
        description: 'Address Incorrect'
      })
    }
    setLoading(false)
  }

  const updateBonusVault = async() => {
    const tx = await contract.updateBonusVaultAddress().send({ from: wallet.account, to: state.center })
    if (tx.status) {
      notification.success({
        message: 'Update Successful',
        description: tx.transactionHash,
      })
    }
  }

  const renderDashboard = useCallback(() => (
    <Row gutter={[20, 20]} style={{ marginTop: 20 }}>
      
      <Col span={24}>
        <Card>
          <Statistic title="Head to Head Warbot Combat" value="UNDER CONSTRUCTION" />
         </Card> 
      </Col>
      
      
    </Row>
  ), [data])

  return (
    <PublicLayout>
      <div style={{ padding: `20px 0px` }}>
        <Title level={2}>Combat Zone</Title>
        { state.hasBonus && renderDashboard() }

      </div>
    </PublicLayout>
  )
}
