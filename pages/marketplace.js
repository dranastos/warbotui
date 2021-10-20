import PublicLayout from '../layouts/PublicLayout';
import {useWallet} from 'use-wallet';
import useGlobal from '../hooks/useGlobal';
import Banner from '../components/marketplace/Banner/Banner';
import {useState} from 'react';
import Tabs from '../components/Tabs/Tabs';
import Catalog from '../components/marketplace/Catalog/Catalog';

const marketplace = () => {
	const wallet = useWallet();
	const [state, actions] = useGlobal();
	const [activeTab, setActiveTab] = useState(0);

	return (
		<PublicLayout>
			<section className="War_dashboard_tabs">
				{activeTab === 0 && (
					<Banner
						img="/img/marketplace/marketplace_banner_image_1.png"
						color="#101D32"
					/>
				)}
				{activeTab === 1 && (
					<Banner
						img="/img/marketplace/marketplace_banner_image_2.png"
						color="#2E2D32"
					/>
				)}
				{activeTab === 2 && (
					<Banner
						img="/img/marketplace/marketplace_banner_image_3.png"
						color="#160B04"
					/>
				)}
				{activeTab === 3 && (
					<Banner
						img="/img/marketplace/marketplace_banner_image_3.png"
						color="#1A1504"
					/>
				)}
				<div className="container">
					{/*{(state.hasSecurity && wallet.status === 'connected') && (*/}
						<>
							<Tabs
								tabs={['Warbots', 'NanoNFTs', 'Warhelms', 'Warhelm Patches']}
								defaultTab={activeTab}
								callback={setActiveTab}
								style={{transform: 'translateY(-20px)'}}
							/>
							<Catalog/>
						</>
					{/*)}*/}
				</div>
			</section>
		</PublicLayout>
	);
};

export default marketplace;
