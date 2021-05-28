import { useEffect, useState } from 'react'
import { Typography, Space, Row, Col, Card, Slider, List, Spin, Collapse, Form, Button, Input, Tag, Statistic, notification } from 'antd'
const { Title, Text } = Typography
import { useWallet } from 'use-wallet'
import useWeb3 from '../hooks/useWeb3'
import useSecurity from '../hooks/useSecurity'
import useGlobal from '../hooks/useGlobal'
import useVault from '../hooks/useVault'

const UserDeposits = ({ onComplete, address }) => {
  const wallet = useWallet()
  const [getVault] = useVault()
  const [state, actions] = useGlobal(['security', 'hasSecurity', 'vaultCount'])
  const [contract, web3] = useSecurity(state.security)
  const [deposits, setDeposits] = useState([])
  const [vaults, setVaults] = useState({})
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [hasVaults, setHasVaults] = useState(false)

  useEffect(() => {
    if (contract && state.hasSecurity) {
      getDeposits(false)
    }
  }, [contract, state])

  const getDeposits = async() => {
    setLoading(true)
    const totalDeps = await contract.userTotalDeposits(wallet.account).call()
    const deps = await contract.getUserDeposits(wallet.account).call()
    setDeposits(deps)
    let vaults = {}
    for (let dep of deps) {
      const address = await contract.deposits(dep).call()
      const data = await getVault(address)
      const status = await contract.ssVault(address).call()

      console.log("DP STATUS", status)

      vaults[dep] = {
        status: status ? 'Active' : 'Inactive',
        address,
        ...data
      }

    }
    setVaults(vaults)
    setTotal(totalDeps)
    setHasVaults(true)
    setLoading(false)
  }

  const renderDeposit = (id, key) => {
    if (vaults[id] == undefined) return null;
    return (
      <div>
      <Collapse>
        <Collapse.Panel header={`${vaults[id].address} - ${vaults[id].depositamount}`} key={id}>
          <Row style={{ marginTop: 10 }} gutter={[20, 20]}>
            <Col span={24}>
              <Space size="small">
                <Button type="primary">Withdraw Reflect Balance</Button>
                <Button type="primary">Pull Tax Share</Button>
                <Button type="danger">Emergency Withdrawal</Button>
              </Space>
            </Col>
            <Col span={12}>
              <Statistic title="Deposit Number" value={id} />
            </Col>

            {
              Object.keys(vaults[id]).map((name, key) => (
                <Col
                  key={`${id}-${key}`} 
                  span={vaults.[id][name].toString().startsWith('0x') ? 24 : 8}>
                  <Statistic
                    title={name.toUpperCase()}
                    value={vaults.[id][name]}
                    precision={4}
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
      <Card title="Pensioner Deposits" extra={<Button onClick={getDeposits}>Refresh</Button>}>
        <Row style={{ marginBottom: 20 }}>
          <Col span={12}>
            <Statistic title="Total Deposits" value={web3.utils.fromWei(total.toString(), 'gwei')} />
          </Col>
          <Col span={12}>
            <Statistic title="Total Vaults" value={Object.keys(vaults).length} />
          </Col>
        </Row>
        { hasVaults && deposits.map(renderDeposit) }
      </Card>
    </Spin>
  )
}

export default UserDeposits
