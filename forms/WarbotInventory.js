import { useEffect, useState } from 'react'
import { Typography, Space, Row, Col, Card, Slider, List, Spin, Collapse, Form, Button, Input, Tag, Statistic, notification } from 'antd'
const { Title, Text } = Typography
import { useWallet } from 'use-wallet'
import useWeb3 from '../hooks/useWeb3'
import useMicroMachineManufacturingPlant from '../hooks/useMicroMachineManufacturingPlant'
import useGlobal from '../hooks/useGlobal'
import useWarbots from '../hooks/useWarbots'
import useNanonfts from '../hooks/useNFT'

import moment from 'moment'



const WarbotInventory = ({ onComplete, address }) => {
  
  const wallet = useWallet()
  const [getVault, sendVaultTx] = useWarbots()
  const [state, actions] = useGlobal(['warbotmanufacturer', 'hasSecurity', 'vaultCount'])
  const { warbotmanufacturer, web3, connected } = useMicroMachineManufacturingPlant(state.warbotmanufacturer)
  const [ nanonft ] = useNanonfts(state.nanonft) 
  const [deposits, setDeposits] = useState([])
  const [vaults, setVaults] = useState({})
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [hasVaults, setHasVaults] = useState(false)

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
	console.dir(userwarbots)
	
    
    
	
	setDeposits(userwarbots)

    let vaults = {}
    for (let warbot of userwarbots) {
	   //const rawdata = await warbotmanufacturer.ManufacturingPlants(dep).call()
	   //const rawdata = await warbotmanufacturer.WarbotLevel(dep).call()
       const data = await getVault( warbot )


      vaults[warbot] = {
        
       
        ...data
      }

    }
	
    setVaults(vaults)
    setTotal(totalDeps)
    setHasVaults(true)
    setLoading(false)
  }

  const deployNanoNFTS = async(id) => {
    
	setLoading(true)
    console.log("DEPLOY NANO NFTS" +id)
	const cardsperwarbot = await nanonft.cardsperwarbot().call()
	const tx = await nanonft.deployNFTNanoset(id).send({ from: wallet.account, to: state.nanonft })
    if (tx.status) {
      notification.success({
        message: cardsperwarbot  + ' Nano NFT Cards Deployed for Auction',
        description: tx.transactionHash
      })
    }
    setLoading(false)
  }
 
 

  const renderDeposit = (id, key) => {
    
	try{
	if (vaults[id].Level == 0) return null;
	}catch (e) {
           return null;
        }
	
	
	
	var warbotid = "Warbot Indentification Number:" + vaults[id].WarbotNumber
	var warbotlevel = "Warbot Level: " + vaults[id].Level
	
	
	
	
		
    return (
      <div key={`vault-${id}`}>
        <Collapse>
          <Collapse.Panel header={`${warbotid} -${warbotlevel}`}>
            <Row style={{ marginTop: 10 }} gutter={[20, 20]}>
              <Col span={24}>
               <Button type="primary" onClick={() => deployNanoNFTS(id)}  style={{ background: "black", borderColor: "yellow" }}>Deploy NanoNFTS</Button>
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
