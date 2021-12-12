import styles from './Tabs.module.css';

const Alternate = ({tabs, activeTab, setActiveTab}) => {
	const tabsList = tabs.map((tab, i) => (
		<button
			className={
				activeTab === i ? styles.TabsAlternate__item_active : styles.TabsAlternate__item
			}
			onClick={() => {
				setActiveTab(i);
			}}
			key={i}
		>
			{tab}
		</button>
	));

	return (
		<div className={styles.TabsAlternate}>
			{tabsList}
		</div>
	);
};

const Tabs = ({tabs, setActiveTab, activeTab, style, minimize = false}) => {
	const tabsList = tabs.map((tab, i) => (
		<button
			className={
				activeTab === i ? styles.Tabs__item_active : styles.Tabs__item
			}
			onClick={() => {
				setActiveTab(i);
			}}
			key={i}
			style={{padding: minimize && '10px 20px'}}
		>
			{tab}
		</button>
	));

	return (
		<div className={styles.Tabs} style={style}>
			{tabsList}
		</div>
	);
};

Tabs.Alternate = Alternate;

export default Tabs;
