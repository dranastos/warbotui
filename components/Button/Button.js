import styles from './Button.module.css';

const Secondary = ({children, ...props}) => {
	return (
		<button className={styles.ButtonSecondary} {...props}>{children}</button>
	);
};

const Button = ({value, ...props}) => {
	return (
		<button className={styles.Button} {...props}>{value}</button>
	);
};

Button.Secondary = Secondary;

export default Button;
