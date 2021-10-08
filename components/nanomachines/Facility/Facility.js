import styles from './Facility.module.css';

import Card from '../../Card/Card';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import Output from '../../Output/Output';

const Facility = ({
	                  title,
	                  subtitle,
	                  stakedImage,
	                  producedImage,
	                  stakedText,
	                  producedText,
	                  stakedValue,
	                  producedValue
                  }) => {
	return (
		<div className={styles.Facility}>
			<Card>
				<div className={styles.Facility__container}>
					<header className={styles.Facility__header}>
						<img src={stakedImage} alt=""/>
						<span>
							<FontAwesomeIcon icon={faArrowRight}/>
						</span>
						<img src={producedImage} alt=""/>
					</header>
					<h3>{title}</h3>
					<h4>{subtitle}</h4>
					<div className={styles.Facility__stakes}>
						<Output value={stakedValue} label={stakedText} text="staked"/>
						<Output value={producedValue} label={producedText} text="produced"/>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default Facility;
