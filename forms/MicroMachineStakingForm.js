import { useEffect, useState } from 'react'
import { Typography, Space, Row, Col, Card, Statistic, Slider, Form, Spin, Button, Input, notification } from 'antd'
const { Title, Text } = Typography
import { useWallet } from 'use-wallet'
import useWeb3 from '../hooks/useWeb3'
import useMicroMachineManufacturingPlant from '../hooks/useMicroMachineManufacturingPlant'
import useGlobal from '../hooks/useGlobal'

import useMicroMachines from '../hooks/useMicroMachines'

const MicroMachineStakingForm = ({ onComplete, address }) => {
  const wallet = useWallet()
  const [state, actions] = useGlobal([ 'warbotmanufacturer', 'hasWarbotmanufacturer', 'micromachines', 'hasMicromachines'])
  const { warbotmanufacturer, web3, connected } = useMicroMachineManufacturingPlant(state.warbotmanufacturer)
  //const [welfare] = useWelfare(state.welfare)
  const [micromachines] = useMicroMachines(state.micromachines)
  const [balance, setBalance] = useState(0)
  const [allowance, setAllowance] = useState(0)
  const [timeValue, setTimeValue] = useState(0)
  const [canDeposit, setCanDeposit] = useState(false)
  const [data, setData] = useState({ months: 0, amount: 0, timelock: 0 })
  const [loading, setLoading] = useState(false)
  const [counter, setCounter] = useState(0)
  const [sufficientlyApproved, setSufficientlyApproved] = useState(0)
  const [insufficientlyApproved, setInsufficientlyApproved] = useState(0)

  useEffect(() => {
    if (connected && state.hasWarbotmanufacturer) {
      getTimeDeposit()
    }
  }, [data])

  useEffect(() => {
    if (connected && micromachines && state.hasMicromachines) {
      getBalance()
      getAllowance()
    }
  }, [connected, micromachines, state.hasMicromachines])

  const getBalance = async() => {
    const balance = await micromachines.balanceOf(wallet.account).call()
    setBalance(web3.utils.fromWei(balance, 'nano'))
    setCounter(counter + 1)
  }

  const getAllowance = async() => {
    const balance = await micromachines.allowance(wallet.account, state.warbotmanufacturer).call()
    setAllowance(web3.utils.fromWei(balance, 'nano'))
    setSufficientlyApproved("primary") 
	setInsufficientlyApproved("danger") 
	setCounter(counter + 1)
  }

  const getTimeDeposit = async() => {
    const weiValue = web3.utils.toWei((data.amount || 0).toString(), 'nano').toString()
    //const bonus = await security.timeValueDepositAmount(weiValue, parseInt(data.months)).call()

    console.log("VALUE", weiValue)


  }

  

  const approve = async() => {
    setLoading(true)

    try {

      if (data.amount > 0) {
        const value = web3.utils.toWei(((data.amount || 0) * 1.0).toString(), 'nano').toString()

        console.log("APPROVAL AMOUNT", value)

        const tx = await micromachines.approve(state.warbotmanufacturer, value).send({
          from: wallet.account,
          to: state.warbotmanufacturer
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
        message: 'Approval Failed',
        description: e.toString()
      })
    }

    setLoading(false)


  }

  const handleDeposit = async() => {
    setLoading(true)

    try {

      const value = web3.utils.toWei(data.amount.toString(), 'nano').toString()

      console.log('STAKE MICROMACHINES ',  value, parseInt(data.months))

      const tx = await warbotmanufacturer
        .stakeMicroMachines(value, parseInt(data.months))
        .send({ from: wallet.account, to: state.warbotmanufacturer })

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

  const handleTimeLock = (months, amount ) => {
    setData({ ...data, months })
	
  }
  const handleAmount = (e) => {
    setData({ ...data, amount: parseInt(e.target.value) })
  }
  
  const notEnough = (e) => {
    
  }

  return (
    <Spin spinning={loading}>
      <Card title="Micromachine Staking">
	  <Card title="Build WarBot Manufacturing Center">
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
              <Text>{data.months} Quarter(s)</Text>
              <Text>{parseFloat(parseInt(data.months) / 4).toFixed(1)} Year(s)</Text>
            </Space>
          </Form.Item>
          <Space>
            <Button size="large" type="primary" onClick={approve}>Approve</Button>
            <Button size="large" type={allowance>= data.amount && data.amount*data.months <= 50 ? sufficientlyApproved:insufficientlyApproved} onClick={allowance>= data.amount? handleDeposit:notEnough }>Stake MicroMachines</Button>
          </Space>
          <Card style={{ marginTop: 20, textAlign: 'center' }}>
           
            <Text level={5} strong>Build {data.amount * data.months} WarBots a period by locking your MicroMachines for {data.months} month(s) for a total of {data.amount * data.months * data.months} WarBots</Text>
          </Card>
        </Form>
		</Card>
      </Card>
    </Spin>
  )
}



export default MicroMachineStakingForm
