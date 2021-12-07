import styles from './Aside.module.css';

const Aside = ({title, text, children}) => {
	return !children ? (
		<div className={styles.Aside}>
			<h2>{title}</h2>
			<p>{text}</p>
			<img src="/img/nanomachines/statistics_image_1.png" alt=""/>
		</div>
	) : (
		<div className={styles.Aside}>{children}</div>
	);
};

export default Aside;
