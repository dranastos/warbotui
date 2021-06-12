import { useEffect, useState } from 'react'
import { Typography, Space, Row, Col, Card, Slider, List, Spin, Collapse, Form, Button, Input, Tag, Statistic, notification } from 'antd'
const { Title, Text } = Typography
import { useWallet } from 'use-wallet'
import useWeb3 from '../hooks/useWeb3'
import useSecurity from '../hooks/useSecurity'
import useGlobal from '../hooks/useGlobal'
import useVault from '../hooks/useVault'
import moment from 'moment'

const UserDepositsExpiredUnsettled = ({ onComplete, address }) => {
  
  const wallet = useWallet()
  const [getVault, sendVaultTx] = useVault()
  const [state, actions] = useGlobal(['security', 'hasSecurity', 'vaultCount'])
  const { security, web3, connected } = useSecurity(state.security)
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
    const totalDeps = await security.userTotalDeposits(wallet.account).call()
    const deps = await security.getUserDeposits(wallet.account).call()
	const globalDeposits = await security.globalDepositTimeValue().call()
    setDeposits(deps)
	
    let vaults = {}
    for (let dep of deps) {
	  
      const address = await security.deposits(dep).call()
      console.log("address # " + address)
	  const data = await getVault(address, globalDeposits )
      console.log("data # " + data)     
	  const status = await security.ssVault(address).call()

      

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
    if (vaults[id] == undefined) return null;
	var timeNow = new Date().getTime()/1000
	var expirationTime = vaults[id].timeAtExpirationUnix
	var vaultStatus = vaults[id].vaultStatus
	var expiry = false;
	
	if ( vaultStatus == "Inactive"    ) return( <div></div> )
    if ( timeNow < expirationTime ) return( <div></div> )
    
    
return (
      <div key={`vault-${id}`}>
        <Collapse>
          <Collapse.Panel header={`${vaults[id].address} - ${vaults[id].depositamount} `}>
            <Row style={{ marginTop: 10 }} gutter={[20, 20]}>
              <Col span={24}>
                <Space size="small" style={{ marginBottom: 10 }}>
                  <Button
                    type="primary"
                    onClick={() => handleSettle(id)}>
                    Settle
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => sendVaultTx('withdrawReflectBalance', vaults[id].address, wallet.account)}>
                    Withdraw Reflect Balance
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => sendVaultTx('pullTaxShare', vaults[id].address, wallet.account)}>
                    Pull Tax Share
                  </Button>
                  </Space>
                  <Space>
                  <Button
                    type="primary"
                    onClick={() => sendVaultTx('pullTaxShareEmergency', vaults[id].address, wallet.account, vaults[id].lastUpdate)}>
                    Pull Tax Emergency
                  </Button>
                  <Button
                    type="danger"
                    onClick={() => sendVaultTx('emergencyWithdrawal', vaults[id].address, wallet.account)}>
                    Emergency Withdrawal
                    </Button>
                </Space>
              </Col>
              <Col span={12}>
                <Statistic title="Deposit Number" value={id} />
              </Col>

              {
                Object.keys(vaults[id]).map((name, key) => (
                  
<Col
                    key={`${id}-${name}-${key}`}
                    span={vaults.[id][name].toString().startsWith('0x') ? 24 : 8}>
                    <Statistic
                      title={name.toUpperCase()}
                      value={vaults.[id][name]}
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
      <Card title="User Deposits - Expired and Unsettled" extra={<Button onClick={getDeposits}>Refresh</Button>}>
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

export default UserDepositsExpiredUnsettled
