import styles from './Statistics.module.css';
import Aside from '../../Aside/Aside';
import Card from '../../Card/Card';
import Tabs from '../../Tabs/Tabs';
import {useState} from 'react';
import {CartesianGrid, Line, XAxis, YAxis, LineChart, Tooltip, ResponsiveContainer} from 'recharts';

const Statistics = ({warbots, plants, manufactured, period}) => {
	const [activeTab, setActiveTab] = useState(0);
	const [activePeriod, setActivePeriod] = useState(4);
	const data = [
		[
			{name: '1 Aug', uv: 180},
			{name: '15 Aug', uv: 200},
			{name: '30 Aug', uv: 150},
			{name: '1 Sep', uv: 140},
			{name: '15 Sep', uv: 200},
			{name: '30 Sep', uv: 250},
			{name: '1 Oct', uv: 410},
			{name: '15 Oct', uv: 480},
			{name: '30 Oct', uv: 490},
		],
		[
			{name: '1 Aug', uv: 180},
			{name: '15 Aug', uv: 200},
			{name: '30 Aug', uv: 150},
			{name: '1 Sep', uv: 140},
			{name: '15 Sep', uv: 200},
			{name: '30 Sep', uv: 250},
			{name: '1 Oct', uv: 410},
			{name: '15 Oct', uv: 480},
			{name: '30 Oct', uv: 490},
		],
		[
			{name: '1 Aug', uv: 180},
			{name: '15 Aug', uv: 200},
			{name: '30 Aug', uv: 150},
			{name: '1 Sep', uv: 140},
			{name: '15 Sep', uv: 200},
			{name: '30 Sep', uv: 250},
			{name: '1 Oct', uv: 410},
			{name: '15 Oct', uv: 480},
			{name: '30 Oct', uv: 490},
		],
		[
			{name: '1 Aug', uv: 180},
			{name: '15 Aug', uv: 200},
			{name: '30 Aug', uv: 150},
			{name: '1 Sep', uv: 140},
			{name: '15 Sep', uv: 200},
			{name: '30 Sep', uv: 250},
			{name: '1 Oct', uv: 410},
			{name: '15 Oct', uv: 480},
			{name: '30 Oct', uv: 490},
		],
		[
			{name: 'Jan', uv: 0},
			{name: 'Feb', uv: 100},
			{name: 'Mar', uv: 180},
			{name: 'Apr', uv: 200},
			{name: 'May', uv: 150},
			{name: 'Jun', uv: 140},
			{name: 'Jul', uv: 200},
			{name: 'Aug', uv: 250},
			{name: 'Sep', uv: 410},
			{name: 'Oct', uv: 480},
		],
		[
			{name: 'Jan', uv: 0},
			{name: 'Feb', uv: 100},
			{name: 'Mar', uv: 180},
			{name: 'Apr', uv: 200},
			{name: 'May', uv: 150},
			{name: 'Jun', uv: 140},
			{name: 'Jul', uv: 200},
			{name: 'Aug', uv: 250},
			{name: 'Sep', uv: 410},
			{name: 'Oct', uv: 480},
		]
	];

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
					<div style={{gridTemplateColumns: '1fr'}}>
						<Card>
							<div className={styles.Statistics__row}>
								<div>
									<h3>Your Warbots</h3>
								</div>
								<Tabs.Alternate
									tabs={['7d', '14d', '1m', '3m', '1y', '3y']}
									defaultTab={activePeriod}
									callback={setActivePeriod}
								/>
							</div>
							<div className={styles.Statistics__row}>
								<ResponsiveContainer height={360} width="100%">
									<LineChart
										data={data[activePeriod]}
										margin={{right: 20}}
									>
										<Line
											type="monotone"
											dataKey="uv"
											stroke="#71EEFF"
											strokeWidth={3}
											dot={{stroke: '#71EEFF', strokeWidth: 12}}
										/>
										<CartesianGrid stroke="#4D96BE" vertical={false}/>
										<XAxis
											dataKey="name"
											dy={30}
											height={60}
											axisLine={false}
											tickLine={false}
											style={{
												fontFamily: 'Montserrat, sans-serif',
												fill: '#ffffff'
											}}
										/>
										<YAxis
											dx={-20}
											width={80}
											axisLine={false}
											tickLine={false}
											style={{
												fontFamily: 'Montserrat, sans-serif',
												fill: '#ffffff'
											}}
										/>
										{/*<Tooltip/>*/}
									</LineChart>
								</ResponsiveContainer>
							</div>
						</Card>
					</div>
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
					<div style={{gridTemplateColumns: '1fr'}}>
						<Card>
							<div className={styles.Statistics__row}>
								<div>
									<h3>Your Warbots</h3>
								</div>
								<Tabs.Alternate
									tabs={['7d', '14d', '1m', '3m', '1y', '3y']}
									defaultTab={activePeriod}
									callback={setActivePeriod}
								/>
							</div>
							<div className={styles.Statistics__row}>
								<ResponsiveContainer height={360} width="100%">
									<LineChart
										data={data[activePeriod]}
										margin={{right: 20}}
									>
										<Line
											type="monotone"
											dataKey="uv"
											stroke="#71EEFF"
											strokeWidth={3}
											dot={{stroke: '#71EEFF', strokeWidth: 12}}
										/>
										<CartesianGrid stroke="#4D96BE" vertical={false}/>
										<XAxis
											dataKey="name"
											dy={30}
											height={60}
											axisLine={false}
											tickLine={false}
											style={{
												fontFamily: 'Montserrat, sans-serif',
												fill: '#ffffff'
											}}
										/>
										<YAxis
											dx={-20}
											width={80}
											axisLine={false}
											tickLine={false}
											style={{
												fontFamily: 'Montserrat, sans-serif',
												fill: '#ffffff'
											}}
										/>
										{/*<Tooltip/>*/}
									</LineChart>
								</ResponsiveContainer>
							</div>
						</Card>
					</div>
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
