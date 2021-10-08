import styles from './Output.module.css';
import Button from '../Button/Button';

const Output = ({value, text, label, buttonText, buttonOptions}) => {
	return (
		<div className={styles.Output}>
			<div>
				{label && text && (
					<span><strong>{label}</strong> {text}</span>
				)}
			</div>
			<div>
				{value && (
					<output>{value}</output>
				)}
				{buttonText && (
					<Button value={buttonText} {...buttonOptions}/>
				)}
			</div>
		</div>
	);
};

export default Output;
