import styles from './Statistics.module.css';
import Card from '../../Card/Card';

const Statistics = () => {
	return (
		<div className={styles.Statistics}>
			<div>
				<h2>Statistics</h2>
				<p>
					Praesent dis id aliquet urna enim facilisis sed. Tincidunt nunc, lectus quisque magna praesent vitae. Urna
					quisque neque ultrices amet!
				</p>
				<img src="/img/nanomachines/statistics_image_1.png" alt=""/>
			</div>
			<div className={styles.Statistics__stat}>
				<div>
					<Card>
						<div className={styles.Statistics__container}>
							<div>
								<span>NanoMachines in existence</span>
								<h2>52,592.453599999999999981</h2>
							</div>
								<img src="/img/nanomachines/statistics_image_2.png" alt=""/>
						</div>
					</Card>
				</div>
				<div>
					<Card>
						<div className={styles.Statistics__container}>
							<div>
								<span>NanoMachines manufactured per block</span>
								<h2>0.004</h2>
							</div>
								<img src="/img/nanomachines/statistics_image_3.png" alt=""/>
						</div>
					</Card>
					<Card>
						<div className={styles.Statistics__container}>
							<div>
								<span>NanoMachines manufactured per day</span>
								<h2>172.8</h2>
							</div>
								<img src="/img/nanomachines/statistics_image_4.png" alt=""/>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default Statistics;
