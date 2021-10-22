import styles from './List.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList, faGripHorizontal} from '@fortawesome/free-solid-svg-icons';
import Tabs from '../../Tabs/Tabs';
import {useState} from 'react';
import Product from '../Product/Product';

const List = ({title, products}) => {
	const [activeTab, setActiveTab] = useState(1);

	const productsList = products.map((product, i) => (
		<Product
			img={product.img}
			name={product.name}
			priceBNB={product.priceBNB}
			priceUSD={product.priceUSD}
			hitpoints={product.hitpoints}
			armor={product.armor}
			damage={product.damage}
			speed={product.speed}
			minimize={activeTab === 0}
			key={i}
		/>
	));

	return (
		<div className={styles.List}>
			<header className={styles.List__header}>
				<h2>{products.length} {title}</h2>
				<div className={styles.List__tabs}>
					<Tabs
						tabs={[
							<FontAwesomeIcon icon={faList}/>,
							<FontAwesomeIcon icon={faGripHorizontal}/>
						]}
						defaultTab={activeTab}
						callback={setActiveTab}
						minimize={true}
					/>
				</div>
			</header>
			<div className={activeTab === 1 ? styles.List__products : styles.List__products_minimize}>
				{productsList}
			</div>
		</div>
	);
};

export default List;
