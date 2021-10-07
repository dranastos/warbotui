import {useEffect, useRef, useState} from 'react';

import styles from './Select.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';

const Select = ({placeholder, options, setSelectData, selectData, setIsError}) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [selectedElement, setSelectedElement] = useState(selectData);
  const [activeElement, setActiveElement] = useState(null);

  const optionsText = options.map((option) => option.text);
  const index = optionsText.indexOf(selectedElement);

  const optionsList = options.map((option, i) => {
    return (
      <div
        key={i}
        onClick={() => {
          setSelectedElement(option.text);
          setActiveElement(i);
          setSelectData(String(option.text));
          setIsError && setIsError(false);
        }}
        className={(index === i) || (activeElement === i) ? `${styles.select__option_active}` : ''}>
        <img
          src={option.img}
          alt=""
        />
        <p>{option.text}</p>
      </div>
    );
  });

  const wrapperRef = useRef(null);
  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setActiveMenu(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  useOutsideAlerter(wrapperRef);

  return (
    <div
      ref={wrapperRef}
      className={styles.select}
      onClick={() => setActiveMenu(!activeMenu)}
    >
      <div
        className={styles.select__placeholder}
      >
        <img src={options[index].img} alt=""/>
        <p>{selectedElement || placeholder}</p>
      </div>
      <div className={activeMenu ? styles.select__options_active : styles.select__options}>{optionsList}</div>
      <FontAwesomeIcon icon={faCaretDown}/>
    </div>
  );
};

export default Select;
