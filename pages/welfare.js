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
import useWelfare from '../hooks/useWelfare'
import useFree from '../hooks/useFree'

const { Title, Text } = Typography
const { Item } = Descriptions

// COMMAND CENTER: 0xe73C89DFA51E82e7895b0E9E9B8E9b1b4A91b2b6
// BONUS: 0xEeCFE0b4c47cb5d61F180d721674a405A86FB53c
// WELFARE ADDRESS: 0xbEDA6Df7a5bCA914915fb80D13c1b6b32dF8F8ab
// SOCIAL SECURITY: 0x5d09f5E94f8f2cAb11DB1A7D1C71cdd80E7c0e69
// FREE TOKENS: 0xb5B8cD15Eac571F3d733e3F4ad01143D1548C6ce

const FREETOKENS = '0xb5B8cD15Eac571F3d733e3F4ad01143D1548C6ce'

export default function CommandCenter() {
  const wallet = useWallet()
  const [address, setAddress] = useState(false)
  const [state, actions] = useGlobal(['chain', 'security', 'hasSecurity', 'welfare', 'hasWelfare'])
  const [contract, web3] = useWelfare(state.welfare)
  const [free] = useFree(FREETOKENS)
  const [show, setShow] = useState(false)
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (wallet.status == 'connected' && state.hasWelfare) {
      console.log("WELFARE", state)
    }
  }, [wallet.status, state.hasWelfare])

  const renderActions = useCallback(() => (
    <Card style={{ marginTop: 20 }}>
      <Row gutter={20}>
        <Col span={8}>
          <Statistic title="Balance" value={data.balance} />
        </Col>
      </Row>
    </Card>
  ), [state, wallet])

  const claimFree = async() => {
    setLoading(true)
    try {
      const tx = await free.claim(state.welfare, web3.utils.toWei('10000', 'gwei')).send({
        from: wallet.account,
        to: FREETOKENS
      })
      if (tx.status) {
        notification.success({
          message: 'Claim Successful',
          description: tx.transactionHash
        })
      }
    } catch (e) {
      
    }
    setLoading(false)
  }

  return (
    <PublicLayout>
      <div style={{ padding: `20px 0px` }}>
        <Title level={2}>Welfare</Title>

        { (state.chain == '97' && wallet.status == 'connected') && <Button type="danger" size="large" loading={loading} onClick={claimFree}>Claim FREE Welfare (WIC) Testnet Tokens</Button> }

        { state.hasWelfare && renderActions() }

      </div>
    </PublicLayout>
  )
}
