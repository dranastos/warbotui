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
import ManufacturingBlock from '../components/warbots/Manufacturing/Manufacturing';


const UserManufacturingCenters = ({onComplete, address}) => {



	return (
		<Manufacturing
			link={'/manufacturing'}
		/>
	);
};

export default UserManufacturingCenters;
