import PublicLayout from '../layouts/PublicLayout';
import Tabs from '../components/Tabs/Tabs';
import WarbotInventory from '../forms/WarbotInventory';
import WarbotUpgradeForm from '../forms/WarbotUpgradeForm';
import UserManufacturingCentersClosed from '../forms/UserManufacturingCentersClosed';
import Statistics from '../components/warbots/Statistics/Statistics';
import {useWallet} from 'use-wallet';
import useGlobal from '../hooks/useGlobal';
import {useState} from 'react';
import Dashboard from '../components/manufacturing/Dashboard/Dashboard';
import ManufacturingBlock from '../components/warbots/Manufacturing/Manufacturing';

const Manufacturing = () => {
	const wallet = useWallet();
	const [state, actions] = useGlobal([]);
	const [activeTab, setActiveTab] = useState(0);

	return (
		<PublicLayout>
			<section className="War_dashboard_tabs">
				<div className="container">
					<h1>MicroMachine Warbot Manufacturing Center</h1>
					{/*{(state.hasSecurity && wallet.status === 'connected') && (*/}
					<div>
						<Tabs
							tabs={['Dashboard', 'Closed Plants', 'Statistics']}
							defaultTab={0}
							callback={setActiveTab}
						/>
						{activeTab === 0 && (
							<>
								<Dashboard/>
								<ManufacturingBlock/>
							</>
						)}
						{activeTab === 1 && (
							<></>
						)}
						{activeTab === 2 && (
							<></>
						)}
					</div>
					{/*)}*/}
				</div>
			</section>
		</PublicLayout>
	);
};

export default Manufacturing;
