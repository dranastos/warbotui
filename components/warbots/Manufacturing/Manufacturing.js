import styles from './Manufacturing.module.css';
import Button from '../../Button/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUndo} from '@fortawesome/free-solid-svg-icons';
import Card from '../../Card/Card';
import Output from '../../Output/Output';

const Manufacturing = () => {
	const plants = [
		{
			staked: 123,
			date: '15:00 2021-07-23',
			lock: 3,
			finished: '15:00 2022-04-23',
			warbots: 1107,
			unclaimed: 369,
		},
		{
			staked: 123,
			date: '15:00 2021-07-23',
			lock: 3,
			finished: '15:00 2022-04-23',
			warbots: 1107,
			unclaimed: 369,
		},
		{
			staked: 123,
			date: '15:00 2021-07-23',
			lock: 3,
			finished: '15:00 2022-04-23',
			warbots: 1107,
			unclaimed: 369,
		},
	];

	const plantsList = plants.map((plant, i) => (
		<tr>
			<td>
				<div>{plant.staked}</div>
			</td>
			<td>
				<div>{plant.date}</div>
			</td>
			<td>
				<div>{plant.lock} quarters</div>
			</td>
			<td>
				<div>{plant.finished}</div>
			</td>
			<td>
				<div>{plant.warbots}</div>
			</td>
			<td>
				<div>
					<Output value={plant.unclaimed}/>
					<Button value="Claim Warbots"/>
				</div>
			</td>
		</tr>
	));

	return (
		<div className={styles.Manufacturing}>
			<header className={styles.Manufacturing__header}>
				<h2>Closed Warbot Manufacturing Plants</h2>
				<Button.Secondary>
					<FontAwesomeIcon icon={faUndo}/>
					Refresh
				</Button.Secondary>
			</header>
			<Card>
				<table className={styles.Manufacturing__table}>
					<tr>
						<th>Staked</th>
						<th>Time and date staked</th>
						<th>Time lock</th>
						<th>Finished on</th>
						<th>Warbots<br/>Manufactured</th>
						<th>Unclaimed Warbots</th>
					</tr>
					{plantsList}
				</table>
			</Card>
		</div>
	);
};

export default Manufacturing;
