import styles from './Nanomachine.module.css';

import Card from '../../Card/Card';
import Output from '../../Output/Output';
import Button from '../../Button/Button';
import Input from '../../Input/Input';

const Nanomachine = ({label, title, subtitle, balanceValue, approvedValue, stakedText, producedText}) => {
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
								<i>{balanceValue}</i>
							</div>
							<div>
								<span>Approved</span>
								<i>{approvedValue}</i>
							</div>
						</div>
					</header>
				</div>
				<div className={styles.Nanomachine__container}>
					<div className={styles.Nanomachine__main}>
						<div className={styles.Nanomachine__outputs}>
							<Output
								value="0.00"
								text={stakedText}
								label="staked"
								buttonText="Unstake"
								buttonDisabled={true}
							/>
							<Output
								value="0.00"
								text={producedText}
								label="produced"
								buttonText="Withdraw"
								buttonDisabled={true}
							/>
						</div>
						<div className={styles.Nanomachine__stake}>
							<Input
								value=""
								placeholder="Amount"
								label="Deposit amount" additionalLabel="0% Deposit fee" balance="0.00 BNB"
							/>
							<Button value={`Stake ${stakedText}`} disabled={true}/>
						</div>
					</div>
				</div>
				<div className={styles.Nanomachine__container}>
					<Button value="Approve Contract"/>
				</div>
			</Card>
		</div>
	);
};

export default Nanomachine;
