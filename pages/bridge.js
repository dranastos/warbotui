import {useEffect, useState, useCallback} from 'react';
import PublicLayout from '../layouts/PublicLayout_BNB';
import To_BSC from '../components/bridge/To_BSC';
import To_Polygon from '../components/bridge/To_Polygon';
import Tabs from '../components/Tabs/Tabs';

export default function bridge() {
	const [toggleState, setToggleState] = useState(0);

	return (
		<PublicLayout>
			<section className="War_dashboard_tabs Cross_Chain_Bridge">
				<div className="container">
					<h1>Cross-Chain Bridge</h1>

					<Tabs
						tabs={['To Polygon', 'To BSC']}
						defaultTab={toggleState}
						callback={setToggleState}
					/>

					<div className="tab_content_holder">
						<div
							className={
								toggleState === 0
									? 'content  active-content'
									: 'content'
							}
						>
							<To_Polygon/>
							{/* <For_innovators_tab /> */}
						</div>

						<div
							className={
								toggleState === 1
									? 'content  active-content'
									: 'content'
							}
						>
							<To_BSC/>
							{/* <Closed_plants_tab /> */}
						</div>
					</div>
				</div>
			</section>
		</PublicLayout>
	);
}
