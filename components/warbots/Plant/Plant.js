import styles from './Plant.module.css';
import Output from '../../Output/Output';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useState} from 'react';

const Plant = ({img, id, unclaimed, warbots, date}) => {
	const [isVisibleDetails, setIsVisibleDetails] = useState(false);

	return (
		<div className={styles.Plant}>
			<div className={styles.Plant__img}>
				<img src={img} alt=""/>
			</div>
			<div className={styles.Plant__name}>
				<h4>Manufacturing Plant #{id}</h4>
				<div className={styles.Plant__unclaimed}>
					<h5>Unclaimed Warbots</h5>
					<div>
						<Output
							value={unclaimed.toString()}
							buttonText="Claim"
							buttonOptions={{
								style: {
									fontSize: '22px',
									height: '48px',
									borderRadius: '10px'
								},
								disabled: true
							}}
							style={{
								fontSize: '24px',
								marginTop: '10px',
								padding: '10px',
								minWidth: '60px'
							}}
						/>
					</div>
				</div>
			</div>
			<div className={styles.Plant__details}>
				<div>
					<div className={styles.Plant__detail_active}>
						<img src="/img/warbots/statistics_image_1.png" alt=""/>
						<span>Production per period</span>
						<b>{warbots} Warbots</b>
					</div>
					<div className={styles.Plant__detail_active}>
						<img src="/img/warbots/statistics_image_2.png" alt=""/>
						<span>Last batch of Warbots on</span>
						<b>{date}</b>
					</div>
					<div className={isVisibleDetails ? styles.Plant__detail_active : styles.Plant__detail}>
						<img src="/img/warbots/statistics_image_1.png" alt=""/>
						<span>Production per period</span>
						<b>{warbots} Warbots</b>
					</div>
					<div className={isVisibleDetails ? styles.Plant__detail_active : styles.Plant__detail}>
						<img src="/img/warbots/statistics_image_2.png" alt=""/>
						<span>Last batch of Warbots on</span>
						<b>{date}</b>
					</div>
				</div>
				<button
					className={styles.Plant__button}
					onClick={() => setIsVisibleDetails(!isVisibleDetails)}
				>
					Details
					<FontAwesomeIcon
						icon={faChevronDown}
						style={{
							transform: isVisibleDetails ? 'rotate(180deg)' : ''
						}}
					/>
				</button>
			</div>
		</div>
	);
};

export default Plant;
