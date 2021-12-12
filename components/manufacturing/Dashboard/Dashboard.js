import styles from './Dashboard.module.css';
import Aside from '../../Aside/Aside';
import Card from '../../Card/Card';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import Range from '../../Range/Range';
import {useState} from 'react';

const Dashboard = () => {
	const [periods, setPeriods] = useState(1);

	return (
		<div className={styles.Dashboard}>
			<div className={styles.Dashboard__aside}>
				<Aside
					title="Build a Warbot"
					text="Manufacture warbots by staking MMAC. The length of time you stake your MMAC for will dictate how many Warbots you manufacture. For every period you stake your MMAC, you manufacture 1 Warbot per period. A period is 90 days. Ex. Stake your MMAC for 1 period and you earn 1 warbot in 90 days Stake your MMAC for 4 periods and you earn 4 warbots every 90 days for 4 periods. Stake your MMAC for 12 periods and you earn 12 warbots every 90 days for 12 periods. At the end of the staking period, your MMAC will be returned to you."
				/>
			</div>
			<div>
				<Card>
					<Card.Header
						title="Stake your MMAC"
						subtitle="1 MMAC = 1 Warbot every 90 days"
						outputValue="3 MMAC"
					/>
					<Card.Main>
						<div className={styles.Dashboard__label}>
							<Input
								label="Deposit amount"
								placeholder="E.G. 10"
							/>
						</div>
						<div className={styles.Dashboard__label}>
							<span>Time lock</span>
							<Range
								min={1}
								max={10}
								step={1}
								rightInputValue={periods}
								setRightInputValue={setPeriods}
								setMaxValue={() => {}}
								isTwoThumbs={false}
							/>
							<p><b>{periods} periods</b> ({((periods - 1) / (3 * 0.8)).toFixed(1)} years)</p>
						</div>
						<Button
							value="Stake MMAC"
							disabled={true}
						/>
						<div className={styles.Dashboard__text}>
							<p>
								Build <i>369 Warbots</i> a period by locking your MicroMachines for 3 months for a total of <i>1107
								Warbots</i>.
							</p>
						</div>
					</Card.Main>
					<Card.Footer/>
				</Card>
			</div>
		</div>
	);
};

export default Dashboard;
