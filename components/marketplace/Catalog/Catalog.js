import styles from './Catalog.module.css';
import Filter from '../Filter/Filter';
import List from '../List/List';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

const Catalog = () => {
	return (
		<div className={styles.Catalog}>
			{/*<Filter>*/}
			{/*	<Filter.Item title="Type">*/}
			{/*		<Filter.Checkbox*/}
			{/*			label="Tractor"*/}
			{/*		/>*/}
			{/*		<Filter.Checkbox*/}
			{/*			label="Aerial"*/}
			{/*		/>*/}
			{/*		<Filter.Checkbox*/}
			{/*			label="Walker"*/}
			{/*		/>*/}
			{/*	</Filter.Item>*/}
			{/*	<Filter.Item title="Skills">*/}
			{/*		<Filter.TextField*/}
			{/*			placeholder="Search skills"*/}
			{/*		/>*/}
			{/*	</Filter.Item>*/}
			{/*	<Filter.Item title="Stats Upgrades">*/}
			{/*		<Filter.Range*/}
			{/*			label="Hitpoints"*/}
			{/*			icon={faHeart}*/}
			{/*			color="#71CF80"*/}
			{/*			min={0}*/}
			{/*			max={100}*/}
			{/*			step={100}*/}
			{/*		/>*/}
			{/*	</Filter.Item>*/}
			{/*</Filter>*/}
			<List/>
		</div>
	);
};

export default Catalog;
