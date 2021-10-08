import {useEffect, useState} from 'react';
import {Typography, notification} from 'antd';

import {useWallet} from 'use-wallet';
import useWeb3 from '../hooks/useWeb3';
import useMicroMachineManufacturingPlant from '../hooks/useMicroMachineManufacturingPlant';
import useGlobal from '../hooks/useGlobal';
import useWelfare from '../hooks/useWelfare';
import useNanomachines from '../hooks/useNanomachines';
import useNanostaking from '../hooks/useNanostaking';
import useMicrobnblp from '../hooks/useNanobnblp';
import useMasterchef from '../hooks/useMasterchef';
import Nanomachine from '../components/nanomachines/Nanomachine/Nanomachine';

const NanoMachineMicroLPStakingForm2 = ({onComplete, address}) => {
	const wallet = useWallet();
	const [state, actions] = useGlobal(['security', 'hasSecurity', 'welfare', 'hasWelfare']);
	const {security, web3, connected} = useMicroMachineManufacturingPlant(state.security);
	const [welfare] = useWelfare(state.welfare);
	const [nanomachines] = useNanomachines(state.nanomachines);
	const [nanostaking] = useNanostaking(state.nanostaking);
	const [nanobnblp] = useMicrobnblp(state.nanobnblp);
	const [masterchef] = useMasterchef(state.masterchef);
	const [balance, setBalance] = useState(0);
	const [usershare, setUsershare] = useState(0);
	const [stakedbalance, setStakedbalance] = useState(0);
	const [allowance, setAllowance] = useState(0);
	const [timeValue, setTimeValue] = useState(0);
	const [canDeposit, setCanDeposit] = useState(false);
	const [data, setData] = useState({months: 0, amount: null, timelock: 0});
	const [loading, setLoading] = useState(false);
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		if (connected && state.hasSecurity) {

		}
	}, [data]);

	useEffect(() => {
		if (connected && nanomachines && state.hasNanomachines) {
			getBalance();
			getAllowance();
		}
	}, [connected, welfare, state.hasSecurity]);

	const getBalance = async () => {
		const balance = await nanobnblp.balanceOf(wallet.account).call();

		var userShare = await masterchef.pendingSushi('0', wallet.account).call();
		var userInfo = await masterchef.userInfo('0', wallet.account).call();
		var stakedBalance = userInfo['amount'];


		setBalance(balance);
		setUsershare(web3.utils.fromWei(userShare));
		setStakedbalance(stakedBalance);


		setCounter(counter + 1);
	};

	const getAllowance = async () => {
		const balance = await nanobnblp.allowance(wallet.account, state.masterchef).call();
		setAllowance(balance);
		setCounter(counter + 1);
	};

	const approve = async () => {
		setLoading(true);
		console.log('APPROVAL AMOUNT', data.amount);
		try {

			if (parseInt(data.amount) > 0) {
				const value = data.amount.toString();


				const tx = await nanobnblp.approve(state.masterchef, value).send({
					from: wallet.account,
					to: state.nanomachines
				});

				if (tx.status) {
					notification.success({
						message: 'Approve Successful',
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

		setLoading(false);


	};

	const handleDeposit = async () => {
		setLoading(true);

		try {

			const value = data.amount.toString();
			console.log('TRYING TO DEPOSIT ', value);
			console.log('STAKE MICRO/BNB LP', value, parseInt(data.months));

			const tx = await masterchef
				.deposit(0, value)
				.send({from: wallet.account, to: state.masterchef});

			if (tx.status) {
				setData({amount: 0, months: 0});
				notification.success({
					message: 'Deposit Successful',
					description: tx.transactionHash
				});

				actions.addVaultCount();
			}

		} catch (e) {
			notification.error({
				message: 'Deposit Failed',
				description: e.toString()
			});
		}

		setLoading(false);

	};

	const handleWithdrawal = async () => {
		setLoading(true);

		try {

			const value = web3.utils.toWei(data.amount.toString()).toString();

			console.log('WITHDRAW NANOMACHINES', value, parseInt(data.months));

			const tx = await masterchef
				.withdraw('1', value)
				.send({from: wallet.account, to: state.masterchef});

			if (tx.status) {
				setData({amount: 0, months: 0});
				notification.success({
					message: 'Deposit Successful',
					description: tx.transactionHash
				});

				actions.addVaultCount();
			}

		} catch (e) {
			notification.error({
				message: 'Withdrawal Failed',
				description: e.toString()
			});
		}

		setLoading(false);

	};

	const handleNanoWithdrawal = async () => {
		setLoading(true);

		try {

			const value = data.amount;

			console.log('Withdraw NANOMACHINES', value, parseInt(data.months));

			const tx = await masterchef
				.withdraw(0, 0)
				.send({from: wallet.account, to: state.nanostaking});

			if (tx.status) {
				setData({amount: 0, months: 0});
				notification.success({
					message: 'Nanomachine Withdrawal From Nano Pool Successful',
					description: tx.transactionHash
				});

				actions.addVaultCount();
			}

		} catch (e) {
			notification.error({
				message: 'Nanomachine Withdrawal From Nano Pool Failed',
				description: e.toString()
			});
		}

		setLoading(false);

	};

	const handleTimeLock = (months, amount) => {
		setData({...data, months});

	};
	const handleAmount = (e) => {
		console.log('x' + web3.utils.toWei(e.target.value.toString()));
		setData({...data, amount: e.target.value});
	};

	return (
		<Nanomachine
			label="Alpha Facility"
			title="Build from NMAC/BUSD LP"
			subtitle="Stake NMAC/BUSD LP to get NMAC"
			balanceValue={web3.utils.fromWei(balance.toString())}
			approvedValue={web3.utils.fromWei(allowance.toString())}
			stakedValue={web3.utils.fromWei(stakedbalance.toString())}
			stakedText="NMAC/BUSD LP"
			producedText="NMAC"
			inputValue={data.amount}
			setInputValue={handleAmount}
			approve={approve}
			stake={handleDeposit}
			unstake={handleWithdrawal}
			withdraw={handleNanoWithdrawal}
		/>
	);
};


export default NanoMachineMicroLPStakingForm2;
