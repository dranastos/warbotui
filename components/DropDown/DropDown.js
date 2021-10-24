import styles from './DropDown.module.css';
import {forwardRef} from 'react';

const DropDown = forwardRef(({items, deposits, ...props}, ref) => {
	const itemsList = items.map((item, i) => (
		<div
			key={i}
			className={styles.DropDown__item}
		>
			<button onClick={() => deposits.length && item.eventListener(deposits[i].id)}>
				{item.text}
			</button>
		</div>
	));

	return (
		<div className={styles.DropDown} ref={ref} {...props}>
			{itemsList}
		</div>
	);
});

export default DropDown;
