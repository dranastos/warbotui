import styles from './Nanomachine.module.css';

import Card from '../../Card/Card';
import Output from '../../Output/Output';
import Button from '../../Button/Button';
import Input from '../../Input/Input';

const Nanomachine = (props) => {
	const {
		label,
		title,
		subtitle,
		balanceValue,
		approvedValue,
		stakedValue,
		stakedText,
		producedText,
		inputValue,
		setInputValue,
		approve,
		stake,
		unstake,
		withdraw
	} = props;

	return (
		<div className={styles.Nanomachine}>
			<span className={styles.Nanomachine__label}>{label}</span>
			<Card>
				<div className={styles.Nanomachine__container}>
					<header className={styles.Nanomachine__header}>
						<div>
							<h3>{title}</h3>
							<h4>{subtitle}</h4>
						</div>
						<div className={styles.Nanomachine__values}>
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
				<div className={styles.Nanomachine__container}>
					<div className={styles.Nanomachine__main}>
						<div className={styles.Nanomachine__outputs}>
							<Output
								value={Number(stakedValue).toFixed(2)}
								text="staked"
								label={stakedText}
								buttonText="Unstake"
								buttonDisabled={true}
								buttonOptions={{onClick: unstake, disabled: true}}
							/>
							<Output
								value="0.00"
								text="produced"
								label={producedText}
								buttonText="Withdraw"
								buttonOptions={{onClick: withdraw, disabled: true}}
							/>
						</div>
						<div className={styles.Nanomachine__stake}>
							<Input
								type="number"
								placeholder="e.g 10000"
								value={inputValue}
								onChange={setInputValue}
								label="Deposit amount"
								additionalLabel="0% Deposit fee"
								balance="0.00 BNB"
							/>
							<Button
								value={`Stake ${stakedText}`}
								disabled={true}
								onClick={stake}
							/>
						</div>
					</div>
				</div>
				<div className={styles.Nanomachine__container}>
					<Button value="Approve Contract" onClick={approve}/>
				</div>
			</Card>
		</div>
	);
};

export default Nanomachine;
