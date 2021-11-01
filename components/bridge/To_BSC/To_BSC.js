import Select from '../../Select/Select';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import {useEffect, useState} from 'react';
import {useWallet} from 'use-wallet';
import useGlobal from '../../../hooks/useGlobal';
import useWeb3 from '../../../hooks/useWeb3';
import {notification} from 'antd';
import useMatic from '../../../hooks/useMatic';

function To_BSC() {
	const wallet = useWallet();
	const [state, actions] = useGlobal(['matic', 'masterchef']);
	const [data, setData] = useState({months: 0, amount: '', timelock: 0});
	const web3 = useWeb3();
	const [counter, setCounter] = useState(0);
	const [allowance, setAllowance] = useState(0);
	const [currentId, setCurrentId] = useState();

	const [matic] = useMatic(state.Matic);

	const getAllowance = async () => {
	  const balance = await matic.allowance(wallet.account, state.masterchef).call();
	  setAllowance(balance);
	  setCounter(counter + 1);
	};

	const approve = async () => {
		if (currentId === 137) {
			try {
				if (parseInt(data.amount) > 0) {
					const value = data.amount.toString();

					const tx = await matic.approve(state.masterchef, web3.utils.toBN(String(value))).send({
						from: wallet.account
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
		}
	};

	useEffect(() => {
		web3.eth.net.getId().then(setCurrentId);
	});

	return (
		<>
			<section className="To_BSC">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<img src="/img/BNB.png" alt=""/>
							<h1 className="pe-5 mt-3">
								Transfer your assets to BSC
							</h1>
							<p className="to_pol_text">
								Praesent dis id aliquet urna enim facilisis sed.
								Tincidunt nunc, lectus quisque magna praesent
								vitae. Urna quisque neque ultrices amet massa
								urna scelerisque magna. Elit turpis amet, a
								eleifend scelerisque. Nulla orci, sit posuere
								habitant mauris id in mauris, facilisis.
							</p>
							<br/>
							<p className="to_pol_bal">Your MATIC Balance:</p>
							<button className="to_pol_btn">{allowance} MATIC</button>
						</div>
						<div className="col-md-8">
							<div className="to_pol_card">
								<div className="to_pol_upside mt-3">
									<h1 className="text-center">
										<img src="/img/polygon.png" alt=""/>
										&nbsp; Polygon Network
									</h1>
									<div className="row mx-4">
										<div className="col-md-8">
											<div className="BSC_input mb-3">
												<Input
													placeholder="E.G. 10000"
													value={data.amount}
													onInput={(event) => setData({...data, amount: event.target.value})}
												/>
												<button onClick={() => setData({...data, amount: allowance})}>MAX</button>
											</div>
										</div>
										<div className="col-md-4">
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
											Available: {allowance} MATIC
										</p>
									</div>
								</div>
								<div className="to_pol_downside">
									<img
										className="down_arrow"
										src="/img/arrow.png"
										alt=""
									/>
									<h1 className="text-center ">
										<img
											src="/img/BNB.png"
											alt=""
											className="rounded-circle"
										/>
										&nbsp; BSC Network
									</h1>

									<div className="row mx-5">
										<Button
											value="Approve"
											onClick={approve}
										/>
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

export default To_BSC;
