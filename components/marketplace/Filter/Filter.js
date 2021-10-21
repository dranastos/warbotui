import styles from './Filter.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faCheck} from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
import InputRange from '../../Range/Range';

const Item = ({title, children}) => {
	return (
		<div className={styles.Item}>
			<h6 className={styles.Item__title}>{title}</h6>
			<div className={styles.Item__list}>
				{children}
			</div>
		</div>
	);
};

const TextField = ({placeholder}) => {
	return (
		<label className={styles.TextField}>
			<FontAwesomeIcon icon={faSearch}/>
			<input type="text" placeholder={placeholder}/>
		</label>
	);
};

const Checkbox = ({label}) => {
	return (
		<label className={styles.Checkbox}>
			<input type="checkbox"/>
			<div>
				<FontAwesomeIcon icon={faCheck}/>
			</div>
			<span>{label}</span>
		</label>
	);
};

const Range = ({label, icon, color, min, max, step}) => {

	const reset = () => {
		// setValue()
	};

	return (
		<div className={styles.Range}>
			<header className={styles.Range__header}>
				<h6>
					{icon && (
						<FontAwesomeIcon icon={icon} style={{color: color ? color : '#71EEFF'}}/>
					)}
					{label}
				</h6>
				<button onClick={reset}>Reset</button>
			</header>
			<InputRange
				min={min}
				max={max}
				step={step}
			/>
		</div>
	);
};

const Filter = ({children}) => {
	return (
		<div className={styles.Filter}>
			<header className={styles.Filter__header}>
				<h5>Filter (1)</h5>
				<button>Clear filter</button>
			</header>
			<div className={styles.Filter__list}>
				{children}
			</div>
		</div>
	);
};

Filter.Item = Item;
Filter.Checkbox = Checkbox;
Filter.TextField = TextField;
Filter.Range = Range;

export default Filter;
