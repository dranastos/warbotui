import Tabs from '../../Tabs/Tabs';
import {Col, Row, Space} from 'antd';
import NanoMachinesMicroLPStakingForm2 from '../../../forms/NanoMachinesMicroLPStakingForm2';
import NanoMachinesMicroLPStakingForm from '../../../forms/NanoMachinesMicroLPStakingForm';
import NanoMachineStakingForm from '../../../forms/NanoMachineStakingForm';
import {useState} from 'react';
import styles from './Nanomachines.module.css';
import Nanomachine from '../Nanomachine/Nanomachine';

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
							{/*<NanoMachinesMicroLPStakingForm2/>*/}
							<Nanomachine
								label="Alpha Facility"
								title="Build from NMAC/BUSD LP"
								subtitle="Stake NMAC/BUSD LP to get NMAC"
								balanceValue="361.00"
								approvedValue="0.00"
								stakedText="NMAC/BUSD LP"
								producedText="NMAC"
							/>
						</Col>
					</Row>
				)}
				{toggleNanomachine === 1 && (
					<Row>
						<Col md={24}>
							{/*<NanoMachinesMicroLPStakingForm/>*/}
							<Nanomachine
								label="Beta Facility"
								title="Build from MMAC/BNB LP"
								subtitle="Stake MMAC/BNB LP to get NMAC"
								balanceValue="361.00"
								approvedValue="0.00"
								stakedText="MMAC/BNB LP"
								producedText="NMAC"
							/>
						</Col>
					</Row>
				)}
				{toggleNanomachine === 2 && (
					<Row>
						<Col md={24}>
							{/*<NanoMachineStakingForm/>*/}
							<Nanomachine
								label="Gamma Facility"
								title="Build NMAC from NMAC"
								subtitle="Stake NMAC to get NMAC"
								balanceValue="361.00"
								approvedValue="0.00"
								stakedText="NMAC"
								producedText="NMAC"
							/>
						</Col>
					</Row>
				)}
			</div>
		</div>
	);
};

export default Nanomachines;
