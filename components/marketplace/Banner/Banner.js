import styles from './Banner.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStore} from '@fortawesome/free-solid-svg-icons';
import {useEffect, useState} from 'react';

const Banner = ({img, color}) => {
	const [background, setBackground] = useState('#000000');

	useEffect(() => {
		setBackground(color);
	});

	return (
		<div className={styles.Banner} style={{background: `linear-gradient(90deg, #010101 35%, ${background} 75%)`}}>
			<div className="container">
				<div className={styles.Banner__label}>
					<i>
						<FontAwesomeIcon icon={faStore}/>
					</i>
					<h1 className={styles.Banner__title}>Marketplace</h1>
				</div>
				<span className={styles.Banner__subtitle}>Tincidunt nunc, lectus quisque magna praesent vitae!</span>
				{img && (
					<img src={img} className={styles.Banner__image} alt=""/>
				)}
			</div>
		</div>
	);
};

export default Banner;
