import styles from './Plant.module.css';
import Output from '../../Output/Output';
import {faChevronDown, faClock, faLock, faCog} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useState} from 'react';

const Plant = ({img, id, unclaimed, warbots, date, finished, staked, lock, produced, onClick}) => {
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
								disabled: true,
								onClick: onClick
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
					<div className={styles.Plant__detail}>
						<img src="/img/warbots/statistics_image_1.png" alt=""/>
						<span>Production per period</span>
						<b>{warbots} Warbots</b>
					</div>
					<div className={styles.Plant__detail}>
						<img src="/img/warbots/statistics_image_2.png" alt=""/>
						<span>Last batch of Warbots on</span>
						<b>{date}</b>
					</div>
				</div>
				<button
					className={styles.Plant__button}
					onClick={() => setIsVisibleDetails(!isVisibleDetails)}
				>
					{!isVisibleDetails ? 'Details' : 'Hide'}
					<FontAwesomeIcon
						icon={faChevronDown}
						style={{
							transform: isVisibleDetails ? 'rotate(180deg)' : ''
						}}
					/>
				</button>
				<div className={isVisibleDetails ? styles.Plant__dropdown_active : styles.Plant__dropdown}>
					<p>
						<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M8.66889 8.20577L9.6956 8.80882L9.72576 11.1419L11.7503 8.56006L12.9655 8.79123L13.9394 12.0665C14.0726 11.6607 14.1442 11.2273 14.1442 10.7775C14.1442 8.48845 12.2881 6.63281 9.99846 6.63281C8.10213 6.63281 6.50364 7.9055 6.00977 9.64304L8.66889 8.20577Z"
								fill="#71EEFF"/>
							<path
								d="M12.0168 10.4781L9.60522 13.5537L8.36111 13.1328L8.31964 9.97559L5.88672 11.291C6.14057 13.3363 7.88609 14.9206 10.0011 14.9206C11.1635 14.9206 12.2141 14.4419 12.9668 13.6718L12.0168 10.4781Z"
								fill="#71EEFF"/>
							<path
								d="M13.8478 16.6404C13.6798 16.0756 12.9958 15.8496 12.4612 16.0974C11.7127 16.4443 10.8789 16.6381 9.99944 16.6381C8.15885 16.6381 6.51655 15.79 5.44186 14.4635C4.61507 13.4429 3.16631 12.7627 2.01088 13.3873L1.72959 13.5394C0.785844 14.0495 0.449544 15.2382 0.986129 16.1671V16.1671C1.45903 16.9859 2.46102 17.3336 3.33947 16.984L3.65752 16.8574C4.37226 16.5728 5.17491 16.7434 5.81826 17.1652C6.05562 17.3208 6.3022 17.4635 6.55701 17.5924C7.24363 17.9398 7.79286 18.5498 7.90371 19.3112L7.94061 19.5647C8.0837 20.5476 8.92647 21.2765 9.91975 21.2765H10.0791C11.0724 21.2765 11.9152 20.5476 12.0583 19.5647L12.1504 18.9318C12.2275 18.4022 12.6063 17.9739 13.0954 17.7566C13.222 17.7004 13.3467 17.6408 13.4695 17.5781C13.8095 17.4044 13.9566 17.0063 13.8478 16.6404V16.6404Z"
								fill="#71EEFF"/>
							<path
								d="M17.6349 10.7757C17.6349 10.6326 17.631 10.4904 17.6231 10.3491C17.5804 9.58086 17.8346 8.80033 18.4387 8.32382L18.6399 8.16517C19.42 7.54982 19.6301 6.45505 19.1332 5.59461L19.054 5.45753C18.5574 4.59761 17.505 4.23232 16.5824 4.59958L16.3413 4.69556C15.6265 4.98007 14.8239 4.80951 14.1805 4.38774C13.9432 4.23213 13.6966 4.08938 13.4418 3.96048C12.7552 3.61314 12.2059 3.00315 12.0951 2.2417L12.0582 1.98825C11.9151 1.00533 11.0723 0.276367 10.0791 0.276367H9.91969C8.92641 0.276367 8.08364 1.00533 7.94055 1.98825L7.90365 2.2417C7.7928 3.00315 7.24357 3.61314 6.55695 3.96048C6.30214 4.08938 6.05556 4.23213 5.8182 4.38774C5.17484 4.80951 4.3722 4.98007 3.65746 4.69556L3.41633 4.59958C2.49372 4.23232 1.44137 4.59761 0.944738 5.45753L0.865567 5.59461C0.368638 6.45505 0.578739 7.54982 1.35889 8.16517L1.56003 8.32382C2.16417 8.80033 2.41831 9.58086 2.37563 10.3491C2.36779 10.4904 2.36381 10.6326 2.36381 10.7757V10.7757C2.36381 11.1646 2.78223 11.3863 3.12438 11.2015L3.65129 10.9169C3.95225 10.7543 4.13645 10.4415 4.17541 10.1016C4.51009 7.18187 6.98965 4.91482 9.99937 4.91482C13.2378 4.91482 15.863 7.53935 15.863 10.777C15.863 11.7652 15.6184 12.6962 15.1864 13.513C14.8843 14.0842 14.7371 14.744 14.9213 15.3634L14.9583 15.4876C15.1328 16.0744 15.5665 16.5489 16.1352 16.7754L16.5835 16.9539C17.5062 17.3214 18.5587 16.9562 19.0554 16.0961L19.1347 15.9589C19.6315 15.0986 19.4216 14.0041 18.6419 13.3887L18.4364 13.2266C17.8341 12.7512 17.5799 11.9736 17.6228 11.2075C17.6309 11.0646 17.6349 10.9206 17.6349 10.7757Z"
								fill="#71EEFF"/>
						</svg>
						<span>MMAC Staked: <b>{staked}</b></span>
					</p>
					<p>
						<FontAwesomeIcon icon={faClock}/>
						<span>Staked on: <b>{finished}</b></span>
					</p>
					<p>
						<FontAwesomeIcon icon={faLock}/>
						<span>Time lock (period/s): <b>{lock}</b></span>
					</p>
					<p>
						<FontAwesomeIcon icon={faCog}/>
						<span>Warbots produced: <b>{produced}</b></span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Plant;
