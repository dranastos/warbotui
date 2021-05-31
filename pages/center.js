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
import useCommandCenter from '../hooks/useCommandCenter'

const { Title, Text } = Typography
const { Item } = Descriptions

// COMMAND CENTER: 0xe73C89DFA51E82e7895b0E9E9B8E9b1b4A91b2b6
// BONUS: 0xEeCFE0b4c47cb5d61F180d721674a405A86FB53c
// WELFARE ADDRESS: 0xbEDA6Df7a5bCA914915fb80D13c1b6b32dF8F8ab
// SOCIAL SECURITY: 0x5d09f5E94f8f2cAb11DB1A7D1C71cdd80E7c0e69

export default function CommandCenter() {
  const wallet = useWallet()
  const [address, setAddress] = useState(false)
  const [state, actions] = useGlobal(['chain', 'center', 'hasCenter'])
  const { center, web3, connected } = useCommandCenter(state.center)
  const [show, setShow] = useState(false)
  const [data, setData] = useState({ })
  const [counter, setCounter] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (connected && wallet.status == 'connected' && state.hasCenter) {
      getInfo()
    }
  }, [connected, wallet.status, state.hasCenter])

  const getInfo = async() => {
    setLoading(true)
    const vaultAddr = await center.getBonusVault().call()
    const securityAddr = await center.getSocialSecurityAddress().call()
    const welfareAddr = await center.getWelfareAddress().call()
    setData({ vaultAddr, securityAddr, welfareAddr })
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

  const renderDashboard = useCallback(() => (
    <Row gutter={[20, 20]} style={{ marginTop: 20 }}>
      <Col span={24}>
        <Card>
          <Statistic title="Vault Address" value={data.vaultAddr} />
          <Input.Search
            placeholder="Change Vault Address"
            enterButton="Update"
            size="large"
            onSearch={value => updateInfo('updateBonusVaultAddress', value)}
            />
        </Card>
      </Col>
      <Col span={24}>
        <Card>
          <Statistic title="Security Address" value={data.securityAddr} />
          <Input.Search
            placeholder="Change Security Address"
            enterButton="Update"
            size="large"
            onSearch={value => updateInfo('updateSSAddress', value)}
            />
        </Card>
      </Col>
      <Col span={24}>
        <Card>
          <Statistic title="Welfare Address" value={data.welfareAddr} />
          <Input.Search
            placeholder="Change Welfare Address"
            enterButton="Update"
            size="large"
            onSearch={value => updateInfo('updateWelfareAddress', value)}
            />
        </Card>
      </Col>
    </Row>
  ), [data])

  return (
    <PublicLayout>
      <div style={{ padding: `20px 0px` }}>
        <Title level={2}>Command Center</Title>

        { state.hasCenter && renderDashboard() }

      </div>
    </PublicLayout>
  )
}
