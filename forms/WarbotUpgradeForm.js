import { useEffect, useState } from 'react'
import { Typography, Space, Row, Col, Card, Statistic, Slider, Form, Spin, Button, Input, notification } from 'antd'
const { Title, Text } = Typography
import { useWallet } from 'use-wallet'
import useWeb3 from '../hooks/useWeb3'
import useMicroMachineManufacturingPlant from '../hooks/useMicroMachineManufacturingPlant'
import useGlobal from '../hooks/useGlobal'

import useNanomachines from '../hooks/useNanomachines'

const WarbotUpgradeForm = ({ onComplete, address }) => {
  const wallet = useWallet()
  const [state, actions] = useGlobal([ 'warbotmanufacturer', 'hasWarbotmanufacturer', 'nanomachines', 'hasNanomachines'])
  const { warbotmanufacturer, web3, connected } = useMicroMachineManufacturingPlant(state.warbotmanufacturer)
  //const [welfare] = useWelfare(state.welfare)
  const [nanomachines] = useNanomachines(state.nanomachines)
  const [balance, setBalance] = useState(0)
  const [allowance, setAllowance] = useState(0)
  const [timeValue, setTimeValue] = useState(0)
  const [canDeposit, setCanDeposit] = useState(false)
  const [data, setData] = useState({ amount:0 , warbot1:0, warbot2:0 })
  
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
    const balance = await nanomachines.allowance(wallet.account, state.warbotmanufacturer).call()
	const isApprovedForAll = await warbotmanufacturer.isApprovedForAll(wallet.account, state.warbotmanufacturer).call()
    setAllowance(web3.utils.fromWei(balance))
    setSufficientlyApproved("primary") 
	setInsufficientlyApproved("danger") 
	setIsapprovedforall(isApprovedForAll)

  }

  const getTimeDeposit = async() => {
    const weiValue = web3.utils.toWei((data.amount || 0).toString()).toString()
    //const bonus = await security.timeValueDepositAmount(weiValue, parseInt(data.months)).call()

    console.log("VALUE", weiValue)


  }

  

  const approve = async() => {
    setLoading(true)

    try {

      if ( nanorequirement > 0) {
        const value = web3.utils.toWei(((nanorequirement || 0) * 1.0).toString()).toString()

        console.log("APPROVAL AMOUNT", value)

        const tx = await nanomachines.approve(state.warbotmanufacturer, value).send({
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
	
	try {

      if ( !isapprovedforall) {
        

        console.log("WARBOT TRANSFER APPROVAL")

        const tx = await warbotmanufacturer.setApprovalForAll(state.warbotmanufacturer, "true").send({
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
    console.log( "handle Deposit" )
	setLoading(true)
   
    try {

      const value = web3.utils.toWei(nanorequirement.toString()).toString()

      console.log('STAKE MICROMACHINES ',  value, warbot1, warbot2 )

      const tx = await warbotmanufacturer
        .upgradeWarbot( warbot1, warbot2 )
        .send({ from: wallet.account, to: state.warbotmanufacturer })
      const targetlevel =  parseInt(warbot1level) + 1
	  
      if (tx.status) {
        setData({ amount: 0, months: 0 })
        notification.success({
          message: 'Warbot # ' + warbot1 +  ' Upgrading from level ' +  warbot1level + ' to level ' +  targetlevel + ' Successful',
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
		const warbot1level = await warbotmanufacturer.WarbotLevel( e.target.value ).call()
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
			
			const warbot2level = await warbotmanufacturer.WarbotLevel( e.target.value ).call()
			
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
      <Card title="Warbot Reassemby">
	  <Card title="Warbot Hull Upgrading facility">
        <Form
          size="large"
          layout="vertical">
          <Statistic title="Balance" value={balance} />
          
		  
		  <Statistic title="Approved" value={allowance} />
		   <Text level={5} strong> { warbot1level == 0? "Warbot doesnt exist" :  warbot1message  } </Text>		 
          <Form.Item name="warbot1" label="Warbot 1 ( Warbot being Upgraded - Stats transferred )" rules={[{ required: true, message: 'Enter Warbot 1 Identification' }]}>
            
			<Input type="number" placeholder="e.g 10000" value={data.warbot1} onChange={warbot1Call} />
          </Form.Item>
          
		  
		  <Text level={5} strong> { warbot2level == 0? "Warbot doesnt exist" :  warbot2message  } </Text>		 
		  <Form.Item name="warbot2" label="Warbot 2 ( Warbot used for parts - Stats lost)" rules={[{ required: true, message: 'Enter Warbot 2 Identification' }]}>
            <Input type="number" placeholder="e.g 10000" value={data.warbot2} onChange={warbot2Call} />
          </Form.Item>
		  <Text level={5} strong> Nanomachines {nanorequirement} required for upgrade </Text>
       
		 
          <Space>
            <Button size="large" type="primary" onClick={approve}>Approve</Button>
            <Button size="large" type={isapprovedforall == true  && allowance >= nanorequirement ? sufficientlyApproved:insufficientlyApproved} onClick={isapprovedforall && allowance >= nanorequirement == true && parseInt(warbot1level) == parseInt(warbot2level) && parseInt(warbot1) != parseInt(warbot2) ? handleDeposit:notEnough }>Upgrade Warbots</Button>
          </Space>
          <Card style={{ marginTop: 20, textAlign: 'center' }}>
           
            <Text level={5} strong> Upgrade Warbot # { warbot1 } Level { warbot1level } Warbot  to a  level { parseInt(warbot1level) + 1 } Warbot by  trading in an additional  level  { warbot1level }  WarBot along  with {nanorequirement} nanomachines</Text>
          </Card>
        </Form>
		</Card>
      </Card>
    </Spin>
  )
}



export default WarbotUpgradeForm
