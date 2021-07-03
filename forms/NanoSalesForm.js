import { useEffect, useState } from 'react'
import { Typography, Space, Row, Col, Card, Statistic, Slider, Form, Spin, Button, Input, notification } from 'antd'
const { Title, Text } = Typography
import { useWallet } from 'use-wallet'
import useWeb3 from '../hooks/useWeb3'
import useGlobal from '../hooks/useGlobal'
import useToken from '../hooks/useToken'
import useNanosales from '../hooks/useNanosales'



const NanoSalesForm = ({ onComplete, address }) => {
  const wallet = useWallet()
  const [state, actions] = useGlobal([  'busd', 'hasBusd', 'nanosales', 'hasNanosales' ])
  const [busd, web3, connected ] = useToken(state.busd)
  const [balance, setBalance] = useState(0)
  const [allowance, setAllowance] = useState(0)
  const [data, setData] = useState({  amount: 0 })
  const [loading, setLoading] = useState(false)
  const [nanosales] = useNanosales(state.nanosales)
  const [purchaseamount, setPurchaseamount] = useState(0)
  const [currentprice, setCurrentprice] = useState(0)
  
  useEffect(() => {
    if (connected && busd && state.hasBusd) {
      
	  getBalance()
      getAllowance()
    }
  }, [connected, busd, state.hasBusd, data])

  const getBalance = async() => {
	  
    const balance = await busd.balanceOf(wallet.account).call()
    const currentprice = await nanosales.calculatePrice( "1000000000000000000" ).call()
	
	setCurrentprice(web3.utils.fromWei(currentprice[0]))
	setBalance(web3.utils.fromWei(balance))
   
  }

  const getAllowance = async() => {
    const balance = await busd.allowance(wallet.account, state.nanosales).call()
    setAllowance(web3.utils.fromWei(balance))
  }


  const approve = async() => {
    setLoading(true)

    try {

      if (purchaseamount > 0) {
        const value = web3.utils.toWei(((purchaseamount || 0) * 1.0).toString()).toString()

        console.log("APPROVAL AMOUNT", value)

        const tx = await busd.approve(state.nanosales, value).send({
          from: wallet.account,
          to: state.nanosales
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

      const value = web3.utils.toWei(data.amount.toString()).toString()
	  const tx = await nanosales
        .purchase(value)
        .send({ from: wallet.account, to: state.nanosales })

      if (tx.status) {
        setData({ amount: 0, months: 0 })
        notification.success({
          message: 'Purchase Successful',
          description: tx.transactionHash
        })

        actions.addVaultCount()
      }

    } catch (e) {
      notification.error({
        message: 'Purchase Failed',
        description: e.toString()
      })
    }

    setLoading(false)

  }

  
  const handleAmount = async(e) => {
   try{
    setData({ ...data, amount: parseInt(e.target.value) })
	
	var _purchaseamount = web3.utils.toWei(parseInt(e.target.value).toString());
	
	const purchaseamount = await nanosales.calculatePrice( _purchaseamount ).call()
    setPurchaseamount(web3.utils.fromWei(purchaseamount[0]))
   } catch (e) {}
  }

  return (
    <Spin spinning={loading}>
      <Card title="Nanomachine Sales Form ">
	  <Text level={5} strong>Price rises .15% for every Nanomachine sold </Text>
	  <Text level={5} strong><p></p>NanoSales are subject to a 90 Day vesting period </Text>
	   <Text level={5} strong><p>Every new purchase resets the 90 day vesting period </p></Text>
	  
	  <Card title="">
	 
	  
	  
	  
        <Form
          size="large"
          layout="vertical">
          <Statistic class="ant-alert" title="DAI Balance" value={balance} />
          <Statistic title="Approved" value={allowance} />
         <Text level={5} strong> Next Nanomachine token price is {currentprice} BUSD</Text>         
		 <Form.Item name="vAmount" label="Purchase Nanomachines" rules={[{ required: true, message: 'Enter deposit amount' }]}>
            <Input type="number" placeholder="e.g 10000" value={data.amount} onChange={handleAmount} />
          </Form.Item>
          
          <Space>
            <Button size="large" onClick={approve}>Approve</Button>
            <Button size="large" type="primary" onClick={handleDeposit}>Purchase NanoMachines</Button>
          </Space>
          <Card style={{ marginTop: 20, textAlign: 'center' }}>
           
            <Text level={5} strong> {data.amount} Nanomachines will cost you {purchaseamount} DAI. You will be vested for 90 days.</Text>
          </Card>
        </Form>
		
		</Card>
      </Card>
    </Spin>
  )
}


export default NanoSalesForm
