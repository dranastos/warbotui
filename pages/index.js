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
import VaultDepositForm from '../forms/VaultDepositForm'
import UserDeposits from '../forms/UserDeposits'
import UserDepositsClosed from '../forms/UserDepositsClosed'
import UserDepositsExpiredUnsettled from '../forms/UserDepositsExpiredUnsettled'
import useGlobal from '../hooks/useGlobal'
import useSecurity from '../hooks/useSecurity'

const { Title, Text } = Typography
const { Item } = Descriptions

// import SettleForm from '../forms/SettleForm'
// import PenaltyAdjustForm from '../forms/PenaltyAdjustForm'
// import PullTaxForm from '../forms/PullTaxForm'

// COMMAND CENTER: 0xe73C89DFA51E82e7895b0E9E9B8E9b1b4A91b2b6
// BONUS: 0xEeCFE0b4c47cb5d61F180d721674a405A86FB53c
// WELFARE ADDRESS: 0xbEDA6Df7a5bCA914915fb80D13c1b6b32dF8F8ab
// SOCIAL SECURITY: 0x5d09f5E94f8f2cAb11DB1A7D1C71cdd80E7c0e69


export default function Dashboard() {
  const wallet = useWallet()
  const [address, setAddress] = useState(false)
  const [state, actions] = useGlobal(['chain', 'security', 'hasSecurity', 'welfare', 'securityInfo', 'vaultCount'])
  const { security, web3, getField, sendTx, connected, getFields } = useSecurity(state.security)
  const [show, setShow] = useState(false)
  const [pension, setPension] = useState({ })
  const [counter, setCounter] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (state.hasSecurity && connected) {
      getInfo()
    }
  }, [state.hasSecurity, state.vaultCount, connected])

  const getInfo = async() => {
    setLoading(true)
    const securityInfo = await getFields()
    setPension(securityInfo)
    actions.setSecurityInfo(securityInfo)
    setLoading(false)
  }

  const renderStats = useCallback(() => (
    <Spin spinning={loading}>
      <Card title="Pension Contract" extra={<Button type="primary" onClick={getInfo}>Refresh</Button>}>
        <Row gutter={[20, 20]}>
          <Col span={8}>
            <Statistic title="Global Deposit Number" value={pension.globalDepositNumber} />
          </Col>
          <Col span={8}>
            <Statistic title="Global Deposit Time Value" value={pension.globalDepositTimeValue} />
          </Col>
          <Col span={8}>
            <Statistic title="Time Period" value={pension.timePeriod} />
          </Col>
          <Col span={8}>
            <Statistic title="Total Pension Vaults" value={pension.totalSSVaults} />
          </Col>
          <Col span={8}>
            <Statistic title="Reflect Balance" value={pension.reflectBalance} />
          </Col>
          <Col span={8}>
            <Statistic title="Tax Deposit Number" value={pension.globalSSTaxDepositNumber} />
          </Col>
          <Col span={8}>
            <Statistic title="Total Collected Tax" value={pension.totalTaxCollected} />
          </Col>
          <Col span={8}>
            <Statistic title="Tax Collected By Pensioners" value={pension.totalTaxCollectedByPensioners} />
          </Col>
          <Col span={12}>
            <Statistic title="Owner" value={pension.owner} />
          </Col>
          <Col span={12}>
            <Statistic title="Welfare Token" value={pension.token} />
          </Col>
          <Col span={12}>
            <Statistic title="Command Center" value={pension.welfareAddress} />
          </Col>
          <Col span={12}>
            <Statistic title="Vault" value={pension.bonusVault} />
          </Col>
          <Col span={12}>
            <Statistic title="Emergency" value={pension.emergencyAddress} />
          </Col>
          <Col span={12}>
            <Statistic title="Social Security Receiving Contract" value={pension.ssTaxReceivingContract} />
          </Col>
        </Row>
      </Card>
    </Spin>
  ), [pension, loading])

  return (
    <PublicLayout>
      <div style={{ padding: `20px 0px` }}>
        <Title level={2}>Social Security</Title>

        {
          (state.hasSecurity && wallet.status == 'connected') && (
            <div>
              <Space style={{ marginTop: 20 }}>
                <Button
                  size="large"
                  type="primary"
                  onClick={() => sendTx('depositSSTax', wallet.account)}>
                  Deposit Tax
                </Button>
                <Button
                  size="large"
                  type="primary"
                  onClick={() => sendTx('sweepReflectBalance', wallet.account)}>
                  Sweep Reflect Balance
                </Button>
              </Space>
              <Tabs defaultActiveKey="dashboard" style={{ marginTop: 20 }}>
                <Tabs.TabPane tab="Pensioner Dashboard" key="dashboard">
                  <Row gutter={20} style={{ marginTop: `10px`, marginBottom: `30px` }}>
                    <Col xs={8}>
                      <VaultDepositForm />
                    </Col>
                    <Col xs={16}>
					  <UserDeposits />
					   <Space style={{ marginTop: 20 }}></Space>
					  <UserDepositsExpiredUnsettled />
                    </Col>
                  </Row>
                </Tabs.TabPane>
				<Tabs.TabPane tab="Closed Vaults" key="closedVaults">
                   <UserDepositsClosed />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Contract Details" key="details">
                  { renderStats() }
                </Tabs.TabPane>
				
              </Tabs>
            </div>
          )
        }

      </div>
    </PublicLayout>
  )
}

        //
        // {
        //   (wallet.status == 'connected' && pension.owner == wallet.account) && (
        //     <div>
        //       <Title level={2}>Pension Depositor Only</Title>
        //       <Row gutter={20} style={{ marginTop: `10px`, marginBottom: `30px` }}>
        //         <Col xs={8}>
        //           <PullTaxForm />
        //         </Col>
        //         <Col xs={8}>
        //           <SettleForm />
        //         </Col>
        //         <Col xs={8}>
        //           <PenaltyAdjustForm />
        //         </Col>
        //       </Row>
        //     </div>
        //
        //   )
        // }
