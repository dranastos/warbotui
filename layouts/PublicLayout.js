import { useState, useEffect, useCallback } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { Layout, Menu, Breadcrumb, Space, Button, Typography, Drawer, Input, Form, Alert, Spin } from 'antd'
import { useWallet } from 'use-wallet'
import useGlobal from '../hooks/useGlobal';

import useMicroMachineManufacturingPlant from '../hooks/useMicroMachineManufacturingPlant';
const { Header, Content, Footer } = Layout
const { Title, Text } = Typography



export default function PublicLayout({ children }) {
  const [drawer, showDrawer] = useState(false)
  const [state, actions] = useGlobal([])
  const { security, getFields, connected } = useMicroMachineManufacturingPlant(state.security)
  const [loading, setLoading] = useState(false)
  const wallet = useWallet()
  

  useEffect(() => {
    if (wallet.status == 'connected' && state.hasSecurity == false) {
      showDrawer(true)
    }
  }, [wallet.status])

  useEffect(() => {
    if (connected && state.hasSecurity) {
      getMicroMachineManufacturingPlant()
    }
  }, [connected, state.hasSecurity])

  const getMicroMachineManufacturingPlant = async() => {
    setLoading(true)
    
    const info = await getFields()
    console.dir (  info )
    actions.setSecurityInfo(info)
    actions.setWelfare(info.microMachineAddress)
    setLoading(false)
  }

  const renderWallet = useCallback(() => {
	
    if (wallet.status == 'connected' && wallet.account) {
      return (
        <Space>
          <Text style={{ color: 'white' }}>
            {wallet.account.substr(0, 10)}...{wallet.account.substr(35)}
          </Text>
          <Button
            type="danger"
            size="small"
            onClick={() => wallet.reset()}>
            Disconnect
          </Button>
          <Button
            type="primary"
            size="small"
            onClick={() => showDrawer(true)}
            >
            Settings
          </Button>
        </Space>
      )
    }
    return <Button type="primary" onClick={() => wallet.connect()}>Connect Wallet</Button>
  }, [wallet])

  // COMMAND CENTER: 0xe73C89DFA51E82e7895b0E9E9B8E9b1b4A91b2b6
  // BONUS: 0xEeCFE0b4c47cb5d61F180d721674a405A86FB53c
  // WELFARE ADDRESS: 0xbEDA6Df7a5bCA914915fb80D13c1b6b32dF8F8ab
  // SOCIAL SECURITY: 0x5d09f5E94f8f2cAb11DB1A7D1C71cdd80E7c0e69

  return (
    <Layout>
      <Drawer
        title="Test Settings"
        placement="right"
        closable={true}
        width={540}
        onClose={() => showDrawer(false)}
        visible={drawer}>
        <Spin spinning={loading}>
          <Form.Item name="wallet" label="Your Wallet">
            {wallet.status == 'connected' && <Text copyable>{wallet.account}</Text>}
          </Form.Item>

          <Space style={{ marginBottom: 20 }} size="small">
            <Button type="primary" onClick={actions.setMainnet}>Mainnet</Button>
            <Button onClick={actions.setTestnet}>Testnet</Button>
            <Text>Current Network: <strong>{state.chain == '56' ? 'Mainnet' : 'Testnet'}</strong></Text>
          </Space>

          <Form.Item name="ss" label="Micromachine Manufacturing Plant">
           
            <Text copyable>0x8E496a90a66E949C24d4AD0393c4441B77ae2EAF</Text>
            <Input
              name="social"
              placeholder="MicroMachineManufacturingPlant"
              allowClear
              size="large"
              value={state.security}
              onChange={e => actions.setSecurity(e.target.value)}
            />
          </Form.Item>

          <Form.Item name="nanomachines" label="Nanomachines Address">
            <Text copyable>0x035B4Cfdb5B97a6Ee71a48c361FbE9af24B71186</Text>
            <Input
              name="command"
              placeholder="Nanomachines Address"
              allowClear
              value={state.nanomachines}
              size="large"
              onChange={e => actions.setCenter(e.target.value)}
            />
          </Form.Item>

          <Form.Item name="welfare" label="Micromachine Address">
            <Text copyable>0xEA0f4B6fF0E921dB09F4f2A214a5927B09EC8103</Text>
            <Input
              name="command"
              placeholder="MicroMachines Contract"
              allowClear
              value={state.welfare}
              size="large"
              onChange={e => actions.setWelfare(e.target.value)}
            />
          </Form.Item>

          <Form.Item name="nanostaking" label="Nanomachines Staking">
            <Text copyable>0x029B2Cc69a3f43F166C5684bD2E60a43CAC33e68</Text>
            <Input
              name="command"
              placeholder="Nanomachines Staking"
              allowClear
              value={state.nanostaking}
              size="large"
              onChange={e => actions.setBonus(e.target.value)}
            />
          </Form.Item>
		  
		  <Form.Item name="nanolpstaking" label="Nanomachines Nano LP Staking">
            <Text copyable>0x390895B239a6e1FaBd22FecBaBC71F39948f39cC</Text>
            <Input
              name="command"
              placeholder="Nanomachines Nano LP Staking"
              allowClear
              value={state.nanolpstaking}
              size="large"
              onChange={e => actions.setWicBonus(e.target.value)}
            />
          </Form.Item>
		  
		  <Form.Item name="microlpstaking" label="Nanomachines Micro LP Staking">
            <Text copyable>0x4415F97e358b4C084DE270aa9E929b07311829dC</Text>
            <Input
              name="command"
              placeholder="Nanomachines Micro LP Staking"
              allowClear
              value={state.microlpstaking}
              size="large"
              onChange={e => actions.setBonus(e.target.value)}
            />
          </Form.Item>

          <div>
            <Alert description="Send tokens to this contract" type="info" showIcon />
            <Text copyable>0xb5B8cD15Eac571F3d733e3F4ad01143D1548C6ce</Text>
          </div>

        </Spin>
      </Drawer>

      <Header style={{ position: 'fixed', zIndex: 1, width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Title style={{ color: 'white', marginBottom: 0, marginRight: 30 }} level={3}>MMAC WARBOTS</Title>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="2" onClick={() => Router.push('/')}>WarBot Manufacturing Center</Menu.Item>
          
         
		  <Menu.Item key="4" onClick={() => Router.push('/nanomachines')}>Nanomachines</Menu.Item>
		  <Menu.Item key="4" onClick={() => Router.push('/warbots')}>Warbots</Menu.Item>
		  <Menu.Item key="4" onClick={() => Router.push('/weaponsfacility')}>Upgrades</Menu.Item>
		  <Menu.Item key="4" onClick={() => Router.push('/defense')}>Combat Zone</Menu.Item>
         
        </Menu>
        <div style={{ flex: 1 }} />
        {renderWallet()}
      </Header>
      <Content className="site-layout" style={{ padding: `0 50px`, marginTop: 64, minHeight: `100vh` }}>

        {
          wallet.status != 'connected' && (
            <Alert
              message="Connect Wallet"
              description="Please connect your wallet"
              type="error"
              showIcon
              closable
              style={{ marginTop: 20 }}
              />
          )
        }

        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>All Rights Reserved 2021</Footer>
    </Layout>
  )
}
