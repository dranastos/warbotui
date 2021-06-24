import { useEffect, useState, useCallback } from 'react'
import { useWallet } from 'use-wallet'
import moment from 'moment'
import Head from 'next/head'
//import Image from 'next/image'
//import profilePic from '../images/badguy1.jpeg'

import {
  Layout, Menu, Breadcrumb, Typography, Space, Spin, Alert,
  Tabs, Statistic, Row, Col, Card, Slider, Form, Button, Input, Descriptions,
  notification
} from 'antd'

import PublicLayout from '../layouts/PublicLayout'
import MicroMachineStakingForm from '../forms/MicroMachineStakingForm'
import UserManufacturingCenters from '../forms/UserManufacturingCenters'
import UserManufacturingCentersClosed from '../forms/UserManufacturingCentersClosed'
//import UserDepositsClosed from '../forms/UserDepositsClosed'
//import UserDepositsExpiredUnsettled from '../forms/UserDepositsExpiredUnsettled'
import useGlobal from '../hooks/useGlobal'
import useMicroMachineManufacturingPlant from '../hooks/useMicroMachineManufacturingPlant'
import useMicroMachines from '../hooks/useMicroMachines'
//import useWicCardMinter from '../hooks/useWicCardMinter'

const { Title, Text } = Typography
const { Item } = Descriptions



export default function Dashboard() {
  const wallet = useWallet()
  const [address, setAddress] = useState(false)
  const [state, actions] = useGlobal(['chain', 'security', 'hasSecurity', 'micromachines', 'securityInfo'])
  const { security, web3, getField, sendTx, connected, getFields } = useMicroMachineManufacturingPlant(state.security)
  const [show, setShow] = useState(false)
  const [pension, setPension] = useState({ })
  //const [counter, setCounter] = useState(0)
  const [loading, setLoading] = useState(false)
  const [MicroMachines] = useMicroMachines(state.micromachines)
 // const { wiccardminter, wicCardweb3, wicCardconnected , sendWicCardTx} = useWicCardMinter( state.wicCardMinter )
  
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

        //
        // {
        //   (wallet.status == 'connected' && pension.owner == wallet.account) && (
        //     <div>
        //       <Title level={2}>Pension Depositor Only</Title>
        //       <Row gutter={20} style={{ marginTop: `10px`, marginBottom: `30px` }}>
        //         <Col xs={8}>
        //           <PullTaxForm />
        //         </Col>
        //         <Col xs={8}>
        //           <SettleForm />
        //         </Col>
        //         <Col xs={8}>
        //           <PenaltyAdjustForm />
        //         </Col>
        //       </Row>
        //     </div>
        //
        //   )
        // }
