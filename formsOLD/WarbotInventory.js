import { useEffect, useState } from 'react'
import { Typography, Space, Row, Col, Card, Slider, List, Spin, Collapse, Form, Button, Input, Tag, Statistic, notification } from 'antd'
const { Title, Text } = Typography
import { useWallet } from 'use-wallet'
import useWeb3 from '../hooks/useWeb3'
import useMicroMachineManufacturingPlant from '../hooks/useMicroMachineManufacturingPlant'
import useGlobal from '../hooks/useGlobal'
import useWarbots from '../hooks/useWarbots'
import useNanonfts from '../hooks/useNFT'
import useWarbotstats from '../hooks/useWarbotStats'
import useNanomachines from '../hooks/useNanomachines'
import useWarbotStatsData from '../hooks/useWarbotStatsData'

import moment from 'moment'



const WarbotInventory = ({ onComplete, address }) => {
  
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
  const [loading, setLoading] = useState(false)
  const [hasVaults, setHasVaults] = useState(false)
  const [ warbotstatsdata, wbdconnected ] = useWarbotStatsData(state.warbotstatsdata)

  useEffect(() => {
    if (connected && state.hasWarbotmanufacturer) {
      getDeposits(false)
    }
  }, [connected, state.hasSecurity, state.vaultCount])

   

  const getDeposits = async() => {
    
	setLoading(true)
    
    //const deps = await warbotmanufacturer.getUserManufacturingPlants(wallet.account).call()
	//const totalDeps = await warbotmanufacturer.userManufacturingPlantCount(wallet.account).call()
	
	const userwarbots = await warbotmanufacturer.getUsersWarbots(wallet.account).call()
	const totalDeps = userwarbots.length
	setDeposits(userwarbots)

    let vaults = {}
    for (let warbot of userwarbots) {
	  
	 try{ 
		const owner = await warbotmanufacturer.ownerOf(warbot).call()  
		if ( owner != wallet.account ) continue
		const data = await getVault( warbot, wallet.account )
		
		vaults[warbot] = { ...data}
     }catch (e) {
      console.log(warbot , e)
    }    
	}  
       
      

    
	console.dir ( vaults )
    setVaults(vaults)
    setTotal(totalDeps)
    setHasVaults(true)
    setLoading(false)
  }

  const activateWarbot = async(id) => {
    
	setLoading(true)
    console.log("Activate Warbot # " + id)
	//const cardsperwarbot = await nanonft.cardsperwarbot().call()
	const tx = await warbotstats.activateWarbot(id).send({ from: wallet.account, to: state.warbotstats })
    if (tx.status) {
      notification.success({
        message:  ' Warbot Activated',
        description: tx.transactionHash
      })
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
 

  const renderDeposit = (id, key) => {
    
	if ( vaults[id] === undefined ) return
	var warbotid = "Warbot Identification Number: " + vaults[id].WarbotNumber
	var warbotlevel = "Warbot Level: " + vaults[id].Level
	var type = vaults[id].WarbotType
	
	
		
    return (
      <div key={`vault-${id}`}>
        <Collapse>
          <Collapse.Panel header={`${warbotid} -${warbotlevel} -${type}`}>
            <Row style={{ marginTop: 10 }} gutter={[20, 20]}>
              <Col span={24}>
               <Button type="primary" onClick={() => approve()}  style={{ background: "black", borderColor: "yellow" }}>Approve Activation Cost</Button>
			   <Button type="primary" onClick={() => activateWarbot(id)}  style={{ background: "black", borderColor: "yellow" }}>Activate Warbot</Button>
			   <Button type="primary" onClick={() => rerollLevelStats(id)}  style={{ background: "black", borderColor: "yellow" }}>Reroll Level Stats</Button>
			   <Button type="primary">Upgrade</Button> 
			   <Button type="danger">Send For Parts</Button> 
			   <Button type="primary" style={{ background: "green", borderColor: "yellow" }}>Send To Dealership</Button> 
			   <Button type="danger">Send To Warzone</Button> 
                  
              </Col>
             

              {
                Object.keys(vaults[id]).map((name, key) => (
                  <Col
                    key={`${id}-${name}-${key}`}
                    span={vaults.[id]['WarbotNumber'].toString().startsWith('0x') ? 24 : 8}>
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
      <Card title="WarBot Inventory" extra={<Button onClick={getDeposits}>Refresh</Button>}>
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

export default WarbotInventory
