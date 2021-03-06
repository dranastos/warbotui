import styles from './Input.module.css';

const Input = ({label, additionalLabel, balance, ...props}) => {
	return (
		<label className={styles.Input}>
			{label && <span>{label}</span>}
			<input
				{...props}
				type="number"
				min={0}
				onKeyPress={(e) => {
					if (e.which !== 8 && e.which !== 0 && (e.which < 48 || e.which > 57) && e.which !== 46) {
						e.preventDefault();
					}
				}}
			/>
			{(additionalLabel || balance) && (
				<div>
					<span>{additionalLabel}</span>
					<i>{balance}</i>
				</div>
			)}
		</label>
	);
};

export default Input;
