import { useEffect, useState } from 'react'
import { Typography, Space, Row, Col, Card, Slider, List, Spin, Collapse, Form, Button, Input, Tag, Statistic, notification } from 'antd'
const { Title, Text } = Typography
import { useWallet } from 'use-wallet'
import useWeb3 from '../hooks/useWeb3'
import useMicroMachineManufacturingPlant from '../hooks/useMicroMachineManufacturingPlant'
import useGlobal from '../hooks/useGlobal'
import useStaking from '../hooks/useStaking'
import moment from 'moment'



const UserManufacturingCenters = ({ onComplete, address }) => {
  
  const wallet = useWallet()
  const [getVault, sendVaultTx] = useStaking()
  const [state, actions] = useGlobal(['security', 'hasSecurity', 'vaultCount'])
  const { security, web3, connected } = useMicroMachineManufacturingPlant(state.security)
  const [deposits, setDeposits] = useState([])
  const [vaults, setVaults] = useState({})
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [hasVaults, setHasVaults] = useState(false)

  useEffect(() => {
    if (connected && state.hasSecurity) {
      getDeposits(false)
    }
  }, [connected, state.hasSecurity, state.vaultCount])

   

  const getDeposits = async() => {
    
	setLoading(true)
    
    const deps = await security.getUserManufacturingPlants(wallet.account).call()
	const totalDeps = await security.userManufacturingPlantCount(wallet.account).call()
    console.log(totalDeps)
    
	
	setDeposits(deps)

    let vaults = {}
    for (let dep of deps) {
	  const rawdata = await security.ManufacturingPlants(dep).call()
       const data = await getVault( rawdata )
	  console.log( data )

      vaults[dep] = {
        
        address,
        ...data
      }

    }
	
    setVaults(vaults)
    setTotal(totalDeps)
    setHasVaults(true)
    setLoading(false)
  }

  const handleSettle = async(id) => {
    const tx = await security.settle(id).send({ from: wallet.account, to: state.security })
    if (tx.status) {
      notification.success({
        message: 'Settlement Successful',
        description: tx.transactionHash
      })
    }
  }

  const renderDeposit = (id, key) => {
    console.log( "HERE" )
	
	if (vaults[id] == undefined) return null;
	console.log( vaults[id])
	var timeNow = new Date().getTime()/1000
	var expirationTime = vaults[id].timeAtExpirationUnix
	var expiry = vaults[id].timeAtExpirationUnix
	var vaultStatus = vaults[id].vaultStatus
	
	var production = "MONTHLY PRODUCTION RATE: " + vaults[id].MonthlyProductionRate + " WarBots "
	var mmstaked = "MicroMachines Staked:" + vaults[id].MicroMachinesStaked
	var expiration = "Lease Expires: " + moment.unix(vaults[id].timeAtExpiration).format('MM/DD/YYYY HH:mm')
	
 	//if ( timeNow > expiry ) {expiry = "EXPIRED"} else {expiry = vaults[id].timeAtExpiration}
	//if ( vaultStatus == "Inactive" ) expiry = "EXPIRED"
	 if ( vaults[id].PlantStatus == "Inactive" ) return( <div></div> )
	
	
		
    return (
      <div key={`vault-${id}`}>
        <Collapse>
          <Collapse.Panel header={`${mmstaked} - ${vaults[id].timeAtExpiration} - ${production}`}>
            <Row style={{ marginTop: 10 }} gutter={[20, 20]}>
              <Col span={24}>
                <Space size="small" style={{ marginBottom: 10 }}>
                 
                  <Button
                    type="primary"
                    onClick={() => sendVaultTx('manufacture', vaults[id].address, wallet.account,id)}>
                    Manufacture WarBots
                  </Button>
                  <Button
                    type="danger"
                    onClick={() => sendVaultTx('unstakeMicroMachines', vaults[id].address, wallet.account,id)}>
                    Shutdown Plant
                  </Button>
                  </Space>
                  
              </Col>
              <Col span={12}>
                <Statistic title="WarBot Manufacturing Plant " value={id} />
              </Col>

              {
                Object.keys(vaults[id]).map((name, key) => (
                  <Col
                    key={`${id}-${name}-${key}`}
                    span={vaults.[id]['MicroMachinesStaked'].toString().startsWith('0x') ? 24 : 8}>
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
      <Card title="WarBot Manufacturing Plants" extra={<Button onClick={getDeposits}>Refresh</Button>}>
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

export default UserManufacturingCenters
