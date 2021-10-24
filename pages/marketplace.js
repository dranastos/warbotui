import PublicLayout from '../layouts/PublicLayout';
import Banner from '../components/marketplace/Banner/Banner';
import {useState} from 'react';
import Tabs from '../components/Tabs/Tabs';
import Catalog from '../components/marketplace/Catalog/Catalog';
import Filter from '../components/marketplace/Filter/Filter';
import {faAngleDoubleRight, faArrowsAlt, faFire, faHeart, faShieldAlt} from '@fortawesome/free-solid-svg-icons';
import List from '../components/marketplace/List/List';

const marketplace = () => {
	const [activeTab, setActiveTab] = useState(0);

	const warbotsList = [
		{
			img: '/img/marketplace/marketplace_product_image_1.png',
			name: 'Warbot #3126234',
			priceBNB: 100,
			priceUSD: 335,
			hitpoints: 75,
			armor: 75,
			damage: 75,
			speed: 75,
		},
		{
			img: '/img/marketplace/marketplace_product_image_1.png',
			name: 'Warbot #3126234',
			priceBNB: 100,
			priceUSD: 335,
			hitpoints: 75,
			armor: 75,
			damage: 75,
			speed: 75,
		},
		{
			img: '/img/marketplace/marketplace_product_image_1.png',
			name: 'Warbot #3126234',
			priceBNB: 100,
			priceUSD: 335,
			hitpoints: 75,
			armor: 75,
			damage: 75,
			speed: 75,
		},
		{
			img: '/img/marketplace/marketplace_product_image_1.png',
			name: 'Warbot #3126234',
			priceBNB: 100,
			priceUSD: 335,
			hitpoints: 75,
			armor: 75,
			damage: 75,
			speed: 75,
		},
		{
			img: '/img/marketplace/marketplace_product_image_1.png',
			name: 'Warbot #3126234',
			priceBNB: 100,
			priceUSD: 335,
			hitpoints: 75,
			armor: 75,
			damage: 75,
			speed: 75,
		},
		{
			img: '/img/marketplace/marketplace_product_image_1.png',
			name: 'Warbot #3126234',
			priceBNB: 100,
			priceUSD: 335,
			hitpoints: 75,
			armor: 75,
			damage: 75,
			speed: 75,
		},
	];
	const nfstList = [
		{
			img: '/img/marketplace/marketplace_product_image_2.png',
			name: 'NanoNFT #3126234',
			priceBNB: 100,
			priceUSD: 335,
			hitpoints: '+5',
			armor: '+10',
			speed: '-10',
		},
		{
			img: '/img/marketplace/marketplace_product_image_2.png',
			name: 'NanoNFT #3126234',
			priceBNB: 100,
			priceUSD: 335,
			hitpoints: '+5',
			armor: '+10',
			speed: '-10',
		},
		{
			img: '/img/marketplace/marketplace_product_image_2.png',
			name: 'NanoNFT #3126234',
			priceBNB: 100,
			priceUSD: 335,
			hitpoints: '+5',
			armor: '+10',
			speed: '-10',
		},
		{
			img: '/img/marketplace/marketplace_product_image_2.png',
			name: 'NanoNFT #3126234',
			priceBNB: 100,
			priceUSD: 335,
			hitpoints: '+5',
			armor: '+10',
			speed: '-10',
		},
		{
			img: '/img/marketplace/marketplace_product_image_2.png',
			name: 'NanoNFT #3126234',
			priceBNB: 100,
			priceUSD: 335,
			hitpoints: '+5',
			armor: '+10',
			speed: '-10',
		},
	];
	const helmsList = [
		{
			img: '/img/marketplace/marketplace_product_image_3.png',
			name: 'Helm #3126234',
			priceBNB: 100,
			priceUSD: 335,
			hitpoints: '+5',
			armor: '+10',
			speed: '-10',
		},
		{
			img: '/img/marketplace/marketplace_product_image_3.png',
			name: 'Helm #3126234',
			priceBNB: 100,
			priceUSD: 335,
			hitpoints: '+5',
			armor: '+10',
			speed: '-10',
		},
		{
			img: '/img/marketplace/marketplace_product_image_3.png',
			name: 'Helm #3126234',
			priceBNB: 100,
			priceUSD: 335,
			hitpoints: '+5',
			armor: '+10',
			speed: '-10',
		},
		{
			img: '/img/marketplace/marketplace_product_image_3.png',
			name: 'Helm #3126234',
			priceBNB: 100,
			priceUSD: 335,
			hitpoints: '+5',
			armor: '+10',
			speed: '-10',
		},
	];

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
					{(state.hasSecurity && wallet.status === 'connected') && (
						<>
							<Tabs
								tabs={['Warbots', 'NanoNFTs', 'Warhelms', 'Warhelm Patches']}
								defaultTab={activeTab}
								callback={setActiveTab}
								style={{transform: 'translateY(-20px)'}}
							/>
							{activeTab === 0 && (
								<Catalog>
									<Filter>
										<Filter.Item title="Type">
											<Filter.Checkbox
												label="Tractor"
											/>
											<Filter.Checkbox
												label="Aerial"
											/>
											<Filter.Checkbox
												label="Walker"
											/>
										</Filter.Item>
										<Filter.Item title="Level">
											<Filter.Range
												min={0}
												max={100}
												step={10}
											/>
										</Filter.Item>
										<Filter.Item title="Stats Upgrades">
											<Filter.Range
												label="Hitpoints"
												icon={faHeart}
												color="#71CF80"
												min={0}
												max={100}
												step={10}
											/>
											<Filter.Range
												label="Armor"
												icon={faShieldAlt}
												color="#6ED1DF"
												min={0}
												max={100}
												step={10}
											/>
											<Filter.Range
												label="Damage"
												icon={faFire}
												color="#E06885"
												min={0}
												max={100}
												step={10}
											/>
											<Filter.Range
												label="Speed"
												icon={faAngleDoubleRight}
												color="#EFDF8C"
												min={0}
												max={100}
												step={10}
											/>
											<Filter.Range
												label="Movement"
												icon={faArrowsAlt}
												color="#EE8F59"
												min={0}
												max={100}
												step={10}
											/>
										</Filter.Item>
									</Filter>
									<List
										title="Warbots"
										products={warbotsList}
									/>
								</Catalog>
							)}
							{activeTab === 1 && (
								<Catalog>
									<Filter>
										<Filter.Item title="Skills">
											<Filter.TextField
												placeholder="Search skills"
											/>
										</Filter.Item>
										<Filter.Item title="Weapons">
											<Filter.Checkbox
												label="Nuke"
											/>
											<Filter.Checkbox
												label="Bomb"
											/>
											<Filter.Checkbox
												label="Missile"
											/>
											<Filter.Checkbox
												label="Rockets"
											/>
											<Filter.Checkbox
												label="Cannon"
											/>
											<Filter.Checkbox
												label="Minigun"
											/>
										</Filter.Item>
										<Filter.Item title="Stats Upgrades">
											<Filter.Range
												label="Hitpoints"
												icon={faHeart}
												color="#71CF80"
												min={0}
												max={100}
												step={10}
											/>
											<Filter.Range
												label="Armor"
												icon={faShieldAlt}
												color="#6ED1DF"
												min={0}
												max={100}
												step={10}
											/>
											<Filter.Range
												label="Damage"
												icon={faFire}
												color="#E06885"
												min={0}
												max={100}
												step={10}
											/>
											<Filter.Range
												label="Speed"
												icon={faAngleDoubleRight}
												color="#EFDF8C"
												min={0}
												max={100}
												step={10}
											/>
											<Filter.Range
												label="Movement"
												icon={faArrowsAlt}
												color="#EE8F59"
												min={0}
												max={100}
												step={10}
											/>
										</Filter.Item>
									</Filter>
									<List
										title="NanoNFTs"
										products={nfstList}
									/>
								</Catalog>
							)}
							{activeTab === 2 && (
								<Catalog>
									<Filter>
										<Filter.Item title="Skills">
											<Filter.TextField
												placeholder="Search skills"
											/>
										</Filter.Item>
										<Filter.Item title="Stats Upgrades">
											<Filter.Range
												label="Hitpoints"
												icon={faHeart}
												color="#71CF80"
												min={0}
												max={100}
												step={10}
											/>
											<Filter.Range
												label="Armor"
												icon={faShieldAlt}
												color="#6ED1DF"
												min={0}
												max={100}
												step={10}
											/>
											<Filter.Range
												label="Damage"
												icon={faFire}
												color="#E06885"
												min={0}
												max={100}
												step={10}
											/>
											<Filter.Range
												label="Speed"
												icon={faAngleDoubleRight}
												color="#EFDF8C"
												min={0}
												max={100}
												step={10}
											/>
											<Filter.Range
												label="Movement"
												icon={faArrowsAlt}
												color="#EE8F59"
												min={0}
												max={100}
												step={10}
											/>
										</Filter.Item>
									</Filter>
									<List
										title="Helms"
										products={helmsList}
									/>
								</Catalog>
							)}
							{activeTab === 3 && (
								<Catalog>
									<Filter>
										<Filter.Item title="Skills">
											<Filter.TextField
												placeholder="Search skills"
											/>
										</Filter.Item>
										<Filter.Item title="Stats Upgrades">
											<Filter.Range
												label="Hitpoints"
												icon={faHeart}
												color="#71CF80"
												min={0}
												max={100}
												step={10}
											/>
											<Filter.Range
												label="Armor"
												icon={faShieldAlt}
												color="#6ED1DF"
												min={0}
												max={100}
												step={10}
											/>
											<Filter.Range
												label="Damage"
												icon={faFire}
												color="#E06885"
												min={0}
												max={100}
												step={10}
											/>
											<Filter.Range
												label="Speed"
												icon={faAngleDoubleRight}
												color="#EFDF8C"
												min={0}
												max={100}
												step={10}
											/>
											<Filter.Range
												label="Movement"
												icon={faArrowsAlt}
												color="#EE8F59"
												min={0}
												max={100}
												step={10}
											/>
										</Filter.Item>
									</Filter>
									<List
										title="Helms"
										products={helmsList}
									/>
								</Catalog>
							)}
						</>
					)}
				</div>
			</section>
		</PublicLayout>
	);
};

export default marketplace;
