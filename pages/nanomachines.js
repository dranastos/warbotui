import {useEffect, useState, useCallback} from 'react';
import {useWallet} from 'use-wallet';
import moment from 'moment';
import Head from 'next/head';
//import Image from 'next/image'
//import profilePic from '../images/badguy1.jpeg'

import {
	Layout,
	Menu,
	Breadcrumb,
	Typography,
	Space,
	Spin,
	Alert,
	Statistic,
	Row,
	Col,
	Slider,
	Form,
	Button,
	Input,
	Descriptions,
	notification,
} from 'antd';

import PublicLayout from '../layouts/PublicLayout';
import NanoMachineStakingForm from '../forms/NanoMachineStakingForm';

import NanoMachinesMicroLPStakingForm from '../forms/NanoMachinesMicroLPStakingForm';
import NanoMachinesMicroLPStakingForm2 from '../forms/NanoMachinesMicroLPStakingForm2';
import useGlobal from '../hooks/useGlobal';
import useMicroMachineManufacturingPlant from '../hooks/useMicroMachineManufacturingPlant';
//import useWelfare from '../hooks/useWelfare'
//import useWicCardMinter from '../hooks/useWicCardMinter'
import NanoMachinesNanoLPStakingForm from '../forms/NanoMachinesNanoLPStakingForm';

import useNanomachines from '../hooks/useNanomachines';
import useMasterchef from '../hooks/useMasterchef';
import Tabs from '../components/Tabs/Tabs';
import Card from '../components/Card/Card';
import Facilities from '../components/nanomachines/Facilities/Facilities';
import Nanomachines from '../components/nanomachines/Nanomachines/Nanomachines';
import Statistics from '../components/nanomachines/Statistics/Statistics';


const {Title, Text} = Typography;
const {Item} = Descriptions;

// import SettleForm from '../forms/SettleForm'
// import PenaltyAdjustForm from '../forms/PenaltyAdjustForm'
// import PullTaxForm from '../forms/PullTaxForm'

// COMMAND CENTER: 0xe73C89DFA51E82e7895b0E9E9B8E9b1b4A91b2b6
// BONUS: 0xEeCFE0b4c47cb5d61F180d721674a405A86FB53c
// WELFARE ADDRESS: 0xbEDA6Df7a5bCA914915fb80D13c1b6b32dF8F8ab
// SOCIAL SECURITY: 0x5d09f5E94f8f2cAb11DB1A7D1C71cdd80E7c0e69

export default function Dashboard() {

	const wallet = useWallet();
	const [address, setAddress] = useState(false);
	const [state, actions] = useGlobal(['chain', 'nanomachines', 'masterchef']);
	const {security, web3, getField, sendTx, connected, getFields} = useMicroMachineManufacturingPlant(state.security);
	const [show, setShow] = useState(false);
	const [pension, setPension] = useState({});
	const [masterchef] = useMasterchef(state.masterchef);
	//const [counter, setCounter] = useState(0)
	const [loading, setLoading] = useState(false);
	//const [welfare] = useWelfare(state.welfare)
	const [nanomachines] = useNanomachines(state.nanomachines);
	//const { wiccardminter, wicCardweb3, wicCardconnected , sendWicCardTx} = useWicCardMinter( state.wicCardMinter )
	const [toggleFacility, setToggleFacility] = useState(0);

	const [nanomachinesupply, setNanomachinesupply] = useState(0);
	const [nanoproduction, setNanoproduction] = useState(0);
	const [dailyproduction, setDailyproduction] = useState(0);

	useEffect(() => {
		if (state.hasSecurity && connected) {
			getInfo();
		}
	}, [state.hasSecurity, state.vaultCount, connected]);

	const getInfo = async () => {
		setLoading(true);

		var nanomachinesupply = await nanomachines.totalSupply().call();
		var nanoproduction = await masterchef.sushiPerBlock().call();
		var dailyproduction = nanoproduction * 30 * 60 * 24;
		//var nanomachines = await security.nanomachines()

		console.log('Nanomachines in Existence' + nanoproduction);


		setNanomachinesupply(nanomachinesupply);
		setNanoproduction(nanoproduction);
		setDailyproduction(dailyproduction);
		const securityInfo = await getFields();
		setPension(securityInfo);
		actions.setSecurityInfo(securityInfo);
		setLoading(false);
	};

	const renderStats = useCallback(() => (
		<Spin spinning={loading}>
			<Card title="Nanomachine Production Facilty" extra={<Button type="primary" onClick={getInfo}>Refresh</Button>}>
				<Row gutter={[20, 20]}>
					<Col span={8}>
						<Statistic title="Nanomachines in Existence" value={web3.utils.fromWei(nanomachinesupply.toString())}/>
					</Col>
					<Col span={8}>
						<Statistic title="Nanomachines Manufactured per Block"
						           value={web3.utils.fromWei(nanoproduction.toString())}/>
					</Col>
					<Col span={8}>
						<Statistic title="Nanomachines Manufactured Per Day"
						           value={web3.utils.fromWei(dailyproduction.toString())}/>
					</Col>
				</Row>
			</Card>
		</Spin>
	), [pension, loading]);

	return (
		<PublicLayout>
			<section className="War_dashboard_tabs Cross_Chain_Bridge">
				<div className="container">
					<h1>NanoMachine (NMAC) Production Facility</h1>
					{/*{(state.hasSecurity && wallet.status === 'connected') && (*/}
					{/*		<>*/}
					<Tabs
						tabs={['Production Facilities', 'Statistics']}
						defaultTab={toggleFacility}
						callback={setToggleFacility}
					/>
					{toggleFacility === 0 && (
						<>
							<Facilities/>
							<Nanomachines/>
						</>
					)}
					{toggleFacility === 1 && (
						<>
							<Statistics/>
						</>
					)}
					{/*	</>*/}
					{/*)}*/}
				</div>
			</section>
		</PublicLayout>
	);
}
