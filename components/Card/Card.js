import styles from './Card.module.css';
import Button from '../Button/Button';

const Header = ({title, subtitle, stakedText, balanceValue, approvedValue}) => {
	return (
		<div className={styles.Card__container}>
			<header className={styles.Header}>
				<div>
					<h3>{title}</h3>
					<h4>{subtitle}</h4>
				</div>
				<div className={styles.Header__values}>
					<div>
						<span>{stakedText} Balance</span>
						<i>{Number(balanceValue).toFixed(2)}</i>
					</div>
					<div>
						<span>Approved</span>
						<i>{Number(approvedValue).toFixed(2)}</i>
					</div>
				</div>
			</header>
		</div>
	);
};

const Main = ({children}) => {
	return (
		<div className={styles.Card__container}>{children}</div>
	);
};

const Footer = ({callback, disabled}) => {
	return (
		<div className={styles.Card__container}>
			<div className={styles.Footer}>
				<Button value="Approve Contract" onClick={callback} disabled={disabled}/>
			</div>
		</div>
	);
};

const Card = ({children}) => {
	return (
		<div className={styles.Card}>{children}</div>
	);
};

Card.Header = Header;
Card.Main = Main;
Card.Footer = Footer;

export default Card;
