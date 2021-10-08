import styles from './Button.module.css';

const Button = ({value}) => {
	return (
		<button className={styles.Button}>{value}</button>
	);
};

export default Button;
