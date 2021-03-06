import {useState, useEffect, useCallback} from 'react';
import Head from 'next/head';
import Router from 'next/router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
	Layout,
	Menu,
	Breadcrumb,
	Space,
	Button,
	Typography,
	Drawer,
	Input,
	Form,
	Alert,
	Spin,
} from 'antd';
import {useWallet} from 'use-wallet';
import useGlobal from '../hooks/useGlobal';

import useMicroMachines from '../hooks/useMicroMachines';
import MicroMachineStakingForm from '../forms/MicroMachineStakingForm';
import useNanomachines from '../hooks/useNanomachines';
import useMicroMachineManufacturingPlant from '../hooks/useMicroMachineManufacturingPlant';
import useDicesiumBatteries from '../hooks/useDicesiumBatteries';
import Link from 'next/link';

const {Header, Content, Footer} = Layout;
const {Title, Text} = Typography;

export default function PublicLayout({children, style}) {
	const wallet = useWallet();
	const [drawer, showDrawer] = useState(false);

	const [loading, setLoading] = useState(false);
	// balance
	const [state, actions] = useGlobal([
		'warbotmanufacturer',
		'hasWarbotmanufacturer',
		'micromachines',
		'hasMicromachines',
		'nanomachines',
		'hasNanomachines',
		'dicesiumBatteries',
		'hasDicesiumBatteries',
	]);
	const {security, getFields} = useMicroMachineManufacturingPlant(
		state.security
	);
	const {warbotmanufacturer, web3, connected} =
		useMicroMachineManufacturingPlant(state.warbotmanufacturer);
	const [micromachines] = useMicroMachines(state.micromachines);
	const [nanomachines] = useNanomachines(state.nanomachines);
	const [dicesiumBatteries] = useDicesiumBatteries(state.dicesiumBatteries);
	const [MMACbalance, setMMACBalance] = useState(0);
	const [nanobalance, setNanobalance] = useState(0);
	const [dicesium, setDicesium] = useState(0);
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		if (wallet.status == 'connected' && micromachines && state.hasMicromachines) {
			var bal = getMMACbalance();
			console.log('MMAC BALANCE: ' + bal);
		}
	}, [micromachines, state.hasMicromachines]);

	useEffect(() => {
		if (wallet.status == 'connected' && nanomachines && state.hasNanomachines) {
			getNanomachines();
		}
	}, [nanomachines, state.hasNanomachines]);

	useEffect(() => {
		if (wallet.status == 'connected' && dicesiumBatteries && state.hasDicesiumBatteries) {
			getDicesium();
		}
	}, [dicesiumBatteries, state.hasDicesiumBatteries]);

	const getMMACbalance = async () => {
		const MMACbalance = await micromachines
			.balanceOf(wallet.account)
			.call();
		setMMACBalance(web3.utils.fromWei(MMACbalance, 'nano'));
		setCounter(counter + 1);
	};
	const getNanomachines = async () => {
		const nanobalance = await nanomachines.balanceOf(wallet.account).call();
		setNanobalance(web3.utils.fromWei(nanobalance, 'nano'));
		setCounter(counter + 1);
	};

	const getDicesium = async () => {
		const dicesium = await dicesiumBatteries
			.balanceOf(wallet.account)
			.call();
		setDicesium(web3.utils.fromWei(dicesium));
		setCounter(counter + 1);
	};
	// balance
	useEffect(() => {
		if (
			wallet.status == 'connected' &&
			state.hasWarbotmanufacturer == false
		) {
			showDrawer(true);
		}
	}, [wallet.status]);

	useEffect(() => {
		if (connected && state.hasSecurity) {
			getMicroMachineManufacturingPlant();
		}
	}, [connected, state.hasWarbotmanufacturer]);

	const getMicroMachineManufacturingPlant = async () => {
		setLoading(true);

		const info = await getFields();

		setLoading(false);
	};

	const fillData = async () => {
		setLoading(true);
		wallet.connect();

		console.log('testttt ' + micromachines);
		setLoading(false);

	};


	const renderWallet = useCallback(() => {
		if (wallet.status == 'connected' && wallet.account) {
			getMMACbalance();
			getDicesium();
			getNanomachines();
			return (
				<div className="connect_btn">
					<button onClick={() => fillData()}>
						<img src="/img/wallet.png" alt=""/>
						<Text
							style={{color: 'white', fontFamily: 'Teko_700'}}
						>
							{wallet.account.substr(0, 6)}....
							{wallet.account.substr(39)}
						</Text>
						{/*  <Space>
                        <Button
                        type="danger"
                        size="small"
                        onClick={() => wallet.reset()}
                    >
                        Disconnect
                    </Button>
                    <Button
                        type="primary"
                        size="small"
                        onClick={() => showDrawer(true)}
                    >
                        Settings
                    </Button>
                </Space>*/}
					</button>
				</div>
			);
		}
		return (
			<div className="connect_btn">
				<button onClick={() => fillData()}>
					<img src="/img/wallet.png" alt=""/>
					Connect Wallet
				</button>
			</div>
		);
	}, [wallet]);

	function open() {
		document.getElementById('open_menu').style.display = 'none';
		document.getElementById('close_menu').style.display = 'block';
		document.getElementById('img_menu').style.display = 'block';
	}

	function close() {
		document.getElementById('close_menu').style.display = 'none';
		document.getElementById('open_menu').style.display = 'block';
		document.getElementById('img_menu').style.display = 'none';
	}


	return (
		<Layout>

			<Header
				style={{
					position: 'fixed',
					zIndex: 2,
					width: '100%',
					paddingTop: '64px',
					paddingBottom: '8px',
					// display: "flex",
					// flexDirection: "row",
					// alignItems: "center",
					backgroundImage: 'url(/img/Cogs.png)',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'top left',
				}}
			>
				<section className="Navbar">
					<div className="container">
						<nav className="navbar navbar-expand-lg navbar-light ">
							<div className="nav_menu_holder">
								<button
									className="Nav_menu"
									id="open_menu"
									onClick={open}
								>
									<img src="/img/list.png" alt=""/>
								</button>
								<button
									className="Nav_menu nav_menu_extra"
									id="close_menu"
									onClick={close}
								>
									<img src="/img/close_menu.png" alt=""/>
								</button>

								<ul id="img_menu" className="img_menu">
									<li>
										<Link href="/">
											<a
												title="Home"
											>
												<img src="/img/Home.png" alt=""/>
											</a>
										</Link>
									</li>
									<li>
										<Link href="/combatzone">
											<a
												title="Combat Zone"
											>
												<img
													src="/img/CombatZone.png"
													alt=""
												/>
											</a>
										</Link>
									</li>
									<li>
										<Link href="/manufacturing">
											<a title="Manufacturing Center">
												<img
													src="/img/NanoMachines.png"
													alt=""
												/>
											</a>
										</Link>
									</li>
									<li>
										<Link href="/warbots">
											<a
												title="Warbots"
											>
												<img
													src="/img/Warbots.png"
													alt=""
												/>
											</a>
										</Link>
									</li>
									<li>
										<Link href="/nanomachines">
											<a
												title="NanoMachines"
											>
												<img src="/img/tank.png" alt=""/>
											</a>
										</Link>
									</li>
									<li>
										<Link href="/marketplace">
											<a title="MarketPlace">
												<img
													src="/img/Marketplace.png"
													alt=""
												/>
											</a>
										</Link>
									</li>
									<li>
										<Link href="/nanosale">
											<a
												title="NMAC Sale"
											>
												<img
													src="/img/NanoNFTs.png"
													alt=""
												/>
											</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a title="Location">
												<img src="/img/globe.png" alt=""/>
											</a>
										</Link>
									</li>
									<li>
										<Link href="/bridge">
											<a
												title="Bridge"
											>
												<img src="/img/Bridge.png" alt=""/>
											</a>
										</Link>
									</li>
								</ul>
							</div>

							<div className="container-fluid">
								<a className="navbar-brand" href="#">
									WARBOTS
									<p className="m-0">The future is here</p>
								</a>
								<div className="nav_details">
									<ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center flex-wrap">
										<li className="nav-item">
											<a className="nav-link " href="#">
												<img
													src="/img/Manufacturing_center.png"
													alt=""
												/>
												{MMACbalance}
											</a>
										</li>

										<li className="nav-item">
											<a className="nav-link " href="#">
												<img
													src="/img/NanoMachines.png"
													alt=""
												/>
												{nanobalance}
											</a>
										</li>

										<li className="nav-item">
											<Link href="/dicesium">
												<a className="nav-link ">
													<img
														src="/img/dicesium.png"
														alt=""
													/>
													{dicesium}
												</a>
											</Link>
										</li>

										{/* <li
                                            className="nav-item"
                                            onClick={() => wallet.connect()}
                                            // onClick={connect_wallet}
                                        >
                                            <a className="nav-link " href="#">
                                                <img
                                                    src="/img/wallet.png"
                                                    alt=""
                                                />

                                                {addr}
                                            </a>
                                        </li> */}
										{renderWallet()}
									</ul>
								</div>
							</div>
						</nav>
					</div>
				</section>

				{/* <Title
                    style={{ color: "white", marginBottom: 0, marginRight: 30 }}
                    level={3}
                >
                    MMAC WARBOTS
                </Title>
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="2" onClick={() => Router.push("/")}>
                        WarBot Manufacturing Center
                    </Menu.Item>

                    <Menu.Item
                        key="4"
                        onClick={() => Router.push("/nanomachines")}
                    >
                        Nanomachines
                    </Menu.Item>
                    <Menu.Item key="4" onClick={() => Router.push("/warbots")}>
                        Warbots
                    </Menu.Item>
                    <Menu.Item
                        key="4"
                        onClick={() => Router.push("/nanonftcardsauctions")}
                    >
                        NANO NFTS
                    </Menu.Item>
                    <Menu.Item
                        key="4"
                        onClick={() => Router.push("/combatzone")}
                    >
                        Combat Zone
                    </Menu.Item>
                    <Menu.Item key="4" onClick={() => Router.push("/nanosale")}>
                        Nano Sale
                    </Menu.Item>
                </Menu>
                <div style={{ flex: 1 }} />
                {renderWallet()} */}
			</Header>
			<Content
				className="site-layout"
				style={{
					padding: `0 50px`,
					marginTop: 189,
					minHeight: `100vh`,
				}}
			>
				<Alert message="This is a test site used in development." description='To stake, bridge or otherwise manage your tokens, please visit https://RiseOfTheWarbots.com/app'
					   type="warning" showIcon closeable style={{marginTop: 20, margin: "0 auto", maxWidth: "1300px"}}/>
				{wallet.status != 'connected' && (
					<Alert
						message="Connect Wallet"
						description="Please connect your wallet"
						type="error"
						showIcon
						closable
						style={{marginTop: 20}}
					/>
				)}

				{children}
			</Content>
			<Footer style={{textAlign: 'center'}}>
				All Rights Reserved 2021
			</Footer>
		</Layout>
	);
}
