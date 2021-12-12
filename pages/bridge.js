import {useEffect, useState, useCallback} from 'react';
import PublicLayout from '../layouts/PublicLayout_BNB';
import Tabs from '../components/Tabs/Tabs';
import Transfer from '../components/bridge/Transfer/Transfer';

export default function bridge() {
	const [toggleState, setToggleState] = useState(0);

	return (
		<PublicLayout>
			<section className="War_dashboard_tabs">
				<div className="container">
					<h1>Cross-Chain Bridge</h1>

					<Tabs
						tabs={['To Polygon', 'To BSC']}
						activeTab={toggleState}
						setActiveTab={setToggleState}
					/>

					<Transfer toggleState={toggleState}/>
				</div>
			</section>
		</PublicLayout>
	);
}
