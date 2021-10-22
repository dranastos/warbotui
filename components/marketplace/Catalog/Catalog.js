import styles from './Catalog.module.css';

const Catalog = ({children}) => {
	return (
		<div className={styles.Catalog}>{children}</div>
	);
};

export default Catalog;
