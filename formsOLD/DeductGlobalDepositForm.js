import { useEffect, useState } from 'react'
import { Typography, Space, Row, Col, Card, Slider, Form, Button, Input, notification } from 'antd'
const { Title, Text } = Typography
import { useWallet } from 'use-wallet'

const DeductGlobalDepositForm = ({ onComplete }) => {
  const wallet = useWallet()

  return (
    <Card title="Deduct Global Deposit">
      <Form
        size="large"
        layout="vertical">
        <Form.Item label="Deposit Amount" name="amount" rules={[{ required: true, message: 'Enter deposit number' }]}>
          <Input type="number" placeholder="e.g 10000" />
        </Form.Item>
        <Space>
          <Button size="large" type="primary" htmlType="submit">Process</Button>
        </Space>
      </Form>
    </Card>
  )
}

export default DeductGlobalDepositForm
