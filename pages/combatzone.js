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
import WarbotWarForm from '../forms/WarbotWarForm'
import AvailableBattles from '../forms/AvailableBattles'
import UserManufacturingCentersClosed from '../forms/UserManufacturingCentersClosed'
import useGlobal from '../hooks/useGlobal'
import useMicroMachineManufacturingPlant from '../hooks/useMicroMachineManufacturingPlant'
import useNanomachines from '../hooks/useNanomachines'


const { Title, Text } = Typography
const { Item } = Descriptions



export default function Dashboard() {
  const wallet = useWallet()
  const [address, setAddress] = useState(false)
  const [state, actions] = useGlobal(['chain',  'micromachines', 'warbotmanufacturer', 'hasWarbotmanufacturer', 'warbotmanufacturerInfo' ])
 
  const { warbotmanufacturer, web3, getField, sendTx, connected, getFields } = useMicroMachineManufacturingPlant(state.warbotmanufacturer)
  const [show, setShow] = useState(false)
  const [data, setData] = useState({ })
  const [loading, setLoading] = useState(false)
  const [nanomachines] = useNanomachines(state.nanomachines)
  const [warbotsupply, setWarbotsupply] = useState(0)
  const [plants, setPlants] = useState(0)
  const [warbotproduction, setWarbotproduction] = useState(0)
  const [manufacturingperiod, setManufacturingPeriod] = useState(0)
  const [sufficientlyApproved, setSufficientlyApproved] = useState(0)
  
  useEffect(() => {
    if (state.warbotmanufacturer && connected) {
      getInfo()
    }
  }, [state.hasWarbotmanufacturer,  connected])

  const getInfo = async() => {
    setLoading(true)
	
	var WarBots = await warbotmanufacturer.totalSupply().call()
	var plants = await warbotmanufacturer.ManufacturingPlantCount().call()
    var warbotproduction = await warbotmanufacturer.globalwarbotproduction().call()
    var manufacturingPeriod =await warbotmanufacturer.manufacturingPeriod().call()

   
	
	const warbotInfo = await getFields( )
	
	setWarbotsupply( WarBots )
	setPlants( plants )
	setWarbotproduction( warbotproduction )
	setManufacturingPeriod( manufacturingPeriod )
    setData(warbotInfo)
    actions.setSecurityInfo(warbotInfo)
    setLoading(false)
  }

  const renderStats = useCallback(() => (
    <Spin spinning={loading}>
      <Card title="Warbot Battle Statistics" extra={<Button type="primary" onClick={getInfo}>Refresh</Button>}>
        <Row gutter={[20, 20]}>
           <Col span={8}>
            <Statistic title="WarBots in Battle:" value={warbotsupply} />
          </Col>
		  <Col span={8}>
            <Statistic title="Total Warbot Battles:" value={plants} />
          </Col>
		  <Col span={8}>
          <Statistic title="Total Rounds of Combat" value={warbotproduction} />
          </Col>
		    <Col span={8}>
            <Statistic title="Total Warbot Victories:" value={manufacturingperiod} />
          </Col>
        
        </Row>
      </Card>
    </Spin>
  ), [ loading])

  return (
    <PublicLayout>
      <div style={{ padding: `20px 0px` }}>
        <Title level={2}>Warbot Combat Zone</Title>
		
         
        {
          (state.hasSecurity && wallet.status == 'connected') && (
            <div>
              <Space style={{ marginTop: 20 }}>
               
              </Space>
              <Tabs defaultActiveKey="dashboard" style={{ marginTop: 20 }}>
                <Tabs.TabPane tab="Warzone  Dashboard" key="dashboard">
                  <Row gutter={20} style={{ marginTop: `10px`, marginBottom: `30px` }}>
                    <Col xs={8}>
                      <WarbotWarForm />
                    </Col>
                    <Col xs={16}>
					  <AvailableBattles />
					   <Space style={{ marginTop: 20 }}></Space>
					  
                    </Col>
                  </Row>
                </Tabs.TabPane>
				<Tabs.TabPane tab="Battles Finalized" key="closedVaults">
                   <UserManufacturingCentersClosed />
                </Tabs.TabPane>
                <Tabs.TabPane tab="WarBot Combat Statistics" key="details">
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
