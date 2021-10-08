import styles from './Button.module.css';

const Button = ({value, ...props}) => {
	return (
		<button className={styles.Button} {...props}>{value}</button>
	);
};

export default Button;
