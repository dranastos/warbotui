import styles from './Input.module.css';

const Input = ({label, additionalLabel, balance, ...props}) => {
	return (
		<label className={styles.Input}>
			<span>{label}</span>
			<input
				{...props}
			/>
			<div>
				<span>{additionalLabel}</span>
				<i>{balance}</i>
			</div>
		</label>
	);
};

export default Input;
