import styles from './List.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList, faGripHorizontal} from '@fortawesome/free-solid-svg-icons';
import Tabs from '../../Tabs/Tabs';
import {useState} from 'react';
import Product from '../Product/Product';

const List = () => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<div className={styles.List}>
			<header className={styles.List__header}>
				<h2>18 Warbots</h2>
				<Tabs
					tabs={[
						<FontAwesomeIcon icon={faList}/>,
						<FontAwesomeIcon icon={faGripHorizontal}/>
					]}
					defaultTab={activeTab}
					callback={setActiveTab}
					minimize={true}
				/>
			</header>
			<div className={styles.List__products}>
				<Product
					img="/img/marketplace/marketplace_product_image_1.png"
					name="Warbot #3126234"
					priceBNB={100}
					priceUSD={335}
					hitpoints={75}
					armor={75}
					damage={75}
					speed={75}
				/>
				<Product
					img="/img/marketplace/marketplace_product_image_1.png"
					name="Warbot #3126234"
					priceBNB={100}
					priceUSD={335}
					hitpoints={75}
					armor={75}
					damage={75}
					speed={75}
				/>
				<Product
					img="/img/marketplace/marketplace_product_image_1.png"
					name="Warbot #3126234"
					priceBNB={100}
					priceUSD={335}
					hitpoints={75}
					armor={75}
					damage={75}
					speed={75}
				/>
				<Product
					img="/img/marketplace/marketplace_product_image_1.png"
					name="Warbot #3126234"
					priceBNB={100}
					priceUSD={335}
					hitpoints={75}
					armor={75}
					damage={75}
					speed={75}
				/>
			</div>
		</div>
	);
};

export default List;
