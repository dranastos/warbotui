import { useEffect, useState } from 'react'
import { Typography, Space, Row, Col, Card, Slider, List, Spin, Collapse, Form, Button, Input, Tag, Statistic, notification } from 'antd'
const { Title, Text } = Typography
import { useWallet } from 'use-wallet'
import useWeb3 from '../hooks/useWeb3'
import useMicroMachineManufacturingPlant from '../hooks/useMicroMachineManufacturingPlant'
import useGlobal from '../hooks/useGlobal'
import useStaking from '../hooks/useStaking'
import moment from 'moment'
import useNanosales from '../hooks/useNanosales'



const NanosPurchased = ({ onComplete, address }) => {
  
  const wallet = useWallet()
  const [getVault, sendVaultTx] = useStaking()
  const [state, actions] = useGlobal(['security', 'hasSecurity', 'vaultCount'])
  const { security, web3, connected } = useMicroMachineManufacturingPlant(state.security)
  const [deposits, setDeposits] = useState([])
  const [vaults, setVaults] = useState({})
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [hasVaults, setHasVaults] = useState(false)
  const [nanosales] = useNanosales(state.nanosales)
  const [lockednanos, setLockednanos] = useState(0)
  const [lockedtime, setLockedtime] = useState(0)

  useEffect(() => {
    if (connected && state.hasNanosales) {
      getDeposits(false)
    }
  }, [connected, state.hasNanosales, state.nanosales])

   

  const getDeposits = async() => {
    
	setLoading(true)
    
    const lockednanos = await nanosales.purchasedAmount(wallet.account).call()
	const lockexpiration = await nanosales.lockExpiration(wallet.account).call()
	setLockednanos( web3.utils.fromWei(lockednanos) )
	setLockedtime( lockexpiration == 0 ? 0: moment.unix(lockexpiration).format('MM/DD/YYYY HH:mm') )
	
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

  const withdraw = async(i) => {
    const tx = await nanosales.withdraw().send({ from: wallet.account, to: state.nanosales })
    if (tx.status) {
      notification.success({
        message: 'Settlement Successful',
        description: tx.transactionHash
      })
    }
  }


  return (
    <Spin spinning={loading}>
      <Card title="Nanos Purchased" extra={<Button onClick={getDeposits}>Refresh</Button>}>
	    <Button
            type="primary"
            onClick={() => withdraw()}>
             Withdraw Nanomachines
        </Button>
        <Row style={{ marginBottom: 20 }}>
          <Col span={12}>
          <Statistic title="Nanomachines Locked " value={lockednanos} />
          </Col>
          <Col span={12}>
          <Statistic title="Lock Expiration " value={lockedtime} />
          </Col>
        </Row>
        
      </Card>
    </Spin>
  )
}

export default NanosPurchased
