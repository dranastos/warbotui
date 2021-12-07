import styles from './Tabs.module.css';
import {useState} from 'react';

const Alternate = ({tabs, defaultTab, callback}) => {
	const [activeTab, setActiveTab] = useState(defaultTab);

	const tabsList = tabs.map((tab, i) => (
		<button
			className={
				activeTab === i ? styles.TabsAlternate__item_active : styles.TabsAlternate__item
			}
			onClick={() => {
				setActiveTab(i);
				callback(i);
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

const Tabs = ({tabs, defaultTab, callback, style, minimize = false}) => {
	const [activeTab, setActiveTab] = useState(defaultTab);

	const tabsList = tabs.map((tab, i) => (
		<button
			className={
				activeTab === i ? styles.Tabs__item_active : styles.Tabs__item
			}
			onClick={() => {
				setActiveTab(i);
				callback(i);
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
