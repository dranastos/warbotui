import {Col, Row} from 'antd';
import Facility from '../Facility/Facility';
import styles from './Facilities.module.css';

const Facilities = () => {
	return (
		<div className={styles.Facilities}>
			<h2>Production Facilities</h2>
			<Row gutter={20} gap={30} justify="center" align="center">
				<Col md={24} lg={8}>
					<Facility
						title="Alpha Facility"
						subtitle="Stake MMAC/MATIC to get NMAC"
						stakedImage='/img/nanomachines/staked_image_1.png'
						producedImage='/img/nanomachines/produced_image_1.png'
						stakedText="MMAC/MATIC LP"
						producedText="NMAC"
						stakedValue="0.00"
						producedValue="0.00"
					/>
				</Col>
				<Col md={24} lg={8}>
					<Facility
						title="Beta Facility"
						subtitle="Stake NMAC/MATIC to get NMAC"
						stakedImage='/img/nanomachines/staked_image_2.png'
						producedImage='/img/nanomachines/produced_image_1.png'
						stakedText="NMAC/MATIC LP"
						producedText="NMAC"
						stakedValue="0.00"
						producedValue="0.00"
					/>
				</Col>
				<Col md={24} lg={8}>
					<Facility
						title="Gamma Facility"
						subtitle="Stake NMAC to get NMAC"
						stakedImage='/img/nanomachines/produced_image_1.png'
						producedImage='/img/nanomachines/produced_image_1.png'
						stakedText="NMAC"
						producedText="NMAC"
						stakedValue="0.00"
						producedValue="0.00"
					/>
				</Col>
			</Row>
		</div>
	);
};

export default Facilities;
