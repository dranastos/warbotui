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
import UserManufacturingCenters from '../forms/UserManufacturingCenters'
import UserManufacturingCentersClosed from '../forms/UserManufacturingCentersClosed'
import useGlobal from '../hooks/useGlobal'
import useMicroMachineManufacturingPlant from '../hooks/useMicroMachineManufacturingPlant'
import useMicroMachines from '../hooks/useMicroMachines'

const { Title, Text } = Typography
const { Item } = Descriptions



export default function Dashboard() {
  const wallet = useWallet()
  const [address, setAddress] = useState(false)
  const [state, actions] = useGlobal(['chain', 'security', 'hasSecurity', 'micromachines', 'securityInfo', 'warbotmanufacturer', 'hasWarbotmanufacturer' ])
  console.dir( "WARBOT MM " + state.warbotmanufacturer)
  const { security, web3, getField, sendTx, connected, getFields } = useMicroMachineManufacturingPlant(state.warbotmanufacturer)
  const [show, setShow] = useState(false)
  const [data, setData] = useState({ })
  const [loading, setLoading] = useState(false)
  const [MicroMachines] = useMicroMachines(state.micromachines)
  
  useEffect(() => {
    if (state.warbotmanufacturer && connected) {
      getInfo()
    }
  }, [state.hasWarbotmanufacturer,  connected])

  const getInfo = async() => {
    setLoading(true)
	
	var WarBots = await security.totalSupply().call()

   

   
	
	const securityInfo = await getFields( )
    setData(securityInfo)
    actions.setSecurityInfo(securityInfo)
    setLoading(false)
  }

  const renderStats = useCallback(() => (
    <Spin spinning={loading}>
      <Card title="Warbot Manufacturing Center" extra={<Button type="primary" onClick={getInfo}>Refresh</Button>}>
        <Row gutter={[20, 20]}>
           <Col span={8}>
            <Statistic title="WarBots in Existence" value={data.totalSupply} />
          </Col>
		  <Col span={8}>
            <Statistic title="Total Manufacturing Plants" value={data.globalwarbotmanufacturingplants} />
          </Col>
		  <Col span={8}>
            <Statistic title="Warbots Manufactured Per Month" value={data.globalwarbotproduction} />
          </Col>
		  
        
        </Row>
      </Card>
    </Spin>
  ), [ loading])

  return (
    <PublicLayout>
      <div style={{ padding: `20px 0px` }}>
        <Title level={2}>MicroMachine Warbot Manufacturing Center</Title>
		
         
        {
          (state.hasSecurity && wallet.status == 'connected') && (
            <div>
              <Space style={{ marginTop: 20 }}>
               
              </Space>
              <Tabs defaultActiveKey="dashboard" style={{ marginTop: 20 }}>
                <Tabs.TabPane tab="Warbot Manufacturer Dashboard" key="dashboard">
                  <Row gutter={20} style={{ marginTop: `10px`, marginBottom: `30px` }}>
                    <Col xs={8}>
                      <MicroMachineStakingForm />
                    </Col>
                    <Col xs={16}>
					  <UserManufacturingCenters />
					   <Space style={{ marginTop: 20 }}></Space>
					  
                    </Col>
                  </Row>
                </Tabs.TabPane>
				<Tabs.TabPane tab="Closed Plants" key="closedVaults">
                   <UserManufacturingCentersClosed />
                </Tabs.TabPane>
                <Tabs.TabPane tab="WarBot Manufacturing Statistics" key="details">
                  { renderStats() }
                </Tabs.TabPane>
				
              </Tabs>
            </div>
          )
        }

      </div>
    </PublicLayout>
  )
}
