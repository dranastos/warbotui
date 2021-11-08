import Select from '../../Select/Select';
import Button from '../../Button/Button';
import useGlobalBNB from '../../../hooks/useGlobalBNB';
import {useEffect, useState} from 'react';
import {useWallet} from 'use-wallet';
import {notification} from 'antd';
import Input from '../../Input/Input';
import useMMACbridge from '../../../hooks/useMMACBridge';
import useWeb3 from '../../../hooks/useWeb3';
import useMicroMachines from '../../../hooks/useMicroMachines';

function To_Polygon() {
	const wallet = useWallet();
	const [state, actions] = useGlobalBNB(['bridge', 'masterchef', 'micromachinesBNB']);
	const [data, setData] = useState({months: 0, amount: '', timelock: 0});
	const web3 = useWeb3();
	const [counter, setCounter] = useState(0);
	const [allowance, setAllowance] = useState(0);
	const [currentId, setCurrentId] = useState();
	const [isApproved, setIsApproved] = useState(false);

	const [bridge] = useMMACbridge(state.MMACBridge);
	const [micromachines] = useMicroMachines(state.micromachinesBNB)

	const getAllowance = async () => {
		const balance = await micromachines.allowance(wallet.account, state.masterchef).call();
		setAllowance(balance);
		setCounter(counter + 1);
	};

	const approve = async () => {
		if (currentId === 56) {
			try {
				if (parseInt(data.amount) > 0) {
					const value = data.amount.toString();

					const tx = await micromachines.approve(state.masterchef, web3.utils.toBN(String(value))).send({
						from: wallet.account
					});


					if (tx.status) {
						notification.success({
							message: 'Approve Successful',
							description: tx.transactionHash
						});

						await getAllowance();
						await setIsApproved(true);
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

	const send = async () => {
		if (currentId === 56) {
			try {
				if (parseInt(data.amount) > 0) {
					const value = data.amount.toString();

					const tx = await bridge.BridgeMMAC(value).send({
						from: wallet.account,
						value: 100000000000000000
					});

					if (tx.status) {
						notification.success({
							message: 'Send Successful',
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

	useEffect(() => {
		web3.eth.net.getId().then(setCurrentId);
	});

	return (
		<>
			<section className="To_Polygon">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<img src="/img/polygon.png" alt=""/>
							<h1 className="pe-5 mt-3">
								Transfer your assets to Polygon Network
							</h1>
							<p className="to_pol_text">
								Use this Bridge to transfer your MMAC from BSC to Polygon.
								You can transfer up to 12 MMAC at a time for a .1 BNB toll.
							</p>
							<br/>
							<p className="to_pol_bal">Your BNB Balance:</p>
							<button className="to_pol_btn">{allowance} BNB</button>
						</div>
						<div className="col-md-8">
							<div className="to_pol_card">
								<div className="to_pol_upside mt-3">
									<h1 className="text-center ">
										<img
											src="/img/BNB.png"
											alt=""
											className="rounded-circle"
										/>
										&nbsp; BSC Network
									</h1>
									<div className="row mx-4">
										<div className="col-lg-12 col-xl-8 mb-3">
											<div className="BSC_input">
												<Input
													placeholder="E.G. 10000"
													value={data.amount}
													onInput={(event) => setData({...data, amount: event.target.value})}
												/>
												<button onClick={() => setData({...data, amount: allowance})}>MAX</button>
											</div>
										</div>
										<div className="col-lg-12 col-xl-4">
											<Select
												placeholder="Option"
												options={[
													{img: '/img/MMAC-sm.png', text: 'MMAC'},
													{img: '/img/MMAC-sm.png', text: 'MMAC'},
													{img: '/img/MMAC-sm.png', text: 'MMAC'},
												]}
												setSelectData={(e) => console.log(e)}
												selectData={'MMAC'}
											/>
										</div>
										<p className="available_MMAC mt-3">
											Available: {allowance} MMAC
										</p>
									</div>
								</div>
								<div className="to_pol_downside">
									<img
										className="down_arrow"
										src="/img/arrow.png"
										alt=""
									/>
									<h1 className="text-center">
										<img src="/img/polygon.png" alt=""/>
										&nbsp; Polygon Network
									</h1>
									<div className="row mx-5">
										{!isApproved ? (
											<Button
												value="Approve"
												onClick={approve}
											/>
										) : (
											<Button
												value="Bridge MMAC"
												onClick={send}
											/>
										)}
									</div>
								</div>
								<p className="downside_p">
									Lorem ipsum dolor <span>XX fee</span> to
									ultrices amet massa urna scelerisque magna.
									Elit turpis amet, a eleifend scelerisque.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default To_Polygon;
