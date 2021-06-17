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

import useGlobal from '../hooks/useGlobal'
import useBonus from '../hooks/useBonus'
import useWicCardMinter from '../hooks/useWicCardMinter'
import useWelfare from '../hooks/useWelfare'


const { Title, Text } = Typography
const { Item } = Descriptions

// COMMAND CENTER: 0xe73C89DFA51E82e7895b0E9E9B8E9b1b4A91b2b6
// BONUS: 0xEeCFE0b4c47cb5d61F180d721674a405A86FB53c
// WELFARE ADDRESS: 0xbEDA6Df7a5bCA914915fb80D13c1b6b32dF8F8ab
// SOCIAL SECURITY: 0x5d09f5E94f8f2cAb11DB1A7D1C71cdd80E7c0e69

export default function BonusVault() {
  
  const wallet = useWallet()
  const [address, setAddress] = useState(false)
  const [state, actions] = useGlobal(['chain', 'security', 'hasSecurity', 'welfare', 'securityInfo', 'vaultCount', 'wicCardMinter' , 'hasWicCardMinter'])
  //const { bonus, web3, connected } = useBonus(state.bonus)
  const { wiccardminter, web3, connected } = useWicCardMinter( state.wicCardMinter )
  const [show, setShow] = useState(false)
  const [data, setData] = useState({ })
  const [counter, setCounter] = useState(0)
  const [loading, setLoading] = useState(false)
  const [welfare] = useWelfare(state.welfare)
  const [auctions, setAuctions] = useState([])
  const [totalAuctions, setTotalAuctions] = useState(0)
  
  useEffect(() => {
    console.log("STATE", connected)
    if (connected && state.hasWicCardMinter) {
      
	  getInfo()
	  getAuctions()
    }
  }, [connected, state.hasBonus])

  const getInfo = async() => {
    setLoading(true)
	
    const totalNFTSupply = await wiccardminter.totalSupply().call()
    const bidExpiration = await wiccardminter.bidExpiration("1").call()
     
	
     const buttonText = "Enter Bid for WIC Card # " + totalNFTSupply;
	 setData({ totalNFTSupply, buttonText, bidExpiration })
    setLoading(false)
  }
  
  const approve = async() => {
    setLoading(true)
    
	var _value = "1000000000000000000000000"
	console.log(_value)
    try {

      if ( _value >= 0) {
        const value = web3.utils.toWei(  _value , 'nano').toString()

        console.log("APPROVAL AMOUNT", wallet)

        const tx = await welfare.approve(state.wicCardMinter, value).send({
          from: wallet.account,
          to: state.welfare
        })

        if (tx.status) {
          notification.success({
            message: 'Approve Successful',
            description: tx.transactionHash
          })

          await getAllowance()
        }
      }

    } catch (e) {
      notification.error({
        message: 'Deposit Failed',
        description: e.toString()
      })
    }

    setLoading(false)


  }
  
   const getAuctions = async() => {
    
	setLoading(true)
    const totalAuctions = await wiccardminter.totalSupply().call()
	var timeNow = new Date().getTime()/1000
    
    setTotalAuctions(totalAuctions)
	
    let auctions = []
    for ( let x = 1; x <= totalAuctions; x++ ) {
	  
      var winner = "Current Highest Bidder"
	  var bidExpiration = await wiccardminter.bidExpiration(x).call()
      var highestBidder = await wiccardminter.highestBidder(x).call()
	  var winnerDeclared = await wiccardminter.winnerDeclared(x).call()
	  var biddersBids  = await wiccardminter.biddersBids( wallet.account, x).call()
	  var yourBid = biddersBids[0]
	  var bidnumber = biddersBids[1]
	  
	  var bidStatus =  await wiccardminter.bids( x, bidnumber ).call()
	 
	  
	  if ( winnerDeclared == true  &&  bidStatus['_withdrawn']  ||  winnerDeclared == true &&  highestBidder[0] == wallet.account ||  winnerDeclared == true && yourBid == 0) continue;
	  
	  console.log ( "kkk ->>" + wallet.account + " hi Bidder --> " + highestBidder[0] ) 
	  if ( bidExpiration < timeNow ) 
		   { var stat = "EXPIRED"} 
	  else { var stat = "ACTIVE" }
      
	  if ( winnerDeclared == true ) winner =" Winner is "
	  
	  
      auctions.push({
            winner : winner,
			auction : x,
			expiration:  "EXPIRATION: " + moment.unix(bidExpiration).format('MM/DD/YYYY HH:mm') + " UTC TIME",
			expirationUTC:  bidExpiration,
			timeNow:  timeNow,
			buttonText: "Enter Bid for WIC Card # " + x,
			highestBidder: highestBidder[0],
            highestBid:     web3.utils.fromWei(highestBidder[1].toString(), 'nano').toString(),
			yourBid:  web3.utils.fromWei(yourBid.toString(), 'nano').toString(),
        });
      
    }
   
    console.log(auctions)
	
	setAuctions(auctions)
    
    setLoading(false)
	
	

	 
	
  }
  const declareWinner = async(tokenid) => {
    setLoading(true)
	const tx = await wiccardminter.DeclareWinner( tokenid ).send({ from: wallet.account, to: state.wicCardMinter })
	setLoading(false)
  }
  
  const withdrawBid = async(tokenid) => {
    setLoading(true)
	const tx = await wiccardminter.WithdrawBid( tokenid ).send({ from: wallet.account, to: state.wicCardMinter })
	setLoading(false)
  }

 const auctionBid = async(tokenid, value) => {
    setLoading(true)
	const _value = web3.utils.toWei(value.toString(), 'nano').toString()
	const tx = await wiccardminter.auctionBid( tokenid, _value ).send({ from: wallet.account, to: state.wicCardMinter })
	setLoading(false)
  }
  const renderAuctions = (id, key) => {
    if (vaults[id] == undefined) return null;
	var timeNow = new Date().getTime()/1000
	var expirationTime = vaults[id].timeAtExpirationUnix
	var expiry = vaults[id].timeAtExpirationUnix
	var vaultStatus = vaults[id].vaultStatus
	
	
	if ( timeNow > expiry ) {expiry = "EXPIRED"} else {expiry = vaults[id].timeAtExpiration}
	if ( vaultStatus == "Inactive" ) expiry = "EXPIRED"
	if ( timeNow > expirationTime ) return( <div></div> )
	
	
		
    return (
      <div key={`vault-${id}`}>
        <Collapse>
          <Collapse.Panel header={`${vaults[id].address} - ${vaults[id].depositamount} - ${expiry} `}>
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
                      value={vaults.[id][name]   }
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
  const renderDashboard = useCallback(() => (
    <Row gutter={[20, 20]} style={{ marginTop: 20 }}>
      <Col span={12}>
        <Card>
         
        </Card>
      </Col>
      <Col span={24}>
        
		<Card>
		  
          <Statistic title={data.buttonText} value={data.bidExpiration} />
          <Input.Search
            placeholder="Enter Bid on Welfare Card"
            enterButton= {data.buttonText}
			id= "_bidAmount"
            size="large"
            onSearch={value => auctionBid( data.totalNFTSupply, value)}
            />
        </Card>
		<Space>
            <Button size="large" onClick={approve}>Approve</Button>
            
          </Space>
      </Col>
      
    </Row>
  ), [data])


const renderD = ( key, id) =>  (
  
  
   <Row gutter={[20, 20]} style={{ marginTop: 20 }}>
      <Col span={12}>
        <Card>
          
        </Card>
      </Col>
      <Col span={24}>
        
		<Card>
		  
          <Statistic title={ auctions.[id].buttonText} value={ ( auctions.[id].timeNow < auctions.[id].expirationUTC )? auctions.[id].expiration: "EXPIRED"} />
		 
		   <Button
                  size="large"
                  type="danger"
                  onClick={() => declareWinner( auctions.[id].auction )}>
                  Declare Winner
                </Button>
		  <Statistic title={auctions.[id].winner} value={auctions.[id].highestBidder} />
		  <Statistic title="Current Highest Bid" value={auctions.[id].highestBid} />
		  <Statistic title="Your Current Bid" value={auctions.[id].yourBid} />
		  <Button
                  size="large"
                  type="danger"
                  onClick={() => withdrawBid( auctions.[id].auction )}>
                  Withdraw Bid ( After Winner is Declared )
                </Button>
          <Input.Search
            placeholder="Enter Bid on Welfare Card"
            enterButton= {auctions.[id].buttonText}
		
            size="large"
            onSearch={value => auctionBid( auctions.[id].auction, value)}
            />
        </Card>
	
      </Col>
      
    </Row>
  
)



  return (
    <PublicLayout>
      <div style={{ padding: `20px 0px` }}>
	  <Button size="large" onClick={approve}>Approve</Button>
        <Title level={4}>Welfare Card Bidding</Title>
        { state.hasWicCardMinter  && auctions.map(renderD) }
		
      </div>
    </PublicLayout>
  )
  
  //return (
  //  <PublicLayout>
   //   <div style={{ padding: `20px 0px` }}>
   //     <Title level={2}>Welfare Card Bidding</Title>
   //     { state.hasWicCardMinter && renderAuctions() }

   //   </div>
   // </PublicLayout>
  
}
