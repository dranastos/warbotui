import { useEffect, useState } from 'react'
import { Typography, Space, Row, Col, Card, Slider, Form, Button, Input, notification } from 'antd'
const { Title, Text } = Typography
import { useWallet } from 'use-wallet'

const SettleForm = ({ onComplete }) => {
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
    <Card title="Settlement">
      <Form
        size="large"
        layout="vertical">
        <Form.Item label="Global Deposit Number" name="depositNumber" rules={[{ required: true, message: 'Enter deposit number' }]}>
          <Input type="number" placeholder="e.g 10000" onChange={handleAmount} />
        </Form.Item>
        <Space>
          <Button size="large" type="primary" htmlType="submit">Settle</Button>
        </Space>
      </Form>
    </Card>
  )
}

export default SettleForm
