import styles from './Facility.module.css';

import Card from '../../Card/Card';
import Image from 'next/image';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

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
					<h3 className={styles.Facility__title}>{title}</h3>
					<h4 className={styles.Facility__subtitle}>{subtitle}</h4>
					<div className={styles.Facility__stakes}>
						<div className={styles.Facility__stake}>
							<span><strong>{stakedText}</strong> staked</span>
							<output>{stakedValue}</output>
						</div>
						<div className={styles.Facility__stake}>
							<span><strong>{producedText}</strong> produced</span>
							<output>{producedValue}</output>
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default Facility;
