import { useEffect, useState } from 'react'
import { Typography, Space, Row, Col, Card, Statistic, Slider, Form, Spin, Button, Input, notification } from 'antd'
const { Title, Text } = Typography
import { useWallet } from 'use-wallet'
import useWeb3 from '../hooks/useWeb3'
import useMicroMachineManufacturingPlant from '../hooks/useMicroMachineManufacturingPlant'
import useGlobal from '../hooks/useGlobal'
import useWarbotStats from '../hooks/useWarbotStats'
import useWarbotStatsData from '../hooks/useWarbotStatsData'
import useNanomachines from '../hooks/useNanomachines'
import useWarContract from '../hooks/useWarContract'

const WarbotWarForm = ({ onComplete, address }) => {
  const wallet = useWallet()
  const [state, actions] = useGlobal([ 'warbotmanufacturer', 'hasWarbotmanufacturer', 'nanomachines', 'hasNanomachines'])
  const { warbotmanufacturer, web3, connected } = useMicroMachineManufacturingPlant(state.warbotmanufacturer)
  //const [welfare] = useWelfare(state.welfare)
  const [nanomachines] = useNanomachines(state.nanomachines)
  const [warbotstats] = useWarbotStats(state.warbotstats)
  const [warcontract] = useWarContract(state.warcontract)
  
  
  const [balance, setBalance] = useState(0)
  const [allowance, setAllowance] = useState(0)
  const [timeValue, setTimeValue] = useState(0)
  const [canDeposit, setCanDeposit] = useState(false)
  const [data, setData] = useState({ amount:0 , warbot1:0, warbot2:0 })
  const [ warbotstatsdata, wbdconnected ] = useWarbotStatsData(state.warbotstatsdata)
  
  const [loading, setLoading] = useState(false)
  const [warbot1, setWarbot1] = useState(0)
  const [warbot2, setWarbot2] = useState(0)
  const [warbot1level, setWarbot1level] = useState(0)
  const [warbot2level, setWarbot2level] = useState(0)
  const [nanorequirement, setNanorequirement] = useState(0)
  const [isapprovedforall, setIsapprovedforall] = useState(0)
  const [warbot1message, setWarbot1message] = useState(0)
  const [warbot2message, setWarbot2message] = useState(0)
  
  const [sufficientlyApproved, setSufficientlyApproved] = useState(0)
  const [insufficientlyApproved, setInsufficientlyApproved] = useState(0)

  useEffect(() => {
    if (connected && state.hasWarbotmanufacturer) {
      getTimeDeposit()
    }
  }, [data])

  useEffect(() => {
    if (connected && nanomachines && state.hasNanomachines) {
      getBalance()
      getAllowance()
    }
  }, [connected, nanomachines, state.hasMicromachines])

  const getBalance = async() => {
    const balance = await nanomachines.balanceOf(wallet.account).call()
    setBalance(web3.utils.fromWei(balance))
    
  }

  const getAllowance = async() => {
    const balance = await nanomachines.allowance(wallet.account, state.warbotstats).call()
	const isApprovedForAll = await warbotmanufacturer.isApprovedForAll(wallet.account, state.warbotstats).call()
    setAllowance(web3.utils.fromWei(balance))
    setSufficientlyApproved("primary") 
	setInsufficientlyApproved("danger") 
	setIsapprovedforall(isApprovedForAll)
    console.log("NANO APPROVAL FOR WARBOTSTAT IS " + balance )
  }

  const getTimeDeposit = async() => {
    const weiValue = web3.utils.toWei((data.amount || 0).toString()).toString()
    //const bonus = await security.timeValueDepositAmount(weiValue, parseInt(data.months)).call()

    console.log("VALUE", weiValue)


  }

  

  const approve = async() => {
    setLoading(true)
    console.log("WARBOT NFTS TRANSFER APPROVAL")
    
	try {

      
        

        

        const tx = await warbotmanufacturer.setApprovalForAll(state.warcontract, "true").send({
          from: wallet.account,
          to: state.warbotmanufacturer
        })

        if (tx.status) {
          notification.success({
            message: 'NFT Approval Successful',
            description: tx.transactionHash
          })

          await getAllowance()
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
    console.log( "New battle " + warbot1 )
	setLoading(true)
   
    try {

      const value = web3.utils.toWei(nanorequirement.toString()).toString()

      console.log('UPGRADE WARBOTS ',  value, warbot1, warbot2 )

      const tx = await warcontract
        .newBattle( warbot1 )
        .send({ from: wallet.account, to: state.warcontract })
      const targetlevel =  parseInt(warbot1level) + 1
	  
      if (tx.status) {
        setData({ amount: 0, months: 0 })
        notification.success({
          message: 'Warbot # ' + warbot1 +  ' initiates a new battle successfully',
          description: tx.transactionHash
        })

        
      }

    } catch (e) {
      notification.error({
        message: 'Warbot Upgrading Failed',
        description: e.toString()
      })
    }

    setLoading(false)

  }

  const joinBattle = async() => {
    console.log( "handle Deposit" )
	setLoading(true)
   
    try {

      const value = web3.utils.toWei(nanorequirement.toString()).toString()

      console.log('UPGRADE WARBOTS ',  value, warbot1, warbot2 )

      const tx = await warcontract
        .joinBattle( warbot1 , warbot2 )
        .send({ from: wallet.account, to: state.warcontract })
      const targetlevel =  parseInt(warbot1level) + 1
	  
      if (tx.status) {
        setData({ amount: 0, months: 0 })
        notification.success({
          message: 'Warbot # ' + warbot1 +  'joined  battle successfully',
          description: tx.transactionHash
        })

        
      }

    } catch (e) {
      notification.error({
        message: 'Warbot Upgrading Failed',
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
  
  const warbot1Call = async(e) => {
	if ( e.target.value != undefined )   
	  
	try{
		const warbot1level = await warbotstatsdata.WarbotLevel( e.target.value ).call()
		const nanorequired = (parseInt( warbot1level ) + 1) * (parseInt( warbot1level ) + 1)
		
		setNanorequirement( nanorequired )
		setWarbot1( parseInt(e.target.value) )
		setWarbot1level( warbot1level )
		
		var warbot1message = " Warbot 1 is currently in level " + warbot1level
		setWarbot1message ( warbot1message )
		
		console.log( "warbot level up required : " +  nanorequired   )
	} catch (e) {
      
    }
		
  }
  
  const warbot2Call = async(e) => {
	if ( e.target.value != undefined )
		try{
			
			const warbot2level = await warbotstatsdata.WarbotLevel( e.target.value ).call()
			
			setWarbot2( parseInt(e.target.value) )
			setWarbot2level( warbot2level )
			console.log ( "Warbots levels are " + warbot1level + " and " + warbot2level )
			var warbot2message = " Warbot 2 is currently in level " + warbot2level
			setWarbot2message ( warbot2message )
			
			
			
			
        }  catch (e) {
      console.log("error"+ e)
    }
  }
  
  const notEnough = (e) => {
    console.log( "not enough:" + warbot1level , warbot2level )
  }

  return (
    <Spin spinning={loading}>
      <Card title="Warzone">
	  <Card title="Warbot Combat">
        <Form
          size="large"
          layout="vertical">
          <Statistic title="AAA Battery Power" value="3" />
          
		  
		  <Statistic title="Combat Operations Approval" value={isapprovedforall} />
		  <Space>
            <Button size="large" type="primary" onClick={approve}>Approve Combat Operations</Button>
		  </Space>
		  <Text level={5} strong> Join Battle </Text>		 
          <Form.Item name="warbot1" label="Battle Number" rules={[{ required: true, message: 'Enter Battle Number' }]}>
            
			<Input type="number" placeholder="e.g 10000" value={data.warbot1} onChange={warbot1Call} />
          </Form.Item>
          
		  <Form.Item name="warnumber" label="Warbot Number" rules={[{ required: true, message: 'Enter Warbot Number' }]}>
            
			<Input type="number" placeholder="e.g 10000" value={data.warbot2} onChange={warbot1Call} />
          </Form.Item>
		  
       
		 
          <Space>
           
            <Button size="large" type={isapprovedforall == true  && allowance >= nanorequirement ? sufficientlyApproved:insufficientlyApproved} onClick={isapprovedforall && allowance >= nanorequirement == true && parseInt(warbot1level) == parseInt(warbot2level) && parseInt(warbot1) != parseInt(warbot2) ? joinBattle:notEnough }>Join Battle</Button>
            <Button size="large" type="danger" onClick={handleDeposit }>Start New Battle</Button>
         
		  </Space>
          <Card style={{ marginTop: 20, textAlign: 'center' }}>
           
            <Text level={5} strong> Enter Battle with Warbot # </Text>
          </Card>
        </Form>
		</Card>
      </Card>
    </Spin>
  )
}



export default WarbotWarForm
