import styles from './Manufacturing.module.css';
import Button from '../../Button/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUndo} from '@fortawesome/free-solid-svg-icons';
import Card from '../../Card/Card';
import Plant from '../Plant/Plant';
import {useEffect, useState} from 'react';
import Select from '../../Select/Select';
import Link from 'next/link';
import {useWallet} from 'use-wallet';
import useStaking from '../../../hooks/useStaking';
import useGlobal from '../../../hooks/useGlobal';
import useMicroMachineManufacturingPlant from '../../../hooks/useMicroMachineManufacturingPlant';
import {notification} from 'antd';
import moment from 'moment';

const Manufacturing = ({callback, link, type = 'link', isClosed = true}) => {
	const wallet = useWallet();
	const [getVault, sendVaultTx] = useStaking();
	const [state, actions] = useGlobal([
		'security',
		'hasSecurity',
		'vaultCount',
	]);
	const {security, web3, connected} = useMicroMachineManufacturingPlant(
		state.security
	);
	const [deposits, setDeposits] = useState([]);
	const [vaults, setVaults] = useState({});
	const [total, setTotal] = useState(0);
	const [loading, setLoading] = useState(false);
	const [hasVaults, setHasVaults] = useState(false);

	useEffect(() => {
		if (connected && state.hasSecurity) {
			getDeposits(false);
		}
	}, [connected, state.hasSecurity, state.vaultCount]);

	const getDeposits = async () => {
		setLoading(true);

		const deps = await security
			.getUserManufacturingPlants(wallet.account)
			.call();
		const totalDeps = await security
			.userManufacturingPlantCount(wallet.account)
			.call();

		setDeposits(deps);

		let vaults = {};
		for (let dep of deps) {
			const rawdata = await security.ManufacturingPlants(dep).call();
			const data = await getVault(rawdata);
			console.dir(data);

			vaults[dep] = {
				...data,
			};
		}

		setVaults(vaults);
		setTotal(totalDeps);
		setHasVaults(true);
		setLoading(false);
	};

	const manufacture = async (id) => {
		const tx = await security
			.manufacture(id)
			.send({from: wallet.account, to: state.warbotmanufacturer});
		if (tx.status) {
			notification.success({
				message:
					vaults[id].MonthlyProductionRate +
					' Warbot(s) Succesfully Manufactured',
				description: tx.transactionHash,
			});
		}
	};

	const plantsList = deposits.map((id, i) => {
		if (vaults[id] === undefined) return null;

		const timeNow = new Date().getTime() / 1000;
		const expirationTime = vaults[id].timeAtExpirationUnix;
		const expiry = vaults[id].timeAtExpirationUnix;
		const vaultStatus = vaults[id].vaultStatus;

		const production =
			"MONTHLY PRODUCTION RATE: " +
			vaults[id].MonthlyProductionRate +
			" WarBots ";
		// "MicroMachines Staked:" +
		const mmstaked = vaults[id].MicroMachinesStaked;
		const expiration =
			"Lease Expires: " +
			moment.unix(vaults[id].timeAtExpiration).format("MM/DD/YYYY HH:mm");

		if (vaults[id].PlantStatus === "Inactive") return <div></div>;

		return (
			<Card style={{height: 'fit-content'}} key={i}>
				<Plant
					img="/img/warbots/plant_image_1.png"
					id={id}
					staked={mmstaked}
					date={vaults[id].timeAtExpiration}
					// lock={plant.lock}
					finished={vaults[id]["Time Left to Expiration"]}
					warbots={vaults[id]["Total Periods Locked"]}
					// unclaimed={plant.unclaimed}
					produced={vaults[id].WarBotsManufactured}
					onClick={() => manufacture(id)}
				/>
			</Card>
		);
	});

	const [key, setKey] = useState(0);

	const options = [
		{text: 'Lowest Plant #', key: 'id'},
		{text: 'MMAC Staked', key: 'staked'},
		{text: 'Warbots produced', key: 'produced'},
	];

	useEffect(() => {
		setKey(Math.random());
		setDeposits(deposits.sort((a, b) => {
			if (a[options[0].key] < b[options[0].key]) {
				return -1;
			} else if (a[options[0].key] > b[options[0].key]) {
				return 1;
			}
			return 0;
		}));
	}, []);

	return (
		<div className={styles.Manufacturing}>
			<header className={styles.Manufacturing__header}>
				<h2 className={isClosed ? styles.Manufacturing__title_closed : styles.Manufacturing__title}>
					{isClosed && 'Closed'} Warbot Manufacturing Plants <span>{deposits.length}</span>
				</h2>
				<div className={styles.Manufacturing__buttons}>
					<Select
						placeholder="Option"
						options={options}
						setSelectData={(e) => {
							options.findIndex((element, index, array) => {
								if (element.text === e) {
									setKey(Math.random());
									setDeposits(deposits.sort((a, b) => {
										if (a[array[index].key] < b[array[index].key]) {
											return -1;
										} else if (a[array[index].key] > b[array[index].key]) {
											return 1;
										}
										return 0;
									}));
								}
							});
						}}
						selectData={'Lowest Plant #'}
						alternate={true}
					/>
					<Button.Secondary
						onClick={getDeposits}
					>
						<FontAwesomeIcon icon={faUndo}/>
						Refresh
					</Button.Secondary>
				</div>
			</header>
			<div className={styles.Manufacturing__plants} key={key}>
				{hasVaults && plantsList}
			</div>
			<div className={styles.Manufacturing__button}>
				{
					type === 'link' ? (
						<Link href={link}>
							<Button.Secondary style={{margin: 'auto'}}>
								View {isClosed ? 'Active' : 'Closed'} Plants
							</Button.Secondary>
						</Link>
					) : (
						<Button.Secondary style={{margin: 'auto'}} onClick={callback}>
							View {isClosed ? 'Active' : 'Closed'} Plants
						</Button.Secondary>
					)
				}
			</div>
		</div>
	);
};

export default Manufacturing;
