import PublicLayout from '../layouts/PublicLayout';
import DicesiumPurchase from '../components/dicesuim/DicesiumPurchase/DicesiumPurchase';
import Purchased from '../components/nanosale/Purchased/Purchased';
import useDicesiumBatteries from '../hooks/useDicesiumBatteries';
import useGlobal from '../hooks/useGlobal';
import {useEffect, useState} from 'react';
import {useWallet} from 'use-wallet';

const dicesium = () => {
	const [state, actions] = useGlobal([
		'dicesiumBatteries',
		'hasDicesiumBatteries',
		'masterchef'
	]);
	const [dicesiumBatteries] = useDicesiumBatteries(state.dicesiumBatteries);

	return (
		<PublicLayout>
			<section className="War_dashboard_tabs">
				<div className="container">
					<h1>Dicesium Batteries</h1>
					<DicesiumPurchase
						dicesiumBatteries={dicesiumBatteries}
						state={state}
					/>
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
