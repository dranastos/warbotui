import styles from './Range.module.css';
import {createRef, useEffect, useState} from 'react';

const RangeTwoThumbs = ({
	                        min,
	                        max,
	                        step,
	                        leftInputValue,
	                        rightInputValue,
	                        setLeftInputValue,
	                        setRightInputValue,
	                        setMinValue,
	                        setMaxValue,
	                        ...props
                        }) => {
	const inputLeft = createRef();
	const inputRight = createRef();
	const thumbLeft = createRef();
	const thumbRight = createRef();
	const range = createRef();

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

		setMinValue(_this.value);
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

		setMaxValue(_this.value);
	};

	useEffect(() => {
		const leftPercent = ((inputLeft.current.value - min) / (max - min)) * 100;
		const rightPercent = ((inputRight.current.value - min) / (max - min)) * 100;

		thumbLeft.current.style.left = leftPercent + '%';
		range.current.style.left = leftPercent + '%';

		thumbRight.current.style.right = (100 - rightPercent) + '%';
		range.current.style.right = (100 - rightPercent) + '%';
	});

	return (
		<div className={styles.Slider}>
			<input
				type="range"
				min={min}
				max={max}
				step={step}
				value={leftInputValue}
				ref={inputLeft}
				onChange={setLeftValue}
				onMouseOver={() => setOnLeftHover(true)}
				onMouseOut={() => setOnLeftHover(false)}
			/>
			<input
				type="range"
				min={min}
				max={max}
				step={step}
				value={rightInputValue}
				ref={inputRight}
				onChange={setRightValue}
				onMouseOver={() => setOnRightHover(true)}
				onMouseOut={() => setOnRightHover(false)}
			/>

			<div className={styles.Slider__wrapper} {...props}>
				<div className={styles.Slider__track}/>
				<div className={styles.Slider__range} ref={range}/>
				<div className={!onLeftHover ? styles.Slider__thumb_left : styles.Slider__thumb_left_hover} ref={thumbLeft}/>
				<div className={!onRightHover ? styles.Slider__thumb_right : styles.Slider__thumb_right_hover}
				     ref={thumbRight}/>
			</div>
		</div>
	);
};

const RangeOneThumb = ({
	                       min,
	                       max,
	                       step,
	                       rightInputValue,
	                       setRightInputValue,
	                       setMaxValue,
	                       ...props
                       }) => {
	const inputRight = createRef();
	const thumbRight = createRef();
	const range = createRef();

	const [onRightHover, setOnRightHover] = useState(false);

	const setRightValue = () => {
		const _this = inputRight.current;
		const min = parseInt(_this.min);
		const max = parseInt(_this.max);

		setRightInputValue(_this.value);

		const percent = ((_this.value - min) / (max - min)) * 100;

		thumbRight.current.style.right = (100 - percent) + '%';
		range.current.style.right = (100 - percent) + '%';

		setMaxValue(_this.value);
	};

	useEffect(() => {
		const rightPercent = ((inputRight.current.value - min) / (max - min)) * 100;

		thumbRight.current.style.right = (100 - rightPercent) + '%';
		range.current.style.right = (100 - rightPercent) + '%';
	});

	return (
		<div className={styles.Slider}>
			<input
				type="range"
				min={min}
				max={max}
				step={step}
				value={rightInputValue}
				ref={inputRight}
				onChange={setRightValue}
				onMouseOver={() => setOnRightHover(true)}
				onMouseOut={() => setOnRightHover(false)}
			/>

			<div className={styles.Slider__wrapper} {...props}>
				<div className={styles.Slider__track}/>
				<div className={styles.Slider__range} ref={range}/>
				<div className={!onRightHover ? styles.Slider__thumb_right : styles.Slider__thumb_right_hover} ref={thumbRight}/>
			</div>
		</div>
	);
};

const Range = ({
	               min,
	               max,
	               step,
	               leftInputValue,
	               rightInputValue,
	               setLeftInputValue,
	               setRightInputValue,
	               setMinValue,
	               setMaxValue,
	               isTwoThumbs = true,
	               ...props
               }) => {
	return isTwoThumbs ? (
		<RangeTwoThumbs
			min={min}
			max={max}
			step={step}
			leftInputValue={leftInputValue}
			rightInputValue={rightInputValue}
			setLeftInputValue={setLeftInputValue}
			setRightInputValue={setRightInputValue}
			setMinValue={setMinValue}
			setMaxValue={setMaxValue}
			{...props}
		/>
	) : (
		<RangeOneThumb
			min={min}
			max={max}
			step={step}
			leftInputValue={leftInputValue}
			rightInputValue={rightInputValue}
			setLeftInputValue={setLeftInputValue}
			setRightInputValue={setRightInputValue}
			setMinValue={setMinValue}
			setMaxValue={setMaxValue}
			{...props}
		/>
	);
};

export default Range;
