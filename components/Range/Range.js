import styles from './Range.module.css';
import {createRef, useEffect, useLayoutEffect, useState} from 'react';
import {parse} from '@fortawesome/fontawesome-svg-core';

const Range = ({min, max, step}) => {
	const inputLeft = createRef();
	const inputRight = createRef();
	const thumbLeft = createRef();
	const thumbRight = createRef();
	const range = createRef();

	const [leftInputValue, setLeftInputValue] = useState(0);
	const [rightInputValue, setRightInputValue] = useState(100);

	const [onLeftHover, setOnLeftHover] = useState(false);
	const [onRightHover, setOnRightHover] = useState(false);

	const setLeftValue = () => {
		const _this = inputLeft.current;
		const min = parseInt(_this.min);
		const max = parseInt(_this.max);

		_this.value = Math.min(_this.value, parseInt(inputRight.current.value) - 1);
		setLeftInputValue(_this.value);

		const percent = ((_this.value - min) / (max - min)) * 100;

		thumbLeft.current.style.left = percent + '%';
		range.current.style.left = percent + '%';
	};

	const setRightValue = () => {
		const _this = inputRight.current;
		const min = parseInt(_this.min);
		const max = parseInt(_this.max);

		_this.value = Math.max(_this.value, parseInt(inputLeft.current.value) + 1);
		setRightInputValue(_this.value);

		const percent = ((_this.value - min) / (max - min)) * 100;

		thumbRight.current.style.right = (100 - percent) + '%';
		range.current.style.right = (100 - percent) + '%';
	};

	useEffect(() => {
		setLeftValue();
		setRightValue();
	});

	return (
		<div className={styles.Slider}>
			<input
				type="range"
				min={0}
				max={100}
				value={leftInputValue}
				ref={inputLeft}
				onInput={setLeftValue}
				onMouseOver={() => setOnLeftHover(true)}
				onMouseOut={() => setOnLeftHover(false)}
			/>
			<input
				type="range"
				min={0}
				max={100}
				value={rightInputValue}
				ref={inputRight}
				onInput={setRightValue}
				onMouseOver={() => setOnRightHover(true)}
				onMouseOut={() => setOnRightHover(false)}
			/>

			<div className={styles.Slider__wrapper}>
				<div className={styles.Slider__track}/>
				<div className={styles.Slider__range} ref={range}/>
				<div className={!onLeftHover ? styles.Slider__thumb_left : styles.Slider__thumb_left_hover} ref={thumbLeft}/>
				<div className={!onRightHover ? styles.Slider__thumb_right : styles.Slider__thumb_right_hover} ref={thumbRight}/>
			</div>
		</div>
	);
};

export default Range;
