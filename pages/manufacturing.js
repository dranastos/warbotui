import PublicLayout from '../layouts/PublicLayout';
import Tabs from '../components/Tabs/Tabs';
import Statistics from '../components/warbots/Statistics/Statistics';
import {useWallet} from 'use-wallet';
import useGlobal from '../hooks/useGlobal';
import {useEffect, useState} from 'react';
import Dashboard from '../components/manufacturing/Dashboard/Dashboard';
import ManufacturingBlock from '../components/warbots/Manufacturing/Manufacturing';
import useMicroMachineManufacturingPlant from '../hooks/useMicroMachineManufacturingPlant';

const Manufacturing = () => {
	const wallet = useWallet();
	const [state, actions] = useGlobal([
		"chain",
		"micromachines",
		"warbotmanufacturer",
		"hasWarbotmanufacturer",
		"warbotmanufacturerInfo",
	]);
	const [activeTab, setActiveTab] = useState(0);
	const [manufacturingperiod, setManufacturingPeriod] = useState(0);
	const [loading, setLoading] = useState(false);
	const [show, setShow] = useState(false);
	const [data, setData] = useState({});
	const {
		warbotmanufacturer,
		web3,
		getField,
		sendTx,
		connected,
		getFields
	} = useMicroMachineManufacturingPlant(state.warbotmanufacturer);
	const [warbotsupply, setWarbotsupply] = useState(0);
	const [plants, setPlants] = useState(0);
	const [warbotproduction, setWarbotproduction] = useState(0);

	const getInfo = async () => {
		setLoading(true);

		const WarBots = await warbotmanufacturer.totalSupply().call();
		const plants = await warbotmanufacturer.ManufacturingPlantCount().call();
		console.log('Plant Count ' + plants);
		const warbotproduction = await warbotmanufacturer.globalwarbotproduction().call();
		const manufacturingPeriod = await warbotmanufacturer.manufacturingPeriod().call();

		const warbotInfo = await getFields();

		setWarbotsupply(WarBots);
		setPlants(plants);
		setWarbotproduction(warbotproduction);
		setManufacturingPeriod(parseInt(manufacturingPeriod) / 60 / 60 / 24);
		setData(warbotInfo);
		actions.setSecurityInfo(warbotInfo);
		setLoading(false);
	};

	useEffect(() => {
		if (state.warbotmanufacturer && connected) {
			getInfo();
		}
	}, [state.hasWarbotmanufacturer, connected]);

	return (
		<PublicLayout>
			<section className="War_dashboard_tabs">
				<div className="container">
					<h1>MicroMachine Warbot Manufacturing Center</h1>
					{(state.hasSecurity && wallet.status === 'connected') && (
						<div>
							<Tabs
								tabs={['Dashboard', 'Closed Plants', 'Statistics']}
								activeTab={activeTab}
								setActiveTab={setActiveTab}
							/>
							{activeTab === 0 && (
								<>
									<Dashboard/>
									<ManufacturingBlock
										isClosed={false}
										type="button"
										callback={() => setActiveTab(1)}
									/>
								</>
							)}
							{activeTab === 1 && (
								<ManufacturingBlock
									type="button"
									callback={() => setActiveTab(0)}
								/>
							)}
							{activeTab === 2 && (
								<Statistics
									extended={false}
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
};

export default Manufacturing;
