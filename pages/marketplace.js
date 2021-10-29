import PublicLayout from '../layouts/PublicLayout';
import Banner from '../components/marketplace/Banner/Banner';
import {useEffect, useState} from 'react';
import Tabs from '../components/Tabs/Tabs';
import Catalog from '../components/marketplace/Catalog/Catalog';
import Filter from '../components/marketplace/Filter/Filter';
import {faAngleDoubleRight, faArrowsAlt, faFire, faHeart, faShieldAlt} from '@fortawesome/free-solid-svg-icons';
import List from '../components/marketplace/List/List';
import {useWallet} from 'use-wallet';
import useGlobal from '../hooks/useGlobal';

const marketplace = () => {
	const wallet = useWallet();
	const [state, actions] = useGlobal(['hasSecurity']);
	const [activeTab, setActiveTab] = useState(0);
	const [warbotsFilter, setWarbotsFilter] = useState({
		type: [],
		level: {min: 0, max: 5},
		hitpoints: {min: 0, max: 100},
		armor: {min: 0, max: 100},
		damage: {min: 0, max: 100},
		speed: {min: 0, max: 100},
		movement: {min: 0, max: 100}
	});
	const [nftsFilter, setNftsFilter] = useState({
		name: '',
		weapons: [],
		hitpoints: {min: -10, max: 10},
		armor: {min: -10, max: 10},
		speed: {min: -10, max: 10},
	});
	const [helmsFilter, setHelmsFilter] = useState({
		name: '',
		hitpoints: {min: -10, max: 10},
		armor: {min: -10, max: 10},
		speed: {min: -10, max: 10},
	});

	const [warbotsFilterKey, setWarbotsFilterKey] = useState(0);
	const [nftsFilterKey, setNftsFilterKey] = useState(1);
	const [helmsFilterKey, setHelmsFilterKey] = useState(2);
	const [helms2FilterKey, setHelms2FilterKey] = useState(3);

	const warbotsFiltered = (warbotsList) => {
		return warbotsList.filter((item) => {
			if (
				(warbotsFilter.type.includes(item.type) || !warbotsFilter.type.length) &&
				item.level >= warbotsFilter.level.min &&
				item.level <= warbotsFilter.level.max &&
				item.hitpoints >= warbotsFilter.hitpoints.min &&
				item.hitpoints <= warbotsFilter.hitpoints.max &&
				item.armor >= warbotsFilter.armor.min &&
				item.armor <= warbotsFilter.armor.max &&
				item.damage >= warbotsFilter.damage.min &&
				item.damage <= warbotsFilter.damage.max &&
				item.speed >= warbotsFilter.speed.min &&
				item.speed <= warbotsFilter.speed.max
			) {
				return true;
			}
		});
	};
	const nftsFiltered = (nftsList) => {
		return nftsList.filter((item) => {
			if (
				(nftsFilter.weapons.includes(item.weapons) || !nftsFilter.weapons.length) &&
				(item.name.toLowerCase().indexOf(nftsFilter.name.toLowerCase()) !== -1) &&
				Number(item.hitpoints) >= nftsFilter.hitpoints.min &&
				Number(item.hitpoints) <= nftsFilter.hitpoints.max &&
				Number(item.armor) >= nftsFilter.armor.min &&
				Number(item.armor) <= nftsFilter.armor.max &&
				Number(item.speed) >= nftsFilter.speed.min &&
				Number(item.speed) <= nftsFilter.speed.max
			) {
				return true;
			}
		});
	};
	const helmsFiltered = (helmsList) => {
		return helmsList.filter((item) => {
			if (
				(item.name.toLowerCase().indexOf(helmsFilter.name.toLowerCase()) !== -1) &&
				Number(item.hitpoints) >= helmsFilter.hitpoints.min &&
				Number(item.hitpoints) <= helmsFilter.hitpoints.max &&
				Number(item.armor) >= helmsFilter.armor.min &&
				Number(item.armor) <= helmsFilter.armor.max &&
				Number(item.speed) >= helmsFilter.speed.min &&
				Number(item.speed) <= helmsFilter.speed.max
			) {
				return true;
			}
		});
	};

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
			level: 5,
			type: 'tractor'
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
			level: 5,
			type: 'tractor'
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
			level: 1,
			type: 'walker'
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
			level: 2,
			type: 'walker'
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
			level: 3,
			type: 'aerial'
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
			level: 5,
			type: 'aerial'
		},
	];
	const nftsList = [
		{
			img: '/img/marketplace/marketplace_product_image_2.png',
			name: 'NanoNFT #3126234',
			priceBNB: 100,
			priceUSD: 335,
			hitpoints: '+5',
			armor: '+10',
			speed: '-10',
			weapons: 'bomb'
		},
		{
			img: '/img/marketplace/marketplace_product_image_2.png',
			name: 'NanoNFT #3126234',
			priceBNB: 100,
			priceUSD: 335,
			hitpoints: '+5',
			armor: '+10',
			speed: '-10',
			weapons: 'bomb'
		},
		{
			img: '/img/marketplace/marketplace_product_image_2.png',
			name: 'NanoNFT #3126234',
			priceBNB: 100,
			priceUSD: 335,
			hitpoints: '+5',
			armor: '+10',
			speed: '-10',
			weapons: 'nuke'
		},
		{
			img: '/img/marketplace/marketplace_product_image_2.png',
			name: 'NanoNFT #3126234',
			priceBNB: 100,
			priceUSD: 335,
			hitpoints: '+5',
			armor: '+10',
			speed: '-10',
			weapons: 'nuke'
		},
		{
			img: '/img/marketplace/marketplace_product_image_2.png',
			name: 'NanoNFT #3126234',
			priceBNB: 100,
			priceUSD: 335,
			hitpoints: '+5',
			armor: '+10',
			speed: '-10',
			weapons: 'missile'
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

	const resetFilters = () => {
		setWarbotsFilter({
			type: [],
			level: {min: 0, max: 5},
			hitpoints: {min: 0, max: 100},
			armor: {min: 0, max: 100},
			damage: {min: 0, max: 100},
			speed: {min: 0, max: 100},
			movement: {min: 0, max: 100}
		});
		setNftsFilter({
			name: '',
			weapons: [],
			hitpoints: {min: -10, max: 10},
			armor: {min: -10, max: 10},
			speed: {min: -10, max: 10},
		});
		setHelmsFilter({
			name: '',
			hitpoints: {min: -10, max: 10},
			armor: {min: -10, max: 10},
			speed: {min: -10, max: 10},
		});

		setWarbotsFilterKey(Math.random());
		setNftsFilterKey(Math.random());
		setHelmsFilterKey(Math.random());
		setHelms2FilterKey(Math.random());
	};

	useEffect(resetFilters, [activeTab]);

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
									<Filter resetFilters={resetFilters} key={warbotsFilterKey}>
										<Filter.Item title="Type">
											<Filter.Checkbox
												label="Tractor"
												filter={warbotsFilter}
												setFilter={setWarbotsFilter}
												param="type"
											/>
											<Filter.Checkbox
												label="Aerial"
												filter={warbotsFilter}
												setFilter={setWarbotsFilter}
												param="type"
											/>
											<Filter.Checkbox
												label="Walker"
												filter={warbotsFilter}
												setFilter={setWarbotsFilter}
												param="type"
											/>
										</Filter.Item>
										<Filter.Item title="Level">
											<Filter.Range
												min={0}
												max={5}
												step={1}
												filter={warbotsFilter}
												setFilter={setWarbotsFilter}
												param="level"
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
												filter={warbotsFilter}
												setFilter={setWarbotsFilter}
												param="hitpoints"
											/>
											<Filter.Range
												label="Armor"
												icon={faShieldAlt}
												color="#6ED1DF"
												min={0}
												max={100}
												step={10}
												filter={warbotsFilter}
												setFilter={setWarbotsFilter}
												param="armor"
											/>
											<Filter.Range
												label="Damage"
												icon={faFire}
												color="#E06885"
												min={0}
												max={100}
												step={10}
												filter={warbotsFilter}
												setFilter={setWarbotsFilter}
												param="damage"
											/>
											<Filter.Range
												label="Speed"
												icon={faAngleDoubleRight}
												color="#EFDF8C"
												min={0}
												max={100}
												step={10}
												filter={warbotsFilter}
												setFilter={setWarbotsFilter}
												param="speed"
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
										products={warbotsFiltered(warbotsList)}
									/>
								</Catalog>
							)}
							{activeTab === 1 && (
								<Catalog>
									<Filter resetFilters={resetFilters} key={nftsFilterKey}>
										<Filter.Item title="Skills">
											<Filter.TextField
												placeholder="Search skills"
												filter={nftsFilter}
												setFilter={setNftsFilter}
												param="name"
											/>
										</Filter.Item>
										<Filter.Item title="Weapons">
											<Filter.Checkbox
												label="Nuke"
												filter={nftsFilter}
												setFilter={setNftsFilter}
												param="weapons"
											/>
											<Filter.Checkbox
												label="Bomb"
												filter={nftsFilter}
												setFilter={setNftsFilter}
												param="weapons"
											/>
											<Filter.Checkbox
												label="Missile"
												filter={nftsFilter}
												setFilter={setNftsFilter}
												param="weapons"
											/>
											<Filter.Checkbox
												label="Rockets"
												filter={nftsFilter}
												setFilter={setNftsFilter}
												param="weapons"
											/>
											<Filter.Checkbox
												label="Cannon"
												filter={nftsFilter}
												setFilter={setNftsFilter}
												param="weapons"
											/>
											<Filter.Checkbox
												label="Minigun"
												filter={nftsFilter}
												setFilter={setNftsFilter}
												param="weapons"
											/>
										</Filter.Item>
										<Filter.Item title="Stats Upgrades">
											<Filter.Range
												label="Hitpoints"
												icon={faHeart}
												color="#71CF80"
												min={-10}
												max={10}
												step={1}
												filter={nftsFilter}
												setFilter={setNftsFilter}
												param="hitpoints"
											/>
											<Filter.Range
												label="Armor"
												icon={faShieldAlt}
												color="#6ED1DF"
												min={-10}
												max={10}
												step={1}
												filter={nftsFilter}
												setFilter={setNftsFilter}
												param="armor"
											/>
											<Filter.Range
												label="Damage"
												icon={faFire}
												color="#E06885"
												min={-10}
												max={10}
												step={1}
											/>
											<Filter.Range
												label="Speed"
												icon={faAngleDoubleRight}
												color="#EFDF8C"
												min={-10}
												max={10}
												step={1}
												filter={nftsFilter}
												setFilter={setNftsFilter}
												param="speed"
											/>
											<Filter.Range
												label="Movement"
												icon={faArrowsAlt}
												color="#EE8F59"
												min={-10}
												max={10}
												step={1}
											/>
										</Filter.Item>
									</Filter>
									<List
										title="NanoNFTs"
										products={nftsFiltered(nftsList)}
									/>
								</Catalog>
							)}
							{activeTab === 2 && (
								<Catalog>
									<Filter resetFilters={resetFilters} key={helmsFilterKey}>
										<Filter.Item title="Skills">
											<Filter.TextField
												placeholder="Search skills"
												filter={helmsFilter}
												setFilter={setHelmsFilter}
												param="name"
											/>
										</Filter.Item>
										<Filter.Item title="Stats Upgrades">
											<Filter.Range
												label="Hitpoints"
												icon={faHeart}
												color="#71CF80"
												min={-10}
												max={10}
												step={1}
												filter={helmsFilter}
												setFilter={setHelmsFilter}
												param="hitpoints"
											/>
											<Filter.Range
												label="Armor"
												icon={faShieldAlt}
												color="#6ED1DF"
												min={-10}
												max={10}
												step={1}
												filter={helmsFilter}
												setFilter={setHelmsFilter}
												param="armor"
											/>
											<Filter.Range
												label="Damage"
												icon={faFire}
												color="#E06885"
												min={-10}
												max={10}
												step={1}
											/>
											<Filter.Range
												label="Speed"
												icon={faAngleDoubleRight}
												color="#EFDF8C"
												min={-10}
												max={10}
												step={1}
												filter={helmsFilter}
												setFilter={setHelmsFilter}
												param="speed"
											/>
											<Filter.Range
												label="Movement"
												icon={faArrowsAlt}
												color="#EE8F59"
												min={-10}
												max={10}
												step={1}
											/>
										</Filter.Item>
									</Filter>
									<List
										title="Helms"
										products={helmsFiltered(helmsList)}
									/>
								</Catalog>
							)}
							{activeTab === 3 && (
								<Catalog>
									<Filter resetFilters={resetFilters} key={helms2FilterKey}>
										<Filter.Item title="Skills">
											<Filter.TextField
												placeholder="Search skills"
												filter={helmsFilter}
												setFilter={setHelmsFilter}
												param="name"
											/>
										</Filter.Item>
										<Filter.Item title="Stats Upgrades">
											<Filter.Range
												label="Hitpoints"
												icon={faHeart}
												color="#71CF80"
												min={-10}
												max={10}
												step={1}
												filter={helmsFilter}
												setFilter={setHelmsFilter}
												param="hitpoints"
											/>
											<Filter.Range
												label="Armor"
												icon={faShieldAlt}
												color="#6ED1DF"
												min={-10}
												max={10}
												step={1}
												filter={helmsFilter}
												setFilter={setHelmsFilter}
												param="armor"
											/>
											<Filter.Range
												label="Damage"
												icon={faFire}
												color="#E06885"
												min={-10}
												max={10}
												step={1}
											/>
											<Filter.Range
												label="Speed"
												icon={faAngleDoubleRight}
												color="#EFDF8C"
												min={-10}
												max={10}
												step={1}
												filter={helmsFilter}
												setFilter={setHelmsFilter}
												param="speed"
											/>
											<Filter.Range
												label="Movement"
												icon={faArrowsAlt}
												color="#EE8F59"
												min={-10}
												max={10}
												step={1}
											/>
										</Filter.Item>
									</Filter>
									<List
										title="Helms"
										products={helmsFiltered(helmsList)}
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
