import {useEffect, useState, useCallback} from 'react';
import {useWallet} from 'use-wallet';
import moment from 'moment';
import Head from 'next/head';

import {
	Layout, Menu, Breadcrumb, Typography, Space, Spin, Alert,
	Statistic, Row, Col, Card, Slider, Form, Button, Input, Descriptions,
	notification
} from 'antd';

import PublicLayout from '../layouts/PublicLayout';
import WarbotUpgradeForm from '../forms/WarbotUpgradeForm';
import WarbotInventory from '../forms/WarbotInventory';
import UserManufacturingCentersClosed from '../forms/UserManufacturingCentersClosed';
import useGlobal from '../hooks/useGlobal';
import useMicroMachineManufacturingPlant from '../hooks/useMicroMachineManufacturingPlant';
import useNanomachines from '../hooks/useNanomachines';
import Tabs from '../components/Tabs/Tabs';
import Warbots from '../components/warbots/Warbots/Warbots';
import Statistics from '../components/warbots/Statistics/Statistics';


const {Title, Text} = Typography;
const {Item} = Descriptions;


export default function Dashboard() {
	const wallet = useWallet();
	const [address, setAddress] = useState(false);
	const [state, actions] = useGlobal(['chain', 'micromachines', 'warbotmanufacturer', 'hasWarbotmanufacturer', 'warbotmanufacturerInfo']);

	const {
		warbotmanufacturer,
		web3,
		getField,
		sendTx,
		connected,
		getFields
	} = useMicroMachineManufacturingPlant(state.warbotmanufacturer);
	const [show, setShow] = useState(false);
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(false);
	const [nanomachines] = useNanomachines(state.nanomachines);
	const [warbotsupply, setWarbotsupply] = useState(0);
	const [plants, setPlants] = useState(0);
	const [warbotproduction, setWarbotproduction] = useState(0);
	const [manufacturingperiod, setManufacturingPeriod] = useState(0);
	const [sufficientlyApproved, setSufficientlyApproved] = useState(0);
	const [activeTab, setActiveTab] = useState(0);

	useEffect(() => {
		if (state.warbotmanufacturer && connected) {
			getInfo();
		}
	}, [state.hasWarbotmanufacturer, connected]);

	const getInfo = async () => {
		setLoading(true);

		var WarBots = await warbotmanufacturer.totalSupply().call();
		var plants = await warbotmanufacturer.ManufacturingPlantCount().call();
		var warbotproduction = await warbotmanufacturer.globalwarbotproduction().call();
		var manufacturingPeriod = await warbotmanufacturer.manufacturingPeriod().call();


		const warbotInfo = await getFields();

		setWarbotsupply(WarBots);
		setPlants(plants);
		setWarbotproduction(warbotproduction);
		setManufacturingPeriod(manufacturingPeriod);
		setData(warbotInfo);
		actions.setSecurityInfo(warbotInfo);
		setLoading(false);
	};

	return (
		<PublicLayout>
			<section className="War_dashboard_tabs">
				<div className="container">
					<h1>Warbot Management Console</h1>
					{(state.hasSecurity && wallet.status === 'connected') && (
						<div>
							<Tabs
								tabs={['Warbots', 'Upgrading Facility', 'Statistics']}
								defaultTab={0}
								callback={setActiveTab}
							/>
							{activeTab === 0 && (
								<WarbotInventory/>
							)}
							{activeTab === 1 && (
								<>
									<WarbotUpgradeForm/>
									<UserManufacturingCentersClosed/>
								</>
							)}
							{activeTab === 2 && (
								<Statistics
									warbots={warbotsupply}
									plants={plants}
									manufactured={warbotproduction}
									period={manufacturingperiod}
								/>
							)}
						</div>
					)}
				</div>
			</section>
		</PublicLayout>
	);
}
