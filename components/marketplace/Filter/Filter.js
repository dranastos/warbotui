import styles from './Filter.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faCheck} from '@fortawesome/free-solid-svg-icons';
import InputRange from '../../Range/Range';
import {useState} from 'react';

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

const TextField = ({placeholder, filter, setFilter, param}) => {
	return (
		<label className={styles.TextField}>
			<FontAwesomeIcon icon={faSearch}/>
			<input
				type="text"
				placeholder={placeholder}
				onInput={(event) => {
					setFilter({...filter, [param]: event.target.value});
				}}
			/>
		</label>
	);
};

const Checkbox = ({label, filter, setFilter, param}) => {
	return (
		<label className={styles.Checkbox}>
			<input onChange={(event) => {
				const params = filter[param];
				if (event.target.checked) {
					params.push(label.toLowerCase());
					setFilter({...filter, [param]: params});
				} else {
					const index = params.indexOf(event.target.value);
					params.splice(index, 1);
					setFilter({...filter, [param]: params});
				}
			}} type="checkbox"/>
			<div>
				<FontAwesomeIcon icon={faCheck}/>
			</div>
			<span>{label}</span>
		</label>
	);
};

const Range = ({label, icon, color, min, max, step, filter, setFilter, param}) => {
	const [leftInputValue, setLeftInputValue] = useState(min);
	const [rightInputValue, setRightInputValue] = useState(max);

	const setMinValue = (value) => {
		if (filter) {
			const params = filter[param];
			params.min = Number(value);
			setFilter({...filter, [param]: params});
		}
	};

	const setMaxValue = (value) => {
		if (filter) {
			const params = filter[param];
			params.max = Number(value);
			setFilter({...filter, [param]: params});
		}
	};

	return (
		<div className={styles.Range}>
			{label && (
				<header className={styles.Range__header}>
					<h6>
						{icon && (
							<FontAwesomeIcon icon={icon} style={{color: color ? color : '#71EEFF'}}/>
						)}
						{label}
					</h6>
					<button onClick={() => {
						setLeftInputValue(min);
						setRightInputValue(max);
						setMinValue(min);
						setMaxValue(max);
					}}>Reset
					</button>
				</header>
			)}
			<InputRange
				min={min}
				max={max}
				step={step}
				setMinValue={setMinValue}
				setMaxValue={setMaxValue}
				leftInputValue={leftInputValue}
				setLeftInputValue={setLeftInputValue}
				rightInputValue={rightInputValue}
				setRightInputValue={setRightInputValue}
			/>
		</div>
	);
};

const Filter = ({children, resetFilters}) => {
	return (
		<div className={styles.Filter}>
			<header className={styles.Filter__header}>
				<h5>Filter</h5>
				<button onClick={resetFilters}>Clear filter</button>
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
