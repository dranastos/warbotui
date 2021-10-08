import styles from './Button.module.css';

const Button = ({value, disabled}) => {
	return (
		<button className={styles.Button} disabled={disabled}>{value}</button>
	);
};

export default Button;
