import styles from './Manufacturing.module.css';
import Button from '../../Button/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUndo} from '@fortawesome/free-solid-svg-icons';
import Card from '../../Card/Card';
import Plant from '../Plant/Plant';
import {useEffect, useState} from 'react';
import Select from '../../Select/Select';
import Link from 'next/link';

const Manufacturing = ({callback, link, type = 'link', isClosed = true}) => {
	const [plants, setPlants] = useState([
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
			staked: 1,
			date: '03-DEC-21',
			lock: 3,
			finished: '15:00 2022-04-23',
			warbots: 3,
			unclaimed: 3,
			produced: 0,
		},
		{
			id: 92,
			staked: 1,
			date: '03-DEC-21',
			lock: 3,
			finished: '15:00 2022-04-23',
			warbots: 3,
			unclaimed: 3,
			produced: 0,
		},
	]);

	const plantsList = plants.map((plant, i) => {
		return (
			<Card style={{height: 'fit-content'}} key={i}>
				<Plant
					img="/img/warbots/plant_image_1.png"
					id={plant.id}
					staked={plant.staked}
					date={plant.date}
					lock={plant.lock}
					finished={plant.finished}
					warbots={plant.warbots}
					unclaimed={plant.unclaimed}
					produced={plant.produced}
				/>
			</Card>
		);
	});

	const [key, setKey] = useState(0);

	const options = [
		{text: 'Lowest Plant #', key: 'id'},
		{text: 'MMAC Staked', key: 'staked'},
		{text: 'Warbots produced', key: 'produced'},
	];

	useEffect(() => {
		setKey(Math.random());
		setPlants(plants.sort((a, b) => {
			if (a[options[0].key] < b[options[0].key]) {
				return -1;
			} else if (a[options[0].key] > b[options[0].key]) {
				return 1;
			}
			return 0;
		}));
	}, []);

	return (
		<div className={styles.Manufacturing}>
			<header className={styles.Manufacturing__header}>
				<h2 className={isClosed ? styles.Manufacturing__title_closed : styles.Manufacturing__title}>
					{isClosed && 'Closed'} Warbot Manufacturing Plants <span>{plants.length}</span>
				</h2>
				<div className={styles.Manufacturing__buttons}>
					<Select
						placeholder="Option"
						options={options}
						setSelectData={(e) => {
							options.findIndex((element, index, array) => {
								if (element.text === e) {
									setKey(Math.random());
									setPlants(plants.sort((a, b) => {
										if (a[array[index].key] < b[array[index].key]) {
											return -1;
										} else if (a[array[index].key] > b[array[index].key]) {
											return 1;
										}
										return 0;
									}));
								}
							});
						}}
						selectData={'Lowest Plant #'}
						alternate={true}
					/>
					<Button.Secondary>
						<FontAwesomeIcon icon={faUndo}/>
						Refresh
					</Button.Secondary>
				</div>
			</header>
			<div className={styles.Manufacturing__plants} key={key}>
				{plantsList}
			</div>
			<div className={styles.Manufacturing__button}>
				{
					type === 'link' ? (
						<Link href={link}>
							<Button.Secondary style={{margin: 'auto'}}>
								View {isClosed ? 'Active' : 'Closed'} Plants
							</Button.Secondary>
						</Link>
					) : (
						<Button.Secondary style={{margin: 'auto'}} onClick={callback}>
							View {isClosed ? 'Active' : 'Closed'} Plants
						</Button.Secondary>
					)
				}
			</div>
		</div>
	);
};

export default Manufacturing;
