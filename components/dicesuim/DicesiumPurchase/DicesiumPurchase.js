import styles from './DicesiumPurchase.module.css';
import Output from '../../Output/Output';
import Card from '../../Card/Card';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import {useEffect, useState} from 'react';
import {notification} from 'antd';
import {useWallet} from 'use-wallet';
import useWeb3 from '../../../hooks/useWeb3';

const DicesiumPurchase = ({dicesiumBatteries, state}) => {
	const wallet = useWallet();
	const [dicesium, setDicesium] = useState(0);
	const [amountValue, setAmountValue] = useState();
	const web3 = useWeb3();
	const [maticValue, setMaticValue] = useState();
	const [isApproved, setIsApproved] = useState(false);
	const [allowance, setAllowance] = useState(0);

	const getAllowance = async () => {
		const balance = await dicesiumBatteries.allowance(wallet.account, state.masterchef).call();
		setAllowance(balance);
	};

	const getDicesium = async () => {
		const dicesium = await dicesiumBatteries
			.balanceOf(wallet.account)
			.call();
		setDicesium(web3.utils.fromWei(dicesium));
	};

	useEffect(() => {
		if (wallet.status === 'connected' && dicesiumBatteries && state.hasDicesiumBatteries) {
			getDicesium().then();
			getAllowance().then();
		}
	}, [dicesiumBatteries, state.hasDicesiumBatteries]);

	const approve = async () => {
		if (wallet.status === 'connected' && dicesiumBatteries && state.hasDicesiumBatteries) {
			try {
				if (parseInt(amountValue) > 0) {
					const value = amountValue.toString();

					const tx = await dicesiumBatteries.approve(state.masterchef, web3.utils.toBN(String(value))).send({
						from: wallet.account
					});

					if (tx.status) {
						notification.success({
							message: 'Approve Successful',
							description: tx.transactionHash
						});

						await getAllowance();
						setIsApproved(true);
					}
				}
			} catch (e) {
				notification.error({
					message: 'Deposit Failed',
					description: e.toString()
				});
			}
		}
	};

	const purchase = async () => {
		if (wallet.status === 'connected' && dicesiumBatteries && state.hasDicesiumBatteries) {
			try {
				const value = `${amountValue}`;
				const numValue = parseFloat(value);

				if (numValue > 0) {
					const tx = await dicesiumBatteries.purchaseDicesiumBatteries().send({
						from: wallet.account,
						value: `${web3.utils.toWei(value, 'ether')}`
					});

					console.log(tx)

					if (tx.status) {
						notification.success({
							message: 'Purchase Successful',
							description: tx.transactionHash
						});

						await getAllowance();
					}
				}
			} catch (e) {
				notification.error({
					message: 'Deposit Failed',
					description: e.toString()
				});
			}
		}
	};

	return (
		<div className={styles.DicesiumPurchase}>
			<div className={styles.DicesiumPurchase__info}>
				<img src="/img/dicesium/dicesium-logo.png" alt=""/>
				<h2>Purchase Dicesium Batteries and Win Battles</h2>
				<p>Dicesium batteries are used to pay for the game engine's randomization oracle. Whenever a stat or action needs to be randomized, the oracle needs to be called and 1 or more dicesium batteries will be consumed.  </p>
				<span>Your Dicesium Batteries Balance:</span>
				<Output value={dicesium.toString()}/>
			</div>
			<div className={styles.DicesiumPurchase__form}>
				<Card>
					<Card.Header
						title="Purchase Dicesium Batteries"
						stakedText="Battery"
						balanceValue={dicesium}
						approvedValue={allowance}
					/>
					<Card.Main>
						<span className={styles.DicesiumPurchase__text}></span>
						<Input
							label="Enter Dicesium Batteries amount"
							placeholder="E.G. 10000"
							value={maticValue}
							onInput={(event) => {
								setMaticValue(event.target.value);
								dicesiumBatteries.rate().call().then((r) => {
									setAmountValue(2 * event.target.value / r);
								});
							}}
						/>
						<Button
							style={{marginTop: '56px'}}
							value="Purchase Dicesium Batteries"
							onClick={purchase}
						/>
						<p className={styles.DicesiumPurchase__text}>
							<i>{maticValue || 0} Dicesium Batteries</i> will cost you <i>{amountValue || 0} MATIC.</i>
						</p>
					</Card.Main>
				</Card>
			</div>
		</div>
	);
};

export default DicesiumPurchase;
