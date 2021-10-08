import styles from './Input.module.css';

const Input = ({value, setValue, placeholder, label, additionalLabel, balance}) => {
	return (
		<label className={styles.Input}>
			<span>{label}</span>
			<input
				type="number"
				// value={value}
				// onInput={setValue}
				placeholder={placeholder}
			/>
			<div>
				<span>{additionalLabel}</span>
				<i>{balance}</i>
			</div>
		</label>
	);
};

export default Input;
