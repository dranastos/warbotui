import {useEffect, useState} from 'react';
import {
	Typography,
	Space,
	Row,
	Col,
	Card,
	Statistic,
	Slider,
	Form,
	Spin,
	Button,
	Input,
	notification,
} from 'antd';

const {Title, Text} = Typography;
import {useWallet} from 'use-wallet';
import useWeb3 from '../hooks/useWeb3';
import useMicroMachineManufacturingPlant from '../hooks/useMicroMachineManufacturingPlant';
import useGlobal from '../hooks/useGlobal';
import useWelfare from '../hooks/useWelfare';
import useNanomachines from '../hooks/useNanomachines';
import useNanostaking from '../hooks/useNanostaking';

import useMasterchef from '../hooks/useMasterchef';
import Nanomachine from '../components/nanomachines/Nanomachine/Nanomachine';

const NanoMachineStakingForm = ({onComplete, address}) => {
	const wallet = useWallet();
	const [state, actions] = useGlobal([
		'security',
		'hasSecurity',
		'welfare',
		'hasWelfare',
	]);
	const {security, web3, connected} = useMicroMachineManufacturingPlant(
		state.security
	);
	const [welfare] = useWelfare(state.welfare);
	const [nanomachines] = useNanomachines(state.nanomachines);

	const [nanostaking] = useNanostaking(state.nanostaking);
	const [masterchef] = useMasterchef(state.masterchef);
	const [balance, setBalance] = useState(0);
	const [usershare, setUsershare] = useState(0);
	const [stakedbalance, setStakedbalance] = useState(0);
	const [allowance, setAllowance] = useState(0);
	const [timeValue, setTimeValue] = useState(0);
	const [canDeposit, setCanDeposit] = useState(false);
	const [data, setData] = useState({months: 0, amount: 0, timelock: 0});
	const [loading, setLoading] = useState(false);
	const [counter, setCounter] = useState(0);
	const [inputValue, setInputValue] = useState(null);

	useEffect(() => {
		if (connected && state.hasSecurity) {
			getTimeDeposit();
		}
	}, [data]);

	useEffect(() => {
		if (connected && nanomachines && state.hasNanomachines) {
			getBalance();
			getAllowance();
		}
	}, [connected, welfare, state.hasSecurity]);

	const getBalance = async () => {
		const balance = await nanomachines.balanceOf(wallet.account).call();
		var userShare = await masterchef
			.pendingSushi('2', wallet.account)
			.call();
		var userInfo = await masterchef.userInfo('2', wallet.account).call();
		var stakedBalance = userInfo['amount'];
		console.log('WHAT THE FUCK??? ' + balance);

		setBalance(web3.utils.fromWei(balance));
		setUsershare(web3.utils.fromWei(userShare));
		setStakedbalance(web3.utils.fromWei(stakedBalance));
		setCounter(counter + 1);
	};

	const getAllowance = async () => {
		const balance = await nanomachines
			.allowance(wallet.account, state.masterchef)
			.call();
		setAllowance(web3.utils.fromWei(balance));
		setCounter(counter + 1);
	};

	const getTimeDeposit = async () => {
		const weiValue = web3.utils
			.toWei((data.amount || 0).toString())
			.toString();
		//const bonus = await security.timeValueDepositAmount(weiValue, parseInt(data.months)).call()

		console.log('VALUE', weiValue);
	};

	// blockHash: "0x7ccbdaa8ae5f8eeb4f12e91ee12438222cf9d7c9b4c05ba438ce5b422de595af"
	// blockNumber: 9232781
	// contractAddress: null
	// cumulativeGasUsed: 1657512
	// events: {0: {…}, 1: {…}, 2: {…}, 3: {…}, 4: {…}, OwnershipTransferred: {…}}
	// from: "0x46a9f0c9818f96e99ee2db24e85cd4f2fab827e8"
	// gasUsed: 1561590
	// logsBloom: "0x00000000000000000000000000000000000000000000100000800000000000000000000000000000080000000001000000000000000040000000000000200800010000000000000000008008000000000001000000000000000000000000000000000000020000080000000000000800000000000030000000000010000000400000000000000004000000400000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000001000000000000000020000410000000000000000000000000000000000400000000000000000000010000"
	// status: true
	// to: "0x5d09f5e94f8f2cab11db1a7d1c71cdd80e7c0e69"
	// transactionHash: "0x3c4427004adf5f1a8655da0f24ab8ffca4ffa1e17c9979ab4d03b8768508faf2"
	// transactionIndex: 1
	// type: "0x0"

	const approve = async () => {
		setLoading(true);

		try {
			if (data.amount > 0) {
				const value = web3.utils
					.toWei(data.amount.toString())
					.toString();

				console.log('APPROVAL AMOUNT', value);

				const tx = await nanomachines
					.approve(state.masterchef, value)
					.send({
						from: wallet.account,
						to: state.nanomachines,
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
				message: 'Deposit Failed',
				description: e.toString(),
			});
		}

		setLoading(false);
	};

	const handleDeposit = async () => {
		setLoading(true);

		try {
			const value = web3.utils.toWei(data.amount.toString()).toString();

			console.log('STAKE NANOMACHINES', value, parseInt(data.months));

			const tx = await masterchef
				.deposit(2, value)
				.send({from: wallet.account, to: state.masterchef});

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

	const handleWithdrawal = async () => {
		setLoading(true);

		try {
			const value = web3.utils.toWei(data.amount.toString()).toString();

			console.log('WITHDRAW NANOMACHINES', value, parseInt(data.months));

			const tx = await masterchef
				.withdraw('2', value)
				.send({from: wallet.account, to: state.masterchef});

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
				message: 'Withdrawal Failed',
				description: e.toString(),
			});
		}

		setLoading(false);
	};

	const handleNanoWithdrawal = async () => {
		setLoading(true);

		try {
			const value = web3.utils.toWei(data.amount.toString()).toString();

			console.log('Withdraw NANOMACHINES', value, parseInt(data.months));

			const tx = await masterchef
				.withdraw(2, 0)
				.send({from: wallet.account, to: state.nanostaking});

			if (tx.status) {
				setData({amount: 0, months: 0});
				notification.success({
					message: 'Withdrawal Successful',
					description: tx.transactionHash,
				});

				actions.addVaultCount();
			}
		} catch (e) {
			notification.error({
				message: 'Withdrawal from Nano Staking Failed',
				description: e.toString(),
			});
		}

		setLoading(false);
	};

	const handleTimeLock = (months, amount) => {
		setData({...data, months});
	};
	const handleAmount = (e) => {
		if (e.target.value) {
			setInputValue(e.target.value);
			setData({...data, amount: parseInt(e.target.value)});
		} else {
			setInputValue(null);
			setData({...data, amount: 0});
		}
	};

	return (
		<Nanomachine
			label="Gamma Facility"
			title="Build NMAC from NMAC"
			subtitle="Stake NMAC to get NMAC"
			balanceValue={balance}
			approvedValue={allowance}
			stakedValue={stakedbalance}
			stakedText="NMAC"
			producedText="NMAC"
			inputValue={inputValue}
			setInputValue={handleAmount}
			approve={approve}
			stake={handleDeposit}
			unstake={handleWithdrawal}
			withdraw={handleNanoWithdrawal}
		/>
	);
};

export default NanoMachineStakingForm;
