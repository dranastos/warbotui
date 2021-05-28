import { useEffect, useState } from 'react'
import { Typography, Space, Row, Col, Card, Slider, Form, Spin, Button, Input, notification } from 'antd'
const { Title, Text } = Typography
import { useWallet } from 'use-wallet'
import useWeb3 from '../hooks/useWeb3'
import useSecurity from '../hooks/useSecurity'
import useGlobal from '../hooks/useGlobal'

const VaultDepositForm = ({ onComplete, address }) => {
  const wallet = useWallet()
  const [state, actions] = useGlobal(['security', 'hasSecurity'])
  const [contract, web3] = useSecurity(state.security)
  const [timeValue, setTimeValue] = useState(0)
  const [canDeposit, setCanDeposit] = useState(false)
  const [data, setData] = useState({ months: 0, amount: 0, timelock: 0 })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (state.hasSecurity && contract) {
      setCanDeposit(false)
      getTimeDeposit()
    }
  }, [data, state])

  const getTimeDeposit = async() => {
    const weiValue = web3.utils.toWei((data.amount || 0).toString(), 'gwei').toString()
    const bonus = await contract.applyBonus(weiValue, parseInt(data.months)).call()
    if (bonus > 0) {
      setTimeValue(web3.utils.fromWei(bonus, 'gwei').toString())
      setCanDeposit(true)
    }
  }

  // blockHash: "0x7ccbdaa8ae5f8eeb4f12e91ee12438222cf9d7c9b4c05ba438ce5b422de595af"
  // blockNumber: 9232781
  // contractAddress: null
  // cumulativeGasUsed: 1657512
  // events: {0: {…}, 1: {…}, 2: {…}, 3: {…}, 4: {…}, OwnershipTransferred: {…}}
  // from: "0x46a9f0c9818f96e99ee2db24e85cd4f2fab827e8"
  // gasUsed: 1561590
  // logsBloom: "0x00000000000000000000000000000000000000000000100000800000000000000000000000000000080000000001000000000000000040000000000000200800010000000000000000008008000000000001000000000000000000000000000000000000020000080000000000000800000000000030000000000010000000400000000000000004000000400000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000001000000000000000020000410000000000000000000000000000000000400000000000000000000010000"
  // status: true
  // to: "0x5d09f5e94f8f2cab11db1a7d1c71cdd80e7c0e69"
  // transactionHash: "0x3c4427004adf5f1a8655da0f24ab8ffca4ffa1e17c9979ab4d03b8768508faf2"
  // transactionIndex: 1
  // type: "0x0"

  const handleDeposit = async() => {
    setLoading(true)
    try {
      const tx = await contract
        .ssVaultDeposit(web3.utils.toWei(data.amount.toString(), 'gwei').toString(), parseInt(data.months))
        .send({ from: wallet.account, to: state.security })
      if (tx.status) {
        setData({ amount: 0, months: 0 })
        notification.success({
          message: 'Deposit Successful',
          description: tx.transactionHash
        })
        actions.addVaultCount()
      }
    } catch (e) {

    }
    setLoading(false)
  }

  const handleTimeLock = (months) => {
    setData({ ...data, months })
  }

  const approveToken = async() => {

  }

  const handleAmount = (e) => {
    setData({ ...data, amount: parseInt(e.target.value) })
  }

  return (
    <Spin spinning={loading}>
      <Card title="Vault Deposit">
        <Form
          size="large"
          layout="vertical">
          <Form.Item name="vAmount" label="Deposit Amount" rules={[{ required: true, message: 'Enter deposit amount' }]}>
            <Input type="number" placeholder="e.g 10000" value={data.amount} onChange={handleAmount} />
          </Form.Item>
          <Form.Item name="vTimelock" label="Time Lock" name="timelock">
            <Slider min={1} max={88} defaultValue={1} value={data.months} onChange={handleTimeLock} />
            <Space>
              <Text>{data.months} Month(s)</Text>
              <Text>{parseFloat(parseInt(data.months) / 12).toFixed(1)} Year(s)</Text>
            </Space>
          </Form.Item>
          <Space>
            <Button size="large" onClick={getTimeDeposit}>Calculate Bonus</Button>
            <Button size="large" type="primary" disabled={!canDeposit} onClick={handleDeposit}>Deposit</Button>
          </Space>
          <Card style={{ marginTop: 20, textAlign: 'center' }}>
            <Title level={3} type="success" copyable strong>{timeValue}</Title>
            <Text level={5} strong>You'll get after {data.months} months</Text>
          </Card>
        </Form>
      </Card>
    </Spin>
  )
}

export default VaultDepositForm
