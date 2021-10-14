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
				<Card.Header
					title={title}
					subtitle={subtitle}
					stakedText={stakedText}
					balanceValue={balanceValue}
					approvedValue={approvedValue}
				/>
				<Card.Main>
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
				</Card.Main>
				<Card.Footer
					callback={approve}
				/>
			</Card>
		</div>
	);
};

export default Nanomachine;
