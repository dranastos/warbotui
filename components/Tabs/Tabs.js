import styles from './Tabs.module.css';
import {useState} from 'react';

const Tabs = ({tabs, defaultTab, callback, style}) => {
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

export default Tabs;
