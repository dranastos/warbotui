import { useEffect, useState } from 'react'
import { Typography, Space, Row, Col, Card, Slider, List, Spin, Collapse, Form, Button, Input, Tag, Statistic, notification } from 'antd'
const { Title, Text } = Typography
import { useWallet } from 'use-wallet'
import useWeb3 from '../hooks/useWeb3'
import useMicroMachineManufacturingPlant from '../hooks/useMicroMachineManufacturingPlant'
import useGlobal from '../hooks/useGlobal'
import useWarbots from '../hooks/useWarbots'
import useWars from '../hooks/useWars'
import useNanonfts from '../hooks/useNFT'
import useWarbotstats from '../hooks/useWarbotStats'
import useNanomachines from '../hooks/useNanomachines'
import useWarbotStatsData from '../hooks/useWarbotStatsData'
import useWarContract from '../hooks/useWarContract'

import moment from 'moment'



const BattleZone = ({ onComplete, address }) => {
  
  const wallet = useWallet()
  const [getVault, sendVaultTx] = useWarbots()
  const [state, actions] = useGlobal(['warbotmanufacturer', 'hasSecurity', 'vaultCount'])
  const { warbotmanufacturer, web3, connected } = useMicroMachineManufacturingPlant(state.warbotmanufacturer)
  const [ nanonft ] = useNanonfts(state.nanonft) 
  const [ nanomachines ] = useNanomachines(state.nanomachines) 
  const [ warbotstats ] = useWarbotstats(state.warbotstats) 
  const [deposits, setDeposits] = useState([])
  const [vaults, setVaults] = useState({})
  const [total, setTotal] = useState(0)
  const [warbot, setWarbot] = useState(0)
  const [loading, setLoading] = useState(false)
  const [hasVaults, setHasVaults] = useState(false)
  const [ warbotstatsdata, wbdconnected ] = useWarbotStatsData(state.warbotstatsdata)
  const [ warcontract, warconnected ] = useWarContract(state.warcontract)
  const [getWars, getWarFight] = useWars()
  
  useEffect(() => {
    if (connected && state.hasWarbotmanufacturer) {
      getDeposits(false)
    }
  }, [connected, state.hasSecurity, state.vaultCount])

   

  const getDeposits = async() => {
    console.log ("fuck you")
	setLoading(true)
    
    //const deps = await warbotmanufacturer.getUserManufacturingPlants(wallet.account).call()
	//const totalDeps = await warbotmanufacturer.userManufacturingPlantCount(wallet.account).call()
	const warCount = await warcontract.warCount().call()
	console.log ( warCount )
	const newBattles = await warcontract.getActiveBattles().call()
	console.dir ( newBattles )
	setDeposits(newBattles)

    let vaults = {}
    for (let battle of newBattles) {
	  if ( battle == 0 ) continue
	 try{ 
		
		
		const mainbot = await warcontract.BotsInWar(battle, 0).call()  
		
		const data = await getWarFight( battle, mainbot )
		console.log( " test " + mainbot )
		vaults[battle] = { ...data}
     }catch (e) {
      console.log(battle , e)
    }    
	}  
       
      

    
	console.dir ( vaults )
    setVaults(vaults)
    
    setHasVaults(true)
    setLoading(false)
  }

  const fireGuns = async(id) => {
    
	setLoading(true)
    console.log("Fire Gun # " + id, warbot)
	//const cardsperwarbot = await nanonft.cardsperwarbot().call()
	try {
		const tx = await warcontract.joinBattle( warbot ,id).send({ from: wallet.account, to: state.warcontract })
		if (tx.status) {
		  notification.success({
			message:  ' Battle Joined ',
			description: tx.transactionHash
		  })
		}
	} catch (e) {
      console.log(e)
    }
	
    setLoading(false)
  }
  
   const move = async(id) => {
    
	setLoading(true)
    console.log("Move # " + id, warbot)
	//const cardsperwarbot = await nanonft.cardsperwarbot().call()
	try {
		const tx = await warcontract.startWar( id).send({ from: wallet.account, to: state.warcontract })
		if (tx.status) {
		  notification.success({
			message:  ' Battle Started ',
			description: tx.transactionHash
		  })
		}
	} catch (e) {
      console.log(e)
    }
	
    setLoading(false)
  }
  
  const  nanoNFT = async(id) => {
    
	setLoading(true)
    console.log("NanoNFT # " + id, warbot)
	//const cardsperwarbot = await nanonft.cardsperwarbot().call()
	try {
		const tx = await warcontract.startWar( id).send({ from: wallet.account, to: state.warcontract })
		if (tx.status) {
		  notification.success({
			message:  ' Battle Started ',
			description: tx.transactionHash
		  })
		}
	} catch (e) {
      console.log(e)
    }
	
    setLoading(false)
  }
  
  
  const rerollLevelStats = async(id) => {
    
	console.log( "REROLL STATS" )
	
	setLoading(true)
    console.log("Activate Warbot # " + id)
	//const cardsperwarbot = await nanonft.cardsperwarbot().call()
	const tx = await warbotstats.requestRerollOfStats(id).send({ from: wallet.account, to: state.warbotstats })
    if (tx.status) {
      notification.success({
        message:  'Reroll of Level Stats Requested',
        description: tx.transactionHash
      })
    }
    setLoading(false)
  }
  
  
  const approve = async() => {
    setLoading(true)
	 
    
	var _value = "10000"
	console.log("APPROVAL AMOUNT", _value)
    try {

      if ( _value >= 0) {
        const value = web3.utils.toWei(  _value ).toString()

        console.log("APPROVAL AMOUNT", wallet)

        const tx = await nanomachines.approve(state.warbotstats, value).send({
          from: wallet.account,
          to: state.nanomachines
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
      
    }

    setLoading(false)


  }
 
   const warbotCall = async(e) => {
	
	console.log ( "warbot chosen " + e.target.value )
	if ( e.target.value != undefined )   
	  
	try{
		const warbot1level = await warbotstatsdata.WarbotLevel( e.target.value ).call()
		const nanorequired = (parseInt( warbot1level ) + 1) * (parseInt( warbot1level ) + 1)
		
		setWarbot( parseInt(e.target.value) )
		
		var warbot1message = " Warbot 1 is currently in level " + warbot1level
		setWarbot1message ( warbot1message )
		
		console.log( "warbot level up required : " +  nanorequired   )
	} catch (e) {
      
    }
		
  }

  const renderDeposit = (id, key) => {
    
	if ( vaults[id] === undefined ) return
	console.log( "key " , key )
	var warid = "War Number: " + vaults[id].WarNumber
	//var warbotlevel = "Warbot Level: " + vaults[id].Level
	//var type = vaults[id].WarbotType
	var botsinwar =  "Warbots in Battle " + vaults[id].BotsInWar
	
	var currentTurn = "Warbots Turn: " + vaults[id].WarbotsTurn
		
    return (
      <div key={`vault-${id}`}>
        <Collapse>
          <Collapse.Panel header={`${warid} - ${botsinwar} - ${currentTurn}`}>
            <Row style={{ marginTop: 10 }} gutter={[20, 20]}>
              <Col span={24}>
               <Form.Item name="aimat" label="Aim At Warbot Number" rules={[{ required: true, message: 'Warbot Target' }]}>
                      <Input type="number" placeholder="e.g 10000" value={warbot} onChange={warbotCall} />
               </Form.Item>
			   <Button type="primary" onClick={() => fireGuns()}  style={{ background: "black", borderColor: "yellow" }}>Fire Guns</Button>
			    <Form.Item name="aimat" label="Movement in X" rules={[{ required: true, message: 'Move in X direction' }]}>
                      <Input type="number" placeholder="x" value={warbot} onChange={warbotCall} />
               </Form.Item>
			   <Form.Item name="aimat" label="Movement in Y" rules={[{ required: true, message: 'Move in Y direction' }]}>
                      <Input type="number" placeholder="Y" value={warbot} onChange={warbotCall} />
               </Form.Item>
			   <Button type="primary" onClick={() => move(id)}  style={{ background: "yellow", borderColor: "yellow" }}>Move</Button>
			   <Form.Item name="warnumber" label="NFT Card Number" rules={[{ required: true, message: 'Enter NFT Card Number' }]}>
                      <Input type="number" placeholder="e.g 10000" value={warbot} onChange={warbotCall} />
               </Form.Item>
			   <Button type="primary" onClick={() => nanoNFT(id)}  style={{ background: "red", borderColor: "yellow" }}>Use NanoNFT</Button>
			   		  
			   
                  
              </Col>
             

              {
                Object.keys(vaults[id]).map((name, key) => (
                  <Col
                    key={`${id}-${name}-${key}`}
                    span={vaults.[id]['WarNumber'].toString().startsWith('0x') ? 24 : 8}>
                    <Statistic
                      title={name.toUpperCase()}
                      value={vaults.[id][name]   }
                      precision={ name == "POOL WEIGHT" ? 9 : 0 }
                      style={{ marginBottom: 20 }}
                      />
                  </Col>
                ))
              }
            </Row>
          </Collapse.Panel>
        </Collapse>
      </div>
    )
  }


  return (
    <Spin spinning={loading}>
      <Card title="Battle Zone" extra={<Button onClick={getDeposits}>Refresh</Button>}>
        <Row style={{ marginBottom: 20 }}>
          <Col span={12}>
          
          </Col>
          <Col span={12}>
         
          </Col>
        </Row>
        { hasVaults && deposits.map(renderDeposit) }
      </Card>
    </Spin>
  )
}

export default BattleZone
