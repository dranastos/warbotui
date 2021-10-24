import styles from './Purchased.module.css';
import Card from '../../Card/Card';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUndo, faCog} from '@fortawesome/free-solid-svg-icons';
import Button from '../../Button/Button';

const Purchased = ({getDeposits, lockedValue, lockedTime}) => {
	return (
		<div className={styles.Purchased}>
			<header className={styles.Purchased__header}>
				<h2>NMACs Purchased</h2>
				<Button.Secondary onClick={getDeposits}>
					<FontAwesomeIcon icon={faUndo}/>
					Refresh
				</Button.Secondary>
			</header>
			<div className={styles.Purchased__grid}>
				<Card>
					<Card.Main>
						<div>
							<span>NancMachines Locked</span>
							<b>{lockedValue}</b>
						</div>
						<FontAwesomeIcon icon={faCog}/>
					</Card.Main>
				</Card>
				<Card>
					<Card.Main>
						<div>
							<span>Lock Expiration</span>
							<b>{lockedTime}</b>
						</div>
						<FontAwesomeIcon icon={faCog}/>
					</Card.Main>
				</Card>
			</div>
		</div>
	);
};

export default Purchased;
