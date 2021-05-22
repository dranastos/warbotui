import { useEffect, useState } from 'react'
import Head from 'next/head'
import { Layout, Menu, Breadcrumb, Typography, Space, Row, Col, Card, Slider, Form, Button, Input, Descriptions, notification } from 'antd'
const { Title, Text } = Typography
import PublicLayout from '../layouts/PublicLayout'
import { useWallet } from 'use-wallet'
const { Item } = Descriptions
import { SocialSecurity } from '../forms/contracts'
import VaultDepositForm from '../forms/VaultDepositForm'
import SettleForm from '../forms/SettleForm'
import PenaltyAdjustForm from '../forms/PenaltyAdjustForm'
import PullTaxForm from '../forms/PullTaxForm'

export default function Dashboard() {
  const wallet = useWallet()
  const [pension, setPension] = useState({ })
  const [counter, setCounter] = useState(0)
  const [hasDeposits, setHasDeposits] = useState(false) // user has deposits

  useEffect(() => {
    if (wallet.status == 'connected') {
      getInfo()
    }
  }, [wallet.status])

  const getInfo = async() => {
    let owner = await getField('owner')
    let timePeriod = await getField('timePeriod')
    let emergencyAddress = await getField('EmergencyAddress')
    let welfareAddress = await getField('WelfareCommandCenterAddress')
    let ssTaxReceivingContract = await getField('ssTaxReceivingContract')
    let globalDepositNumber = await getField('globalDepositNumber')
    let globalSSTaxDepositNumber = await getField('globalSSTaxDepositNumber')
    let totalTaxCollected = await getField('totalTaxCollected')
    let totalSSVaults = await getField('totalSSVaults')
    let totalTaxCollectedByPensioners = await getField('totalTaxCollectedByPensioners')

    let token = await getField('token')
    let bonusVault = await getField('bonusVault')
    let deposits = await SocialSecurity.methods.getUserDeposits(wallet.account).call()
    if (deposits.length > 0) {
      setHasDeposits(true)
    }
    console.log("deposits", deposits)

    setPension({ ...pension,
      owner, timePeriod, ssTaxReceivingContract,
      globalDepositNumber, globalSSTaxDepositNumber,
      totalTaxCollected, totalSSVaults, totalTaxCollectedByPensioners,
      token, bonusVault, emergencyAddress, welfareAddress
    })

    setCounter(counter + 1)
  }

  const comradeVaultDeposit = async() => {
    const reply = await SocialSecurity.methods.ssVaultDeposit().send()
  }

  const getField = async(field) => await SocialSecurity.methods[field]().call()

// Pension 0xEe01AA16D9F79623a174B61F6BE67dB287fc9722

  return (
    <PublicLayout>
      <div style={{ padding: `20px 0px` }}>
        <Title level={2}>Pension</Title>

        {
          wallet.status == 'connected' && (
            <Row gutter={20} style={{ marginTop: `10px`, marginBottom: `30px` }}>
              <Col xs={8}>
                <VaultDepositForm />
              </Col>
              <Col xs={8}>
                <SettleForm />
              </Col>
              <Col xs={8}>
                <PenaltyAdjustForm />
              </Col>
            </Row>
          )
        }

        {
          (wallet.status == 'connected' && pension.owner == wallet.account) && (
            <div>
              <Title level={2}>Pension Depositor Only</Title>
              <Row gutter={20} style={{ marginTop: `10px`, marginBottom: `30px` }}>
                <Col xs={8}>
                  <PullTaxForm />
                </Col>
                <Col xs={8}>
                  <SettleForm />
                </Col>
                <Col xs={8}>
                  <PenaltyAdjustForm />
                </Col>
              </Row>
            </div>

          )
        }

        {
          wallet.status == 'connected' && (
            <Descriptions title="Details" bordered column={4} style={{ background: 'white', border: `1px solid #B4CAEA`, padding: `20px` }}>
              <Item label="Owner" span={2}>{pension.owner}</Item>
              <Item label="Pension Receiving Contract" span={2}>{pension.pensionTaxReceivingContract}</Item>

              <Item label="Token" span={2}>{pension.token}</Item>
              <Item label="Bonus Vault" span={2}>{pension.bonusVault}</Item>
              <Item label="Welfare Command Center" span={2}>{pension.welfareAddress}</Item>
              <Item label="Emergency Address" span={2}>{pension.emergencyAddress}</Item>

              <Item label="Time Period">{pension.timePeriod}</Item>
              <Item label="Global Deposit Number">{pension.globalDepositNumber}</Item>
              <Item label="Pension Tax Deposit Number">{pension.globalPensionTaxDepositNumber}</Item>
              <Item label="Tax Collected"><b>{pension.totalTaxCollected}</b></Item>

              <Item label="Total Pension Vaults">{pension.totalPensionVaults}</Item>
              <Item label="Tax Collected By Pensioners" span={3}>{pension.totalTaxCollectedByPensioners}</Item>
            </Descriptions>
          )
        }

        {
          wallet.status != 'connected' && (
            <Title>Please connect your wallet</Title>
          )
        }

      </div>
    </PublicLayout>
  )
}
