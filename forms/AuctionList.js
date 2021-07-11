import { useEffect, useState,  useCallback } from 'react'
import { Typography, Space, Row, Col, Card, Slider, List, Spin, Collapse, Form, Button, Input, Tag, Statistic, notification } from 'antd'
const { Title, Text } = Typography
import { useWallet } from 'use-wallet'
import useWeb3 from '../hooks/useWeb3'
import useMicroMachineManufacturingPlant from '../hooks/useMicroMachineManufacturingPlant'
import useGlobal from '../hooks/useGlobal'
import useWarbots from '../hooks/useWarbots'
import useNanonfts from '../hooks/useNFT'
import useNanomachines from '../hooks/useNanomachines'

import moment from 'moment'
import PublicLayout from '../layouts/PublicLayout'



const AuctionList = ({ onComplete, address }) => {
  
  const wallet = useWallet()
  const [getVault, sendVaultTx] = useWarbots()
  const [state, actions] = useGlobal(['warbotmanufacturer', 'hasSecurity', 'hasNanonft'])
  const { warbotmanufacturer, web3, connected } = useMicroMachineManufacturingPlant(state.warbotmanufacturer)
  const [ nanonft ] = useNanonfts(state.nanonft) 
  const [ nanomachines ] = useNanomachines(state.nanomachines) 
  const [deposits, setDeposits] = useState([])
  const [vaults, setVaults] = useState({})
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [hasVaults, setHasVaults] = useState(false)
  const [data, setData] = useState({ })
  const [totalAuctions, setTotalAuctions] = useState(0)
   const [userbalance, setUserbalance] = useState(0)
  const [auctions, setAuctions] = useState([])
  const [nfts, setNFTS] = useState([])

  useEffect(() => {
    console.log("STATE", connected)
    if (connected && state.hasNanonft) {
      
	  getInfo()
	  
	  getAuctions()
    }
  }, [connected, state.hasNanonft])

   const approve = async() => {
    setLoading(true)
    
	var _value = "1000000000000000000000000"
	console.log(_value)
    try {

      if ( _value >= 0) {
        const value = web3.utils.toWei(  _value , 'nano').toString()

        console.log("APPROVAL AMOUNT", wallet)

        const tx = await nanomachines.approve(state.nanonft, "999999999999999999999999999999").send({
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

  const getDeposits = async() => {
    
	setLoading(true)
    
    //const deps = await warbotmanufacturer.getUserManufacturingPlants(wallet.account).call()
	//const totalDeps = await warbotmanufacturer.userManufacturingPlantCount(wallet.account).call()
	
	const userwarbots = await warbotmanufacturer.getUsersWarbots(wallet.account).call()
	const totalDeps = userwarbots.length
	console.dir(userwarbots)
	
    
    
	
	setDeposits(userwarbots)

    let vaults = {}
    for (let warbot of userwarbots) {
	   //const rawdata = await warbotmanufacturer.ManufacturingPlants(dep).call()
	   //const rawdata = await warbotmanufacturer.WarbotLevel(dep).call()
       const data = await getVault( warbot )


      vaults[warbot] = {
        
       
        ...data
      }

    }
	
    setVaults(vaults)
    setTotal(totalDeps)
    setHasVaults(true)
    setLoading(false)
  }
  
  const getAuctions = async() => {
    
	setLoading(true)
    const totalAuctions = await nanonft.totalSupply().call()
	var timeNow = new Date().getTime()/1000
    
    setTotalAuctions(totalAuctions)
	var nfts = []
	
    let auctions = []
    for ( let x = 0; x <= totalAuctions; x++ ) {
	  
      
	 // var isAuctionExpired = await nanonft.isAuctionExpired(x).call()
      var biddersBids  = await nanonft.biddersBids( wallet.account, x).call()
	  var yourBid = biddersBids[0]
	  var bidnumber = biddersBids[1]
	  var isAuctionExpired = biddersBids[2]
	  console.log ( "right before " + x  , yourBid , isAuctionExpired)
	  if ( parseInt(yourBid) <= 0 && isAuctionExpired == true ) continue;
	  
	  console.log ( "passed thru " + x  , yourBid , isAuctionExpired)
	  var bidExpiration = await nanonft.bidExpiration(x).call()
	  var highestBidder = await nanonft.highestBidder(x).call()
	  var winnerDeclared = await nanonft.winnerDeclared(x).call()
	  
	  
	  
	  
	  var bidStatus =  await nanonft.bids( x, bidnumber ).call()
	 
	 
	  
	  if ( winnerDeclared == true  &&  bidStatus['_withdrawn']  ||  winnerDeclared == true &&  highestBidder[0] == wallet.account ||  winnerDeclared == true && yourBid == 0) continue;
	  
	  
	  if ( bidExpiration < timeNow ) 
		   { var stat = "EXPIRED"} 
	  else { var stat = "ACTIVE" }
      var winner = "Current Highest Bidder"
	  if ( winnerDeclared == true ) winner =" Winner is "
	  
      auctions.push({
            winner : winner,
			auction : x,
			expiration:  "EXPIRATION: " + moment.unix(bidExpiration).format('MM/DD/YYYY HH:mm') + " UTC TIME",
			expirationUTC:  bidExpiration,
			timeNow:  timeNow,
			buttonText: "Enter Bid for Nano NFT Card # " + x,
			highestBidder: highestBidder[0],
            highestBid:     web3.utils.fromWei(highestBidder[1].toString()).toString(),
			yourBid:  web3.utils.fromWei(yourBid.toString(), 'nano').toString(),
			header: "Auction # " + x,
        });
      
    }
   
    console.log(auctions)
	
	setAuctions(auctions)
    
    setLoading(false)
	
	

	 
	
  }
  
   const getInfo = async() => {
    setLoading(true)
	var userBalance = await nanonft.balanceOf(wallet.account).call()
	console.log( "USER BALLANCE " + userBalance , wallet.account )
	setUserbalance( userBalance )
	setLoading(false)
   }

  const deployNanoNFTS = async(id) => {
    
	setLoading(true)
    console.log("DEPLOY NANO NFTS" +id)
	const cardsperwarbot = await nanonft.cardsperwarbot().call()
	const tx = await nanonft.deployNFTNanoset(id).send({ from: wallet.account, to: state.nanonft })
    if (tx.status) {
      notification.success({
        message: cardsperwarbot  + ' Nano NFT Cards Deployed for Auction',
        description: tx.transactionHash
      })
    }
    setLoading(false)
  }
  
    const declareWinner = async(tokenid) => {
    setLoading(true)
	const tx = await nanonft.DeclareWinner( tokenid ).send({ from: wallet.account, to: state.nanonft })
	setLoading(false)
  }
  
  const withdrawBid = async(tokenid) => {
    setLoading(true)
	const tx = await nanonft.WithdrawBid( tokenid ).send({ from: wallet.account, to: state.nanonft })
	setLoading(false)
  }

 const auctionBid = async(tokenid, value) => {
    setLoading(true)
	const _value = web3.utils.toWei(value.toString()).toString()
	const tx = await nanonft.auctionBid( tokenid, _value ).send({ from: wallet.account, to: state.nanonft })
	setLoading(false)
  }

  

const renderD = ( key, id) =>  (
  
   <Collapse>
    <Collapse.Panel header={auctions.[id].header}>
   <Row gutter={[20, 20]} style={{ marginTop: 20 }}>
   
      
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
            placeholder="Enter Bid on NFT Nano Card"
            enterButton= {auctions.[id].buttonText}
		
            size="large"
            onSearch={value => auctionBid( auctions.[id].auction, value)}
            />
        </Card>
	
      </Col>
      
    </Row>
	</Collapse.Panel>
	</Collapse>
  
)



  return (
   
	
      <div style={{ padding: `20px 0px` }}>
	  <Button size="large" onClick={approve}>Approve</Button>
	   <Title level={4}>You Own {userbalance} Nano NFT Cards.</Title>
        <Title level={4}>Nano NFT Bidding</Title>
        { state.hasNanonft  && auctions.map(renderD) }
		
      </div>
    
  )
  
 

  
}

export default AuctionList
