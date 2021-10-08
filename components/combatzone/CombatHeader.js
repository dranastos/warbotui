import React, { useState, useEffect } from 'react';

const CombatHeader = (props) => {
  const {
    title,
    showConfirmButton,
    confirmDisable,
    goBack
  } = props;

  const [confirmBtnClass, setConfirmBtnClass] = useState('combat-header-confirm-button-disable');
  const [confirmImgSrc, setConfirmImgSrc] = useState('img/combatzone/confirm.png');
  const [confirmTitleClass, setConfirmTitleCalss] = useState('confirm-title-disable');

  useEffect(() => {
    if(confirmDisable) {
      setConfirmBtnClass('combat-header-confirm-button-disable');
      setConfirmImgSrc('img/combatzone/confirm.png');
      setConfirmTitleCalss('confirm-title-disable');
    } else {
      setConfirmBtnClass('combat-header-confirm-button');
      setConfirmImgSrc('img/combatzone/confirm_success.png');
      setConfirmTitleCalss('confirm-title');
    }
  }, [confirmDisable])

  return (
    <div className="combat-header">
      <div 
        className="combat-header-back-button"
        onClick={goBack}
      >
        <img src="img/combatzone/back.png" className="back-icon" />
        <span className="back-title">Back</span>
      </div>
      <div className="combat-header-title">
        {title}
      </div>
      {
        showConfirmButton &&
        <div className={confirmBtnClass}>
          <img src={confirmImgSrc} className="confirm-icon" />
          <span className={confirmTitleClass}>Confirm</span>
        </div> || <div />
      }
    </div>
  )
}

export default CombatHeader;