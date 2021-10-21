import styles from './Product.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faShieldAlt, faFire, faAngleDoubleRight, faArrowsAlt} from '@fortawesome/free-solid-svg-icons';

const Product = ({img, name, priceBNB, priceUSD, hitpoints, armor, damage, speed, movement}) => {
	return (
		<div className={styles.Product}>
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

export default Product;
