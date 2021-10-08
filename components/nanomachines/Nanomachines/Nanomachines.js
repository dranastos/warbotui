import Tabs from '../../Tabs/Tabs';
import {Col, Row} from 'antd';
import NanoMachinesMicroLPStakingForm2 from '../../../forms/NanoMachinesMicroLPStakingForm2';
import NanoMachinesMicroLPStakingForm from '../../../forms/NanoMachinesMicroLPStakingForm';
import NanoMachineStakingForm from '../../../forms/NanoMachineStakingForm';
import {useState} from 'react';
import styles from './Nanomachines.module.css';

const Nanomachines = () => {
	const [toggleNanomachine, setToggleNanomachine] = useState(0);

	return (
		<div className={styles.Nanomachines}>
			<h2>Build Nanomachines (NMAC)</h2>
			<Tabs
				tabs={['Alpha', 'Beta', 'Gamma']}
				defaultTab={toggleNanomachine}
				callback={setToggleNanomachine}
				style={{marginLeft: 'auto', marginRight: 'auto'}}
			/>
			<div>
				{/*<Tabs defaultActiveKey="dashboard" style={{marginTop: 20}}>*/}
				{/*	<Tabs.TabPane tab="Nanomachine Dashboard" key="dashboard">*/}
				{toggleNanomachine === 0 && (
					<Row>
						<Col md={24}>
							<NanoMachinesMicroLPStakingForm2/>
						</Col>
					</Row>
				)}
				{toggleNanomachine === 1 && (
					<Row>
						<Col md={24}>
							<NanoMachinesMicroLPStakingForm/>
						</Col>
					</Row>
				)}
				{toggleNanomachine === 2 && (
					<Row>
						<Col md={24}>
							<NanoMachineStakingForm/>
						</Col>
					</Row>
				)}
			</div>
		</div>
	);
};

export default Nanomachines;
