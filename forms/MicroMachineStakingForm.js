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

import useMicroMachines from '../hooks/useMicroMachines';
import Manufacturing_plants from '../components/Manufacturing_plants';
import UserManufacturingCenters from './UserManufacturingCenters';

const slider_style = {
	backgroundColor: ' rgba(113, 238, 255, 0.7)',
	webkitAppearance: 'none',
	appearance: 'none',
	height: '14px',
	width: '100%',
	borderRadius: '7px',
};
const handle_style = {
	backgroundColor: '#71eeff',
	width: '30px',
	height: '30px',
	top: '0',
};

const MicroMachineStakingForm = ({onComplete, address}) => {
	const [timeValue, setTimeValue] = useState(0);
	const [canDeposit, setCanDeposit] = useState(false);
	const [loading, setLoading] = useState(false);



	return (
		<Spin spinning={loading}>
			<UserManufacturingCenters/>
		</Spin>
	);
};
// export const mmac_bal = { MMAC_balance };
export default MicroMachineStakingForm;
