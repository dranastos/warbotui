import styles from './Product.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faShieldAlt, faFire, faAngleDoubleRight, faArrowsAlt, faCog} from '@fortawesome/free-solid-svg-icons';
import DropDown from '../../DropDown/DropDown';
import {createRef, useEffect, useRef, useState} from 'react';

const Dashboard = ({img, name, id, hitpoints, armor, damage, speed, movement, minimize, items, deposits, ...props}) => {
	const [isVisibleDropDownMenu, setIsVisibleDropDownMenu] = useState(false);

	const dropDownMenu = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropDownMenu.current && !dropDownMenu.current.contains(event.target)) {
				setIsVisibleDropDownMenu(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [dropDownMenu]);

	return (
		<div
			className={!minimize ? styles.Product : styles.Product_minimize}
			{...props}
		>
			<header className={styles.Product__header}>
				<img src={img} alt=""/>
			</header>
			<div className={styles.Product__main}>
				<div className={styles.Product__label}>
					<h4>{name}</h4>
					<button>
						<FontAwesomeIcon icon={faHeart}/>
					</button>
				</div>
				<div className={styles.Product__id}>
					<button
						onClick={() => {
							setIsVisibleDropDownMenu(true);
						}}
					>
						<FontAwesomeIcon icon={faCog}/>
					</button>
					<DropDown
						items={items}
						deposits={deposits}
						id={id}
						style={{
							opacity: isVisibleDropDownMenu ? 1 : 0,
							zIndex: isVisibleDropDownMenu ? 0 : -1,
						}}
						ref={dropDownMenu}
					/>
					<span>{id}</span>
				</div>
			</div>
			<footer className={styles.Product__footer}>
				{hitpoints && (
					<div>
						<FontAwesomeIcon icon={faHeart} color="#71CF80"/>
						<span>{hitpoints}</span>
					</div>
				)}
				{armor && (
					<div>
						<FontAwesomeIcon icon={faShieldAlt} color="#6ED1DF"/>
						<span>{armor}</span>
					</div>
				)}
				{damage && (
					<div>
						<FontAwesomeIcon icon={faFire} color="#E06885"/>
						<span>{damage}</span>
					</div>
				)}
				{speed && (
					<div>
						<FontAwesomeIcon icon={faAngleDoubleRight} color="#EFDF8C"/>
						<span>{speed}</span>
					</div>
				)}
				{movement && (
					<div>
						<FontAwesomeIcon icon={faArrowsAlt} color="#EE8F59"/>
						<span>{movement}</span>
					</div>
				)}
			</footer>
		</div>
	);
};

const Product = ({img, name, priceBNB, priceUSD, hitpoints, armor, damage, speed, movement, minimize, ...props}) => {
	return (
		<div
			className={!minimize ? styles.Product : styles.Product_minimize}
			{...props}
		>
			<header className={styles.Product__header}>
				<img src={img} alt=""/>
			</header>
			<div className={styles.Product__main}>
				<div className={styles.Product__label}>
					<h5>{name}</h5>
					<button>
						<FontAwesomeIcon icon={faHeart}/>
					</button>
				</div>
				<div className={styles.Product__price}>
					<span>{priceBNB} BNB</span>
					<span>${priceUSD}</span>
				</div>
			</div>
			<footer className={styles.Product__footer}>
				{hitpoints && (
					<div>
						<FontAwesomeIcon icon={faHeart} color="#71CF80"/>
						<span>{hitpoints}</span>
					</div>
				)}
				{armor && (
					<div>
						<FontAwesomeIcon icon={faShieldAlt} color="#6ED1DF"/>
						<span>{armor}</span>
					</div>
				)}
				{damage && (
					<div>
						<FontAwesomeIcon icon={faFire} color="#E06885"/>
						<span>{damage}</span>
					</div>
				)}
				{speed && (
					<div>
						<FontAwesomeIcon icon={faAngleDoubleRight} color="#EFDF8C"/>
						<span>{speed}</span>
					</div>
				)}
				{movement && (
					<div>
						<FontAwesomeIcon icon={faArrowsAlt} color="#EE8F59"/>
						<span>{movement}</span>
					</div>
				)}
			</footer>
		</div>
	);
};

Product.Dashboard = Dashboard;

export default Product;
