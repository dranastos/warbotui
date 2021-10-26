import styles from './Warbots.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUndo} from '@fortawesome/free-solid-svg-icons';
import Button from '../../Button/Button';
import List from '../../marketplace/List/List';

const Warbots = ({updateOnClick, children}) => {
	const warbotsList = [
		{
			img: '/img/marketplace/marketplace_product_image_1.png',
			name: 'Tierra',
			id: '#3126234',
			hitpoints: 75,
			armor: 75,
			damage: 75,
			speed: 75,
		},
		{
			img: '/img/marketplace/marketplace_product_image_1.png',
			name: 'Tierra',
			id: '#3126234',
			hitpoints: 75,
			armor: 75,
			damage: 75,
			speed: 75,
		},
		{
			img: '/img/marketplace/marketplace_product_image_1.png',
			name: 'Tierra',
			id: '#3126234',
			hitpoints: 75,
			armor: 75,
			damage: 75,
			speed: 75,
		},
		{
			img: '/img/marketplace/marketplace_product_image_1.png',
			name: 'Tierra',
			id: '#3126234',
			hitpoints: 75,
			armor: 75,
			damage: 75,
			speed: 75,
		},
		{
			img: '/img/marketplace/marketplace_product_image_1.png',
			name: 'Tierra',
			id: '#3126234',
			hitpoints: 75,
			armor: 75,
			damage: 75,
			speed: 75,
		},
	];

	return (
		<div className={styles.Warbots}>
			<header className={styles.Warbots__header}>
				<h2>Your Warbots <span>{warbotsList.length}</span></h2>
				<Button.Secondary onClick={updateOnClick}>
					<FontAwesomeIcon icon={faUndo}/>
					Refresh
				</Button.Secondary>
			</header>
			<div>{children}</div>
			{/*<List*/}
			{/*	products={warbotsList}*/}
			{/*	dashboard={true}*/}
			{/*	items={items}*/}
			{/*	deposits={deposits}*/}
			{/*/>*/}
		</div>
	);
};

export default Warbots;
