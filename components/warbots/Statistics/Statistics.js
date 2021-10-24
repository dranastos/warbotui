import styles from './Statistics.module.css';
import Aside from '../../Aside/Aside';
import Card from '../../Card/Card';

const Statistics = ({warbots, plants, manufactured, period}) => {
	return (
		<div className={styles.Statistics}>
			<Aside
				title="Statistics"
				text="Praesent dis id aliquet urna enim facilisis sed. Tincidunt nunc, lectus quisque magna praesent vitae. Urna quisque neque ultrices amet!"
			/>
			<div className={styles.Statistics__stat}>
				<div>
					<Card>
						<div className={styles.Statistics__container}>
							<div>
								<span>Warbots in existence</span>
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
		</div>
	);
};

export default Statistics;
