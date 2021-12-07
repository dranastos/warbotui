import styles from './Statistics.module.css';
import Aside from '../../Aside/Aside';
import Card from '../../Card/Card';
import Tabs from '../../Tabs/Tabs';
import {useState} from 'react';

const Statistics = ({warbots, plants, manufactured, period}) => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<div className={styles.Statistics}>
			<Aside>
				<h2>Statistics</h2>
				<Tabs.Alternate
					tabs={['Personal', 'Global']}
					defaultTab={activeTab}
					callback={setActiveTab}
				/>
				{activeTab === 0 && (
					<>
						<p>Praesent dis id aliquet urna enim facilisis sed. Tincidunt nunc, lectus quisque magna praesent vitae.
							Urna
							quisque neque ultrices amet!</p>
						<img src="/img/nanomachines/statistics_image_1.png" alt=""/>
					</>
				)}
				{activeTab === 1 && (
					<>
						<p>Praesent dis id aliquet urna enim facilisis sed. Tincidunt nunc, lectus quisque magna praesent vitae.
							Urna quisque neque ultrices amet!</p>
						<img src="/img/nanomachines/statistics_image_1.png" alt=""/>
					</>
				)}
			</Aside>
			{activeTab === 0 && (
				<div className={styles.Statistics__stat}>
					<div>
						<Card>
							<div className={styles.Statistics__container}>
								<div>
									<span>Total Warbots you own</span>
									<h2>{warbots}</h2>
								</div>
								<img src="/img/warbots/statistics_image_1.png" alt=""/>
							</div>
						</Card>
						<Card>
							<div className={styles.Statistics__container}>
								<div>
									<span>Total Manufacturing Plants</span>
									<h2>{plants}</h2>
								</div>
								<img src="/img/warbots/statistics_image_2.png" alt=""/>
							</div>
						</Card>
					</div>
					<div>
						<Card>
							<div className={styles.Statistics__container}>
								<div>
									<span>Warbots manufactured per period</span>
									<h2>{manufactured}</h2>
								</div>
								<img src="/img/warbots/statistics_image_3.png" alt=""/>
							</div>
						</Card>
						<Card>
							<div className={styles.Statistics__container}>
								<div>
									<span>Manufacturing period in seconds</span>
									<h2>{period}</h2>
								</div>
								<img src="/img/warbots/statistics_image_4.png" alt=""/>
							</div>
						</Card>
					</div>
				</div>
			)}
			{activeTab === 1 && (
				<div className={styles.Statistics__stat}>
					<div>
						<Card>
							<div className={styles.Statistics__container}>
								<div>
									<span>Total Warbots in existence</span>
									<h2>{warbots}</h2>
								</div>
								<img src="/img/warbots/statistics_image_1.png" alt=""/>
							</div>
						</Card>
						<Card>
							<div className={styles.Statistics__container}>
								<div>
									<span>Total Manufacturing Plants</span>
									<h2>{plants}</h2>
								</div>
								<img src="/img/warbots/statistics_image_2.png" alt=""/>
							</div>
						</Card>
					</div>
					<div>
						<Card>
							<div className={styles.Statistics__container}>
								<div>
									<span>Warbots manufactured per period</span>
									<h2>{manufactured}</h2>
								</div>
								<img src="/img/warbots/statistics_image_3.png" alt=""/>
							</div>
						</Card>
						<Card>
							<div className={styles.Statistics__container}>
								<div>
									<span>Manufacturing period in seconds</span>
									<h2>{period}</h2>
								</div>
								<img src="/img/warbots/statistics_image_4.png" alt=""/>
							</div>
						</Card>
					</div>
				</div>
			)}
		</div>
	);
};

export default Statistics;
