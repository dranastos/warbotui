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
	
	var WicCards = await wiccardminter.totalSupply().call()

    var taxwallet = 0;
	var wicbonuswallet = 0;
	var bonuswallet = 0;

   
	if ( (state.welfare.toString().length != 0 ) ) {
		
		
		taxwallet = await welfare.balanceOf(state.center).call()
		wicbonuswallet = await welfare.balanceOf(state.wicbonus).call()
		bonuswallet = await welfare.balanceOf(state.bonus).call()
		
	}
	
	const securityInfo = await getFields( taxwallet, wicbonuswallet, bonuswallet, WicCards )
    setPension(securityInfo)
    actions.setSecurityInfo(securityInfo)
    setLoading(false)
  }

  const renderStats = useCallback(() => (
    <Spin spinning={loading}>
      <Card title="Warbot Manufacturing Center" extra={<Button type="primary" onClick={getInfo}>Refresh</Button>}>
        <Row gutter={[20, 20]}>
           <Col span={8}>
            <Statistic title="Tax Wallet" value={pension.taxWallet} />
          </Col>
		  <Col span={8}>
            <Statistic title="Wic Bonus Wallet" value={pension.wicBonusWallet} />
          </Col>
		  <Col span={8}>
            <Statistic title="Bonus Wallet" value={pension.bonusWallet} />
          </Col>
		  <Col span={8}>
            <Statistic title="Wic Cards Issued" value={pension.wicCards} />
          </Col>
		  <Col span={8}>
            <Statistic title="Global Deposit Number" value={pension.globalDepositNumber} />
          </Col>
          <Col span={8}>
            <Statistic title="Global Deposit Time Value" value={pension.globalDepositTimeValue} />
          </Col>
          <Col span={8}>
            <Statistic title="Time Period" value={pension.timePeriod} />
          </Col>
          <Col span={8}>
            <Statistic title="Total Pension Vaults" value={pension.totalSSVaults} />
          </Col>
          <Col span={8}>
            <Statistic title="Reflect Balance" value={pension.reflectBalance} />
          </Col>
          <Col span={8}>
            <Statistic title="Tax Deposit Number" value={pension.globalSSTaxDepositNumber} />
          </Col>
          <Col span={8}>
            <Statistic title="Total Collected Tax" value={pension.totalTaxCollected} />
          </Col>
          <Col span={8}>
            <Statistic title="Tax Collected By Pensioners" value={pension.totalTaxCollectedByPensioners} />
          </Col>
        
        </Row>
      </Card>
    </Spin>
  ), [pension, loading])

  return (
    <PublicLayout>
      <div style={{ padding: `20px 0px` }}>
        <Title level={2}>MicroMachine Warbot Manufaturing Center</Title>

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
                   <UserDepositsClosed />
                </Tabs.TabPane>
                <Tabs.TabPane tab="WarBot Manufaturing Statistics" key="details">
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
