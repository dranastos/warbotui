import styles from './Manufacturing.module.css';
import Button from '../../Button/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUndo} from '@fortawesome/free-solid-svg-icons';
import Card from '../../Card/Card';
import Output from '../../Output/Output';
import Plant from '../Plant/Plant';
import {useState} from 'react';

const Manufacturing = () => {
	const [visibleElementsCount, setVisibleElementsCount] = useState(3);

	const plants = [
		{
			id: 76,
			staked: 123,
			date: '03-DEC-21',
			lock: 3,
			finished: '15:00 2022-04-23',
			warbots: 3,
			unclaimed: 3,
			produced: 0,
		},
		{
			id: 82,
			staked: 123,
			date: '03-DEC-21',
			lock: 3,
			finished: '15:00 2022-04-23',
			warbots: 3,
			unclaimed: 3,
			produced: 0,
		},
		{
			id: 91,
			staked: 123,
			date: '03-DEC-21',
			lock: 3,
			finished: '15:00 2022-04-23',
			warbots: 3,
			unclaimed: 3,
			produced: 0,
		},
		{
			id: 77,
			staked: 123,
			date: '03-DEC-21',
			lock: 3,
			finished: '15:00 2022-04-23',
			warbots: 3,
			unclaimed: 3,
			produced: 0,
		},
		{
			id: 83,
			staked: 123,
			date: '03-DEC-21',
			lock: 3,
			finished: '15:00 2022-04-23',
			warbots: 3,
			unclaimed: 3,
			produced: 0,
		},
		{
			id: 92,
			staked: 123,
			date: '03-DEC-21',
			lock: 3,
			finished: '15:00 2022-04-23',
			warbots: 3,
			unclaimed: 3,
			produced: 0,
		},
	];

	const plantsList = plants.map((plant, i) => {
		return i < visibleElementsCount && (
			<Card style={{height: 'fit-content'}}>
				<Plant
					img="/img/warbots/plant_image_1.png"
					id={plant.id}
					staked={plant.staked}
					date={plant.date}
					lock={plant.lock}
					finished={plant.finished}
					warbots={plant.warbots}
					unclaimed={plant.unclaimed}
				/>
			</Card>
		);
	});

	return (
		<div className={styles.Manufacturing}>
			<header className={styles.Manufacturing__header}>
				<h2>Closed Warbot Manufacturing Plants <span>{plants.length}</span></h2>
				<Button.Secondary>
					<FontAwesomeIcon icon={faUndo}/>
					Refresh
				</Button.Secondary>
			</header>
			<div className={styles.Manufacturing__plants}>
				{plantsList}
			</div>
			<div className={styles.Manufacturing__button}>
				{
					plants.length > visibleElementsCount &&
					<Button.Secondary
						onClick={() => setVisibleElementsCount(visibleElementsCount + 3)}
					>
						View Active Plants
					</Button.Secondary>
				}
			</div>
		</div>
	);
};

export default Manufacturing;
