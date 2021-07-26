import { useEffect, useState } from 'react'
import { Typography, Space, Row, Col, Card, Statistic, Slider, Form, Spin, Button, Input, notification } from 'antd'
const { Title, Text } = Typography
import { useWallet } from 'use-wallet'
import useWeb3 from '../hooks/useWeb3'
import useSecurity from '../hooks/useSecurity'
import useGlobal from '../hooks/useGlobal'
import useWelfare from '../hooks/useWelfare'

const VaultDepositForm = ({ onComplete, address }) => {
  const wallet = useWallet()
  const [state, actions] = useGlobal(['security', 'hasSecurity', 'welfare', 'hasWelfare'])
  const { security, web3, connected } = useSecurity(state.security)
  const [welfare] = useWelfare(state.welfare)
  const [balance, setBalance] = useState(0)
  const [allowance, setAllowance] = useState(0)
  const [timeValue, setTimeValue] = useState(0)
  const [canDeposit, setCanDeposit] = useState(false)
  const [data, setData] = useState({ months: 0, amount: 0, timelock: 0 })
  const [loading, setLoading] = useState(false)
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    if (connected && state.hasSecurity) {
      getTimeDeposit()
    }
  }, [data])

  useEffect(() => {
    if (connected && welfare && state.hasSecurity) {
      getBalance()
      getAllowance()
    }
  }, [connected, welfare, state.hasSecurity])

  const getBalance = async() => {
    const balance = await welfare.balanceOf(wallet.account).call()
    setBalance(web3.utils.fromWei(balance, 'nano'))
    setCounter(counter + 1)
  }

  const getAllowance = async() => {
    const balance = await welfare.allowance(wallet.account, state.security).call()
    setAllowance(web3.utils.fromWei(balance, 'nano'))
    setCounter(counter + 1)
  }

  const getTimeDeposit = async() => {
    const weiValue = web3.utils.toWei((data.amount || 0).toString(), 'nano').toString()
    const bonus = await security.timeValueDepositAmount(weiValue, parseInt(data.months)).call()

    console.log("TIME DEPOSIT", bonus)

    if (bonus > 0) {
      setTimeValue(web3.utils.fromWei(bonus, 'nano').toString())
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


  const approve = async() => {
    setLoading(true)

    try {

      if (data.amount > 0) {
        const value = web3.utils.toWei(((data.amount || 0) * 1.0).toString(), 'nano').toString()

        console.log("APPROVAL AMOUNT", value)

        const tx = await welfare.approve(state.security, value).send({
          from: wallet.account,
          to: state.security
        })

        if (tx.status) {
          notification.success({
            message: 'Approve Successful',
            description: tx.transactionHash
          })

          await getAllowance()
        }
      }

    } catch (e) {
      notification.error({
        message: 'Deposit Failed',
        description: e.toString()
      })
    }

    setLoading(false)


  }

  const handleDeposit = async() => {
    setLoading(true)

    try {

      const value = web3.utils.toWei(data.amount.toString(), 'nano').toString()

      console.log('DEPOSIT',  value)

      const tx = await security
        .ssVaultDeposit(value, parseInt(data.months))
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
      notification.error({
        message: 'Deposit Failed',
        description: e.toString()
      })
    }

    setLoading(false)

  }

  const handleTimeLock = (months, amount) => {
    setData({ ...data, months })
	setData({ ...data, amount })
	console.log( months + " " + amount )
  }
  const handleAmount = (e) => {
    setData({ ...data, amount: parseInt(e.target.value) })
  }

  return (
    <Spin spinning={loading}>
      <Card title="Micromachine Staking">
	  <Card title="Build a WarBot Manufacturing Center">
        <Form
          size="large"
          layout="vertical">
          <Statistic title="Balance" value={balance} />
          <Statistic title="Approved" value={allowance} />
          <Form.Item name="vAmount" label="Deposit Amount" rules={[{ required: true, message: 'Enter deposit amount' }]}>
            <Input type="number" placeholder="e.g 10000" value={data.amount} onChange={handleAmount} />
          </Form.Item>
          <Form.Item name="vTimelock" label="Time Lock" name="timelock">
            <Slider min={1} max={12} defaultValue={1} value={data.months} onChange={handleTimeLock} />
            <Space>
              <Text>{data.months} Month(s)</Text>
              <Text>{parseFloat(parseInt(data.months) / 12).toFixed(1)} Year(s)</Text>
            </Space>
          </Form.Item>
          <Space>
            <Button size="large" onClick={approve}>Approve</Button>
            <Button size="large" type="primary" onClick={handleDeposit}>Stake MicroMachines</Button>
          </Space>
          <Card style={{ marginTop: 20, textAlign: 'center' }}>
            <Title level={3} type="success" copyable strong>{timeValue}</Title>
            <Text level={5} strong>Build x WarBots for locking {data.months} month(s)</Text>
          </Card>
        </Form>
		</Card>
      </Card>
    </Spin>
  )
}

// <Button size="large" onClick={getTimeDeposit}>Calculate</Button>


export default VaultDepositForm
