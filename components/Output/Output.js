import styles from './Output.module.css';
import Button from '../Button/Button';

const Output = ({value, text, label, buttonText, buttonDisabled}) => {
	return (
		<div className={styles.Output}>
			<div>
				{label && text && (
					<span><strong>{text}</strong> {label}</span>
				)}
			</div>
			<div>
				{value && (
					<output>{value}</output>
				)}
				{buttonText && (
					<Button value={buttonText} disabled={buttonDisabled}/>
				)}
			</div>
		</div>
	);
};

export default Output;
