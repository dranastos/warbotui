import styles from './Upgrade.module.css';

import Aside from '../../Aside/Aside';
import Card from '../../Card/Card';
import Input from '../../Input/Input';
import Button from '../../Button/Button';

const Upgrade = () => {
	return (
		<div className={styles.Upgrade}>
			<Aside
				title="Warbot Hull Upgrading Facility"
				text="Praesent dis id aliquet urna enim facilisis sed. Tincidunt nunc, lectus quisque magna praesent vitae. Urna quisque neque ultrices amet massa urna scelerisque magna. Elit turpis amet, a eleifend scelerisque. Nulla orci, sit posuere habitant mauris id in mauris, facilisis."
			/>
			<Card>
				<Card.Header
					title="Warbot Reassembly"
					subtitle="Upgrade your Warbot’s hull"
					stakedText="NMAC"
					balanceValue="361.00"
					approvedValue="0.00"
				/>
				<Card.Main>
					<div className={styles.Upgrade__label}>
						<span>Warbot doesn’t exist </span>
						<Input
							label="* Warbot 1 (Being upgraded - stats transferred)"
							placeholder="E.G. 10000"
						/>
					</div>
					<div className={styles.Upgrade__label}>
						<span>Warbot doesn’t exist </span>
						<Input
							label="* Warbot 1 (Being upgraded - stats transferred)"
							placeholder="0"
						/>
					</div>
					<Button
						value="Upgrade Warbots"
						disabled={true}
					/>
					<div className={styles.Upgrade__text}>
						<p>
							Upgrade <i>Warbot * 0 Level 0 Warbot</i> to a <i>Level 1 Warbot</i> by trading an <i>additional Level 0 Warbot</i> along with <i>0 NMAC</i>.
						</p>
					</div>
				</Card.Main>
				<Card.Footer/>
			</Card>
		</div>
	);
};

export default Upgrade;
