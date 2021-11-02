import PublicLayout from '../layouts/PublicLayout';
import DicesiumPurchase from '../components/dicesuim/DicesiumPurchase/DicesiumPurchase';
import Purchased from '../components/nanosale/Purchased/Purchased';

const dicesium = () => {
	return (
		<PublicLayout>
			<section className="War_dashboard_tabs">
				<div className="container">
					<h1>Dicesium Batteries</h1>
					<DicesiumPurchase/>
					<Purchased
						title="NMACs Purchased"
						firstLabel="Dicesium Batteries Purchased"
						secondLabel="Dicesium Batteries Consumed"
						lockedValue={0}
						lockedTime={0}
					/>
				</div>
			</section>
		</PublicLayout>
	);
};

export default dicesium;
