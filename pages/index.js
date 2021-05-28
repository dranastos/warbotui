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
  const [state, actions] = useGlobal(['chain', 'security', 'hasSecurity', 'vault', 'hasVault'])
  const [security, web3, getField, sendTx] = useSecurity(state.security)
  const [show, setShow] = useState(false)
  const [pension, setPension] = useState({ })
  const [counter, setCounter] = useState(0)
  const [loading, setLoading] = useState(false)

  // console.log("STATE", state)

  useEffect(() => {
    if (wallet.status == 'connected' && state.hasSecurity) {
      getInfo()
    }
  }, [wallet, state])

  const getInfo = async() => {
    setLoading(true)
    console.log("GET INFO")
    let owner = await getField('owner')
    let timePeriod = await getField('timePeriod')
    let ssTaxReceivingContract = await getField('ssTaxReceivingContract')
    let globalDepositNumber = await getField('globalDepositNumber')
    let globalDepositTimeValue = await getField('globalDepositTimeValue')
    let globalSSTaxDepositNumber = await getField('globalSSTaxDepositNumber')
    let totalTaxCollected = await getField('totalTaxCollected')
    let totalSSVaults = await getField('totalSSVaults')
    let totalTaxCollectedByPensioners = await getField('totalTaxCollectedByPensioners')

    let token = await getField('token')
    let bonusVault = await getField('bonusVault')
    let emergencyAddress = await getField('EmergencyAddress')
    let welfareAddress = await getField('WelfareCommandCenterAddress')
    let reflectBalance = await getField('getReflectBalance')

    setPension({ ...pension,
      owner, timePeriod, ssTaxReceivingContract,
      globalDepositNumber, globalSSTaxDepositNumber, globalDepositTimeValue,
      totalTaxCollected, totalSSVaults, totalTaxCollectedByPensioners,
      token, bonusVault, emergencyAddress, welfareAddress,
      reflectBalance
    })

    actions.setCenter(welfareAddress)
    actions.setBonus(bonusVault)
    actions.setWelfare(token)

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
            <Statistic title="Time Period" value={`${((pension.timePeriod / 60) / 60 / 24)} days`} />
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
            <Statistic title="Pension Receiving Contract" value={pension.ssTaxReceivingContract} />
          </Col>
        </Row>
      </Card>
    </Spin>
  ), [pension, loading])

  return (
    <PublicLayout>
      <div style={{ padding: `20px 0px` }}>
        <Title level={2}>Pension</Title>
        <Space style={{ marginBottom: 20 }} size="large">
          <Button onClick={actions.setMainnet}>Mainnet</Button>
          <Button onClick={actions.setTestnet}>Testnet</Button>
          <Text>Current Network: <strong>{state.chain == '56' ? 'Mainnet' : 'Testnet'}</strong></Text>
          { state.chain == '97' && <div>Test Pension: <Text copyable>0x5d09f5E94f8f2cAb11DB1A7D1C71cdd80E7c0e69</Text></div> }
          {wallet.status == 'connected' && <Text copyable>{wallet.account}</Text>}
        </Space>

        {
          wallet.status != 'connected' && (
            <Alert
              message="Connect Wallet"
              description="Please connect your wallet"
              type="error"
              showIcon
              closable
              style={{ marginBottom: 20 }}
              />
          )
        }

        <Input.Search
          placeholder="Contract Address"
          allowClear
          enterButton="Connect"
          size="large"
          onChange={e => actions.setSecurity(e.target.value)}
          onSearch={() => wallet.connect()}
        />

        {
          (state.hasSecurity && wallet.status == 'connected') && (
            <Tabs defaultActiveKey="dashboard" style={{ marginTop: 20 }}>
              <Tabs.TabPane tab="Pensioner Dashboard" key="dashboard">
                <Row gutter={20} style={{ marginTop: `10px`, marginBottom: `30px` }}>
                  <Col xs={8}>
                    <VaultDepositForm />
                  </Col>
                  <Col xs={16}>
                    <UserDeposits />
                  </Col>
                </Row>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Contract Details" key="details">
                { renderStats() }
              </Tabs.TabPane>
              <Tabs.TabPane tab="Admin Access" key="admin">
                <Row gutter={[20, 40]}>
                  <Col span={24}>
                    <Space>
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
                  </Col>
                </Row>
              </Tabs.TabPane>
            </Tabs>
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
