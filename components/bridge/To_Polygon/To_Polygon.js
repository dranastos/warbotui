import Select from '../../Select/Select';
import Button from '../../Button/Button';
import useGlobal from '../../../hooks/useGlobal';
import {useState} from 'react';
import useGlobalBNB from '../../../hooks/useGlobalBNB';
import useMicroMachines from '../../../hooks/useMicroMachines';
import {useWallet} from 'use-wallet';
import useMasterchef from '../../../hooks/useMasterchef';
import {notification} from 'antd';
import Input from '../../Input/Input';

function To_Polygon() {
	const wallet = useWallet();
	const [state, actions] = useGlobal(['micromachinesBNB', 'hasMicromachinesBNB',]);
	const [data, setData] = useState({months: 0, amount: '', timelock: 0});
	const [masterchef] = useMasterchef(state.masterchef);

	const [micromachinesBNB] = useMicroMachines(state.micromachinesBNB);

	// const getAllowance = async () => {
	// 	const balance = await nanobnblp.allowance(wallet.account, state.masterchef).call();
	// 	setAllowance(balance);
	// 	setCounter(counter + 1);
	// };

	// const approve = async () => {
	// 	try {
	// 		if (parseInt(data.amount) > 0) {
	// 		  const value = data.amount.toString();
	//
	// 		  const tx = await micromachinesBNB.approve(state.masterchef, value).send({
	// 		    from: wallet.account,
	// 		    to: state.nanomachines
	// 		  });
	//
	// 			if (tx.status) {
	// 				notification.success({
	// 					message: 'Approve Successful',
	// 					description: tx.transactionHash
	// 				});
	//
	// 				// await getAllowance();
	// 			}
	// 		}
	// 	} catch (e) {
	// 		notification.error({
	// 			message: 'Deposit Failed',
	// 			description: e.toString()
	// 		});
	// 	}
	// };

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
							<button className="to_pol_btn">361 BNB</button>
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
												<button>MAX</button>
											</div>
										</div>
										<div className="col-lg-12 col-xl-4">
											<Select
												placeholder="Option"
												options={[
													{img: '/img/MMAC-sm.png', text: 'NMAC'},
													{img: '/img/MMAC-sm.png', text: 'NMAC1'},
													{img: '/img/MMAC-sm.png', text: 'NMAC2'},
												]}
												setSelectData={(e) => console.log(e)}
												selectData={'NMAC'}
											/>
										</div>
										<p className="available_MMAC mt-3">
											Available: 361 MMAC
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
										<Button
											value="Approve"
											// onClick={approve}
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

export default To_Polygon;
