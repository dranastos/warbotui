import {useEffect, useState} from 'react';
import {Typography, Space, Row, Col, Card, Statistic, Slider, Form, Spin, Button, Input, notification} from 'antd';

const {Title, Text} = Typography;
import {useWallet} from 'use-wallet';
import useWeb3 from '../hooks/useWeb3';
import useGlobal from '../hooks/useGlobal';
import useToken from '../hooks/useToken';
import useNanosales from '../hooks/useNanosales';
import Upgrade from '../components/nanosale/Upgrade/Upgrade';


const NanoSalesForm = ({onComplete, address}) => {
	const wallet = useWallet();
	const [state, actions] = useGlobal(['busd', 'hasBusd', 'nanosales', 'hasNanosales']);
	const [busd, web3, connected] = useToken(state.busd);
	const [balance, setBalance] = useState(0);
	const [allowance, setAllowance] = useState(0);
	const [data, setData] = useState({amount: ''});
	const [loading, setLoading] = useState(false);
	const [nanosales] = useNanosales(state.nanosales);
	const [purchaseamount, setPurchaseamount] = useState(0);
	const [currentprice, setCurrentprice] = useState(0);

	useEffect(() => {
		if (connected && busd && state.hasBusd) {

			getBalance();
			getAllowance();
		}
	}, [connected, busd, state.hasBusd, data]);

	const getBalance = async () => {

		const balance = await busd.balanceOf(wallet.account).call();
		const currentprice = await nanosales.calculatePrice('1000000000000000000').call();

		setCurrentprice(web3.utils.fromWei(currentprice[0]));
		setBalance(web3.utils.fromWei(balance));

	};

	const getAllowance = async () => {
		const balance = await busd.allowance(wallet.account, state.nanosales).call();
		setAllowance(web3.utils.fromWei(balance));
	};


	const approve = async () => {
		setLoading(true);

		try {

			if (purchaseamount > 0) {
				const value = web3.utils.toWei(((purchaseamount || 0) * 1.0).toString()).toString();

				console.log('APPROVAL AMOUNT', value);

				const tx = await busd.approve(state.nanosales, value).send({
					from: wallet.account,
					to: state.nanosales
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
				message: 'Approval Failed',
				description: e.toString()
			});
		}

		setLoading(false);


	};

	const handleDeposit = async () => {
		setLoading(true);

		try {
			const value = web3.utils.toWei(data.amount.toString()).toString();
			const tx = await nanosales
				.purchase(value)
				.send({from: wallet.account, to: state.nanosales});

			if (tx.status) {
				setData({amount: 0, months: 0});
				notification.success({
					message: 'Purchase Successful',
					description: tx.transactionHash
				});

				actions.addVaultCount();
			}

		} catch (e) {
			notification.error({
				message: 'Purchase Failed',
				description: e.toString()
			});
		}

		setLoading(false);

	};

	const handleAmount = async (e) => {
		try {
			setData({...data, amount: parseInt(e.target.value)});

			var _purchaseamount = web3.utils.toWei(parseInt(e.target.value).toString());

			const purchaseamount = await nanosales.calculatePrice(_purchaseamount).call();
			setPurchaseamount(web3.utils.fromWei(purchaseamount[0]));
		} catch (e) {
		}
	};

	return (
		<Upgrade
			balanceValue={balance}
			approvedValue={allowance}
			inputValue={data.amount}
			setInputValue={handleAmount}
			purchaseAmount={purchaseamount}
			approve={approve}
			handleDeposit={handleDeposit}
		/>
	);
};


export default NanoSalesForm;
