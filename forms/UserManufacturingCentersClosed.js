import {useEffect, useState} from 'react';
import {
	Typography,
	Space,
	Row,
	Col,
	Card,
	Slider,
	List,
	Spin,
	Collapse,
	Form,
	Button,
	Input,
	Tag,
	Statistic,
	notification
} from 'antd';

const {Title, Text} = Typography;
import {useWallet} from 'use-wallet';
import useWeb3 from '../hooks/useWeb3';
import useMicroMachineManufacturingPlant from '../hooks/useMicroMachineManufacturingPlant';
import useGlobal from '../hooks/useGlobal';
import useStaking from '../hooks/useStaking';
import moment from 'moment';
import Manufacturing from '../components/warbots/Manufacturing/Manufacturing';


const UserManufacturingCenters = ({onComplete, address}) => {

	const wallet = useWallet();
	const [getVault, sendVaultTx] = useStaking();
	const [state, actions] = useGlobal(['security', 'hasSecurity', 'vaultCount']);
	const {security, web3, connected} = useMicroMachineManufacturingPlant(state.security);
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

		const deps = await security.getUserManufacturingPlants(wallet.account).call();
		const totalDeps = await security.userManufacturingPlantCount(wallet.account).call();


		setDeposits(deps);

		let vaults = {};
		for (let dep of deps) {
			const rawdata = await security.ManufacturingPlants(dep).call();
			const data = await getVault(rawdata);


			vaults[dep] = {

				address,
				...data
			};

		}

		setVaults(vaults);
		setTotal(totalDeps);
		setHasVaults(true);
		setLoading(false);
	};

	return (
		<Manufacturing/>
	);
};

export default UserManufacturingCenters;
