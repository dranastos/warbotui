import {Col, Row} from 'antd';
import Facility from '../Facility/Facility';

// import staked_image_1 from '/img/facilities/staked_image_1.png'

const Facilities = () => {
	return (
		<div>
			<Row gutter={20} style={{marginTop: `10px`, marginBottom: `30px`}}>
				<Col md={8}>
					<Facility
						title="Alpha Facility"
						subtitle="Stake NMAC/BUSD LP to get NMAC"
						stakedImage='/img/facilities/staked_image_1.png'
						producedImage='/img/facilities/produced_image_1.png'
						stakedText="NMAC/BUSD LP"
						producedText="NMAC"
						stakedValue="0.00"
						producedValue="0.00"
					/>
				</Col>
				<Col md={8}>
					<Facility
						title="Beta Facility"
						subtitle="Stake NMAC/BNB LP to get NMAC"
						stakedImage='/img/facilities/staked_image_1.png'
						producedImage='/img/facilities/produced_image_1.png'
						stakedText="NMAC/BNB LP"
						producedText="NMAC"
						stakedValue="0.00"
						producedValue="0.00"
					/>
				</Col>
				<Col md={8}>
					<Facility
						title="Gamma Facility"
						subtitle="Stake NMAC to get NMAC"
						stakedImage='/img/facilities/produced_image_1.png'
						producedImage='/img/facilities/produced_image_1.png'
						stakedText="NMAC/BUSD LP"
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
