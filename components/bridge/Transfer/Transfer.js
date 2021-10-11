import styles from './Transfer.module.css';
import To_Polygon from '../To_Polygon/To_Polygon';
import To_BSC from '../To_BSC/To_BSC';

const Transfer = ({toggleState}) => {
	return (
		<div className={styles.Transfer}>
			{toggleState === 0 && (
				<To_Polygon/>
			)}
			{toggleState === 1 && (
				<To_BSC/>
			)}
		</div>
	);
};

export default Transfer;
