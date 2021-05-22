import { useEffect, useState } from 'react'
import { Typography, Space, Row, Col, Card, Slider, Form, Button, Input, notification } from 'antd'
const { Title, Text } = Typography
import { useWallet } from 'use-wallet'
import { SocialSecurity } from './contracts';

const VaultDepositForm = ({ onComplete }) => {
  const wallet = useWallet()
  const [timeValue, setTimeValue] = useState(0)
  const [canDeposit, setCanDeposit] = useState(false)
  const [data, setData] = useState({ months: 0, amount: 0, timelock: 0 })

  useEffect(() => {
    setCanDeposit(false)
  }, [data])

  const getTimeDeposit = async() => {
    console.log("WALLET STATUS", wallet.status, data)
    try {
      if (wallet.status == 'connected') {
        const value = await SocialSecurity.methods.timeValueDepositAmount(parseInt(data.amount), parseInt(data.timelock)).call()
        if (value > 0) {
          setTimeValue(value)
          setCanDeposit(true)
        }
      }
    } catch (e) {
      notification.error({
        message: 'Wallet Issue',
        description: e.message
      })
    }
  }

  const handleTimeLock = (months) => {
    setData({ ...data, months, timelock: parseInt(data.months) * 60 * 30 })
  }

  const handleAmount = (e) => {
    setData({ ...data, amount: parseInt(e.target.value) })
  }

  return (
    <Card title="Vault Deposit">
      <Form
        size="large"
        layout="vertical">
        <Title level={3}>{timeValue}</Title>
        <Form.Item label="Time Lock" name="timelock">
          <Slider min={6} max={120} onChange={handleTimeLock} />
          <Space>
            <Text>{data.months} Month(s)</Text>
            <Text>{parseFloat(parseInt(data.months) / 12).toFixed(1)} Year(s)</Text>
          </Space>
        </Form.Item>
        <Form.Item label="Deposit Amount" name="amount" rules={[{ required: true, message: 'Enter deposit amount' }]}>
          <Input type="number" placeholder="e.g 10000" onChange={handleAmount} />
        </Form.Item>

        <Space>
          <Button size="large" onClick={getTimeDeposit}>Calculate</Button>
          <Button size="large" type="primary" disabled={!canDeposit} htmlType="submit">Deposit</Button>
        </Space>
      </Form>
    </Card>
  )
}

export default VaultDepositForm
