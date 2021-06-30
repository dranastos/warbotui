import { useEffect, useState, useCallback } from 'react'
import { useWallet } from 'use-wallet'
import moment from 'moment'
import Head from 'next/head'

import {
  Layout, Menu, Breadcrumb, Typography, Space, Spin, Alert,
  Tabs, Statistic, Row, Col, Card, Slider, Form, Button, Input, Descriptions,
  notification
} from 'antd'

import PublicLayout from '../layouts/PublicLayout'
import MicroMachineStakingForm from '../forms/MicroMachineStakingForm'
import NanoSalesForm from '../forms/NanoSalesForm'
import NanosPurchased from '../forms/NanosPurchased'
import UserManufacturingCenters from '../forms/UserManufacturingCenters'
import UserManufacturingCentersClosed from '../forms/UserManufacturingCentersClosed'
import useGlobal from '../hooks/useGlobal'
import useMicroMachineManufacturingPlant from '../hooks/useMicroMachineManufacturingPlant'
import useMicroMachines from '../hooks/useMicroMachines'
import useToken from '../hooks/useToken'


const { Title, Text } = Typography
const { Item } = Descriptions



export default function Dashboard() {
  const wallet = useWallet()
  const [address, setAddress] = useState(false)
  const [state, actions] = useGlobal(['chain', 'security', 'hasSecurity', 'micromachines', 'securityInfo'])
  const { security, web3, getField, sendTx, connected, getFields } = useMicroMachineManufacturingPlant(state.security)
  const [show, setShow] = useState(false)
  const [pension, setPension] = useState({ })
 
  const [loading, setLoading] = useState(false)
  const [MicroMachines] = useMicroMachines(state.micromachines)
  const [busd] = useToken(state.busd)
 

  
  useEffect(() => {
    if (state.hasSecurity && connected) {
      getInfo()
    }
  }, [state.hasSecurity, state.vaultCount, connected])

  const getInfo = async() => {
    setLoading(true)
	
	var WarBots = await security.totalSupply().call()
    const securityInfo = await getFields( )
    setPension(securityInfo)
    actions.setSecurityInfo(securityInfo)
    setLoading(false)
  }

  const renderStats = useCallback(() => (
    <Spin spinning={loading}>
      <Card title="Warbot Manufacturing Center" extra={<Button type="primary" onClick={getInfo}>Refresh</Button>}>
        <Row gutter={[20, 20]}>
           <Col span={8}>
            <Statistic title="WarBots in Existence" value={pension.totalSupply} />
          </Col>
		  <Col span={8}>
            <Statistic title="Total Manufacturing Plants" value={pension.globalwarbotmanufacturingplants} />
          </Col>
		  <Col span={8}>
            <Statistic title="Warbots Manufactured Per Month" value={pension.globalwarbotproduction} />
          </Col>
		  
        
        </Row>
      </Card>
    </Spin>
  ), [pension, loading])

  return (
    <PublicLayout>
      <div style={{ padding: `20px 0px` }}>
        <Title level={2}>Nanomachine Sales - Upgrade your Warbots</Title>
		
         
        {
          (state.hasSecurity && wallet.status == 'connected') && (
            <div>
              <Space style={{ marginTop: 20 }}>
               
              </Space>
              <Tabs defaultActiveKey="dashboard" style={{ marginTop: 20 }}>
                <Tabs.TabPane tab="Nanosale Dashboard" key="dashboard">
                  <Row gutter={20} style={{ marginTop: `10px`, marginBottom: `30px` }}>
                    <Col xs={8}>
                      <NanoSalesForm />
                    </Col>
                    <Col xs={16}>
					  <NanosPurchased />
					   <Space style={{ marginTop: 20 }}></Space>
					  
                    </Col>
                  </Row>
                </Tabs.TabPane>
				
				
              </Tabs>
            </div>
          )
        }

      </div>
    </PublicLayout>
  )
}

       