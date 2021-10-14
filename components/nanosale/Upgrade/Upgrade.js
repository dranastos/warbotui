import styles from './Upgrade.module.css';
import Aside from '../../Aside/Aside';
import Card from '../../Card/Card';
import Input from '../../Input/Input';
import Button from '../../Button/Button';

const Upgrade = ({balanceValue, approvedValue, inputValue, setInputValue, purchaseAmount, approve, handleDeposit}) => {
	return (
		<div className={styles.Upgrade}>
			<Aside
				title="Buy NMAC to upgrade your Warbot"
				text="Praesent dis id aliquet urna enim facilisis sed. Tincidunt nunc, lectus quisque magna praesent vitae. Urna quisque neque ultrices amet massa urna scelerisque magna. Elit turpis amet, a eleifend scelerisque. Nulla orci, sit posuere habitant mauris id in mauris, facilisis."
			/>
			<Card>
				<Card.Header
					title="Purchase NanoMachines"
					subtitle="Upgrade your Warbots."
					stakedText="BUSD"
					balanceValue={balanceValue}
					approvedValue={approvedValue}
				/>
				<Card.Main>
					<div className={styles.Upgrade__text}>
						<p>Price rises <i>0.15%</i> for every Nanomachine sold</p>
						<p>
							NanoSales are subject to a <i>90 Day vesting period</i>.<br/>
							Every new purchase resets the 90 day vesting period
						</p>
					</div>
					<Input
						label="Enter NanoMachines Amount"
						placeholder="e.g 10000"
						value={inputValue}
						onChange={setInputValue}
					/>
					<div className={styles.Upgrade__text}>
						<Button
							value="Purchase NMAC"
							onClick={handleDeposit}
							disabled
						/>
					</div>
					<div className={styles.Upgrade__text}>
						<p>
							<i>{Number(inputValue) ? !isNaN(inputValue) ? inputValue : 0 : 0} NanoMachines</i> will cost you <i>{purchaseAmount} BUSD</i>.<br/>
							You will be vested for 90 days.
						</p>
					</div>
				</Card.Main>
				<Card.Footer
					callback={approve}
				/>
			</Card>
		</div>
	);
};

export default Upgrade;
