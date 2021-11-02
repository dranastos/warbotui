import styles from './DicesiumPurchase.module.css';
import Output from '../../Output/Output';
import Card from '../../Card/Card';
import Input from '../../Input/Input';
import Button from '../../Button/Button';

const DicesiumPurchase = () => {
	return (
		<div className={styles.DicesiumPurchase}>
			<div className={styles.DicesiumPurchase__info}>
				<img src="/img/dicesium/dicesium-logo.png" alt=""/>
				<h2>Purchase Dicesium Batteries and Win Battles</h2>
				<p>Praesent dis id aliquet urna enim facilisis sed. Tincidunt nunc, lectus quisque magna praesent vitae. Urna
					quisque neque ultrices amet massa urna scelerisque magna. Elit turpis amet, a eleifend scelerisque. Nulla
					orci, sit posuere habitant mauris id in mauris, facilisis.</p>
				<span>Your Dicesium Batteries Balance:</span>
				<Output value="53,500"/>
			</div>
			<div className={styles.DicesiumPurchase__form}>
				<Card>
					<Card.Header
						title="Purchase Dicesium Batteries"
						stakedText="Battery"
						balanceValue={53500}
						approvedValue={0}
					/>
					<Card.Main>
						<span className={styles.DicesiumPurchase__text}>Nam ultricies vitae urna non massa pharetra, risus eu. Mauris.</span>
						<Input
							label="Enter Dicesium Batteries amount"
							placeholder="E.G. 10000"
						/>
						<Button style={{marginTop: '56px'}} disabled={true} value="Purchase Dicesium Batteries"/>
						<p className={styles.DicesiumPurchase__text}>
							<i>0 Dicesium Batteries</i> will cost you <i>0 MATIC.</i>
						</p>
					</Card.Main>
					<Card.Footer/>
				</Card>
			</div>
		</div>
	);
};

export default DicesiumPurchase;
