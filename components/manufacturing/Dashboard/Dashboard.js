import styles from './Dashboard.module.css';
import Aside from '../../Aside/Aside';
import Card from '../../Card/Card';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import Range from '../../Range/Range';
import {useEffect, useState} from 'react';
import useMicroMachines from '../../../hooks/useMicroMachines';
import useGlobal from '../../../hooks/useGlobal';
import {useWallet} from 'use-wallet';
import useMicroMachineManufacturingPlant from '../../../hooks/useMicroMachineManufacturingPlant';
import {notification} from 'antd';

const Dashboard = () => {
	const wallet = useWallet();
	const [periods, setPeriods] = useState(1);
	const [balance, setBalance] = useState(0);
	const [counter, setCounter] = useState(0);
	const [allowance, setAllowance] = useState(0);
	const [state, actions] = useGlobal([
		'warbotmanufacturer',
		'hasWarbotmanufacturer',
		'micromachines',
		'hasMicromachines',
	]);
	const [micromachines] = useMicroMachines(state.micromachines);
	const [sufficientlyApproved, setSufficientlyApproved] = useState(0);
	const [insufficientlyApproved, setInsufficientlyApproved] = useState(0);
	const {warbotmanufacturer, web3, connected} = useMicroMachineManufacturingPlant(state.warbotmanufacturer);
	const [data, setData] = useState({months: 0, amount: 0});

	const getBalance = async () => {
		const balance = await micromachines.balanceOf(wallet.account).call();
		setBalance(web3.utils.fromWei(balance, 'nano'));
		setCounter(counter + 1);
	};

	const getAllowance = async () => {
		const balance = await micromachines.allowance(wallet.account, state.warbotmanufacturer).call();
		setAllowance(web3.utils.fromWei(balance, 'nano'));
		setSufficientlyApproved('stake_btn2');
		setInsufficientlyApproved('stake_btn');
		setCounter(counter + 1);
	};

	const approve = async () => {
		try {
			if (data.amount > 0) {
				const value = web3.utils
					.toWei(((data.amount || 0) * 1.0).toString(), 'nano')
					.toString();

				console.log('APPROVAL AMOUNT', value);

				const tx = await micromachines
					.approve(state.warbotmanufacturer, value)
					.send({
						from: wallet.account,
						to: state.warbotmanufacturer,
					});

				if (tx.status) {
					notification.success({
						message: 'Approve Successful',
						description: tx.transactionHash,
					});

					await getAllowance();
				}
			}
		} catch (e) {
			notification.error({
				message: 'Approval Failed',
				description: e.toString(),
			});
		}
	};

	const handleDeposit = async () => {
		setLoading(true);

		try {
			const value = web3.utils
				.toWei(data.amount.toString(), 'nano')
				.toString();

			console.log('STAKE MICROMACHINES ', value, parseInt(data.months));

			const tx = await warbotmanufacturer
				.stakeMicroMachines(value, parseInt(data.months), [0, 0, 0])
				.send({from: wallet.account, to: state.warbotmanufacturer});

			if (tx.status) {
				setData({amount: 0, months: 0});
				notification.success({
					message: 'Deposit Successful',
					description: tx.transactionHash,
				});

				actions.addVaultCount();
			}
		} catch (e) {
			notification.error({
				message: 'Deposit Failed',
				description: e.toString(),
			});
		}

		setLoading(false);
	};

	const notEnough = () => {
	};

	const getTimeDeposit = async () => {
		const weiValue = web3.utils
			.toWei((data.amount || 0).toString(), 'nano')
			.toString();
		//const bonus = await security.timeValueDepositAmount(weiValue, parseInt(data.months)).call()

		console.log('VALUE', weiValue);
	};

	useEffect(() => {
		if (connected && state.hasWarbotmanufacturer) {
			getTimeDeposit();
		}
	}, [data, periods]);

	useEffect(() => {
		if (connected && micromachines && state.hasMicromachines) {
			getBalance();
			getAllowance();
		}
	}, [connected, micromachines, state.hasMicromachines]);

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
						outputValue={`${balance} MMAC`}
					/>
					<Card.Main>
						<div className={styles.Dashboard__label}>
							<Input
								label="Deposit amount"
								placeholder="E.G. 10"
								value={data.amount}
								onInput={(event) => setData({...data, amount: event.target.value})}
							/>
						</div>
						<div className={styles.Dashboard__label}>
							<span>Time lock</span>
							<Range
								min={1}
								max={12}
								step={1}
								rightInputValue={periods}
								setRightInputValue={setPeriods}
								setMaxValue={() => {
								}}
								isTwoThumbs={false}
							/>
							<p><b>{periods} periods</b> ({(periods / 4).toFixed(1)} years)</p>
						</div>
						<Button
							value="Stake MMAC"
							disabled={!(allowance >= Number(data.amount) && Number(data.amount) * Number(periods) <= 50 && Number(data.amount) > 0)}
							onClick={allowance >= Number(data.amount) ? handleDeposit : notEnough}
						/>
						<div className={styles.Dashboard__text}>
							<p>
								Build <i>{periods * Number(data.amount)} Warbots</i> a period by locking your MicroMachines
								for {periods} months for a total of <i>{periods**2 * Number(data.amount)}&nbsp;Warbots</i>.
							</p>
						</div>
					</Card.Main>
					<Card.Footer
						callback={approve}
						disabled={allowance >= Number(data.amount) && Number(data.amount) * Number(periods) <= 50 && Number(data.amount) > 0}
					/>
				</Card>
			</div>
		</div>
	);
};

export default Dashboard;
