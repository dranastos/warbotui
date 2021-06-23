import { useEffect, useState, useCallback } from 'react'
import { useWallet } from 'use-wallet'
import moment from 'moment'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../images/badguy1.jpeg'

import {
  Layout, Menu, Breadcrumb, Typography, Space, Spin, Alert,
  Tabs, Statistic, Row, Col, Card, Slider, Form, Button, Input, Descriptions,
  notification
} from 'antd'

import PublicLayout from '../layouts/PublicLayout'
import NanoMachineStakingForm from '../forms/NanoMachineStakingForm'
import NanoMachinesNanoLPStakingForm from '../forms/NanoMachinesNanoLPStakingForm'
import NanoMachinesMicroLPStakingForm from '../forms/NanoMachinesMicroLPStakingForm'
import UserManufacturingCenters from '../forms/UserManufacturingCenters'
import UserManufacturingCentersClosed from '../forms/UserManufacturingCentersClosed'
import UserDepositsClosed from '../forms/UserDepositsClosed'
import UserDepositsExpiredUnsettled from '../forms/UserDepositsExpiredUnsettled'
import useGlobal from '../hooks/useGlobal'
import useMicroMachineManufacturingPlant from '../hooks/useMicroMachineManufacturingPlant'
import useWelfare from '../hooks/useWelfare'
import useWicCardMinter from '../hooks/useWicCardMinter'

const { Title, Text } = Typography
const { Item } = Descriptions

// import SettleForm from '../forms/SettleForm'
// import PenaltyAdjustForm from '../forms/PenaltyAdjustForm'
// import PullTaxForm from '../forms/PullTaxForm'

// COMMAND CENTER: 0xe73C89DFA51E82e7895b0E9E9B8E9b1b4A91b2b6
// BONUS: 0xEeCFE0b4c47cb5d61F180d721674a405A86FB53c
// WELFARE ADDRESS: 0xbEDA6Df7a5bCA914915fb80D13c1b6b32dF8F8ab
// SOCIAL SECURITY: 0x5d09f5E94f8f2cAb11DB1A7D1C71cdd80E7c0e69


export default function Dashboard() {
  const wallet = useWallet()
  const [address, setAddress] = useState(false)
  const [state, actions] = useGlobal(['chain', 'security', 'hasSecurity', 'welfare', 'securityInfo', 'vaultCount', 'wicCardMinter'])
  const { security, web3, getField, sendTx, connected, getFields } = useMicroMachineManufacturingPlant(state.security)
  const [show, setShow] = useState(false)
  const [pension, setPension] = useState({ })
  const [counter, setCounter] = useState(0)
  const [loading, setLoading] = useState(false)
  const [welfare] = useWelfare(state.welfare)
  const { wiccardminter, wicCardweb3, wicCardconnected , sendWicCardTx} = useWicCardMinter( state.wicCardMinter )
  
  useEffect(() => {
    if (state.hasSecurity && connected) {
      getInfo()
    }
  }, [state.hasSecurity, state.vaultCount, connected])

  const getInfo = async() => {
    setLoading(true)
	
	var WarBots = await security.totalSupply().call()
    console.log( "WB-" + WarBots )
   

   
	
	const securityInfo = await getFields( )
    setPension(securityInfo)
    actions.setSecurityInfo(securityInfo)
    setLoading(false)
  }

  const renderStats = useCallback(() => (
    <Spin spinning={loading}>
      <Card title="Nanomachine Production Facilty" extra={<Button type="primary" onClick={getInfo}>Refresh</Button>}>
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
        <Title level={2}>Nanomachine Production Facilty</Title>

        {
          (state.hasSecurity && wallet.status == 'connected') && (
            <div>
              <Space style={{ marginTop: 20 }}>
               
              </Space>
              <Tabs defaultActiveKey="dashboard" style={{ marginTop: 20 }}>
                <Tabs.TabPane tab="Nanomachine Dashboard" key="dashboard">
                  <Row gutter={20} style={{ marginTop: `10px`, marginBottom: `30px` }}>
                    <Col xs={8}>
                      <NanoMachineStakingForm />
                    </Col>
                    <Col xs={8}>
					  
					   <Space style={{ marginTop: 20 }}></Space>
					  
                    </Col>
					<Col xs={8}>
					 
					   <Space style={{ marginTop: 20 }}></Space>
					  
                    </Col>
                  </Row>
                </Tabs.TabPane>
				
                <Tabs.TabPane tab="Nanomachine Statistics" key="details">
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
