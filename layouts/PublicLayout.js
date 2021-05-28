import { useCallback } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { Layout, Menu, Breadcrumb, Space, Button, Typography } from 'antd'
import { useWallet } from 'use-wallet'
const { Header, Content, Footer } = Layout
const { Title, Text } = Typography

export default function PublicLayout({ children }) {

  const wallet = useWallet()

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
        </Space>
      )
    }
    return <Button type="primary" onClick={() => wallet.connect()}>Connect Wallet</Button>
  }, [wallet])

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Title style={{ color: 'white', marginBottom: 0, marginRight: 30 }} level={3}>Welfare</Title>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="2" onClick={() => Router.push('/')}>Social Security</Menu.Item>
          <Menu.Item key="3" onClick={() => Router.push('/center')}>Command Center</Menu.Item>
          <Menu.Item key="4" onClick={() => Router.push('/bonus')}>Bonus Vault</Menu.Item>
          <Menu.Item key="5" onClick={() => Router.push('/welfare')}>Welfare</Menu.Item>
        </Menu>
        <div style={{ flex: 1 }} />
        {renderWallet()}
      </Header>
      <Content className="site-layout" style={{ padding: `0 50px`, marginTop: 64, minHeight: `100vh` }}>
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>All Rights Reserved 2021</Footer>
    </Layout>
  )
}
