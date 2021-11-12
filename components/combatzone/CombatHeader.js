import React, { useState, useEffect } from 'react';

const CombatHeader = (props) => {
  const {
    title,
    subtitle = '',
    showConfirmButton,
    confirmDisable,
    goBack,
    onConfirm,
    onlyTitle = false,
    joinBattle = false,
  } = props;

  const [confirmBtnClass, setConfirmBtnClass] = useState('combat-header-confirm-button-disable');
  const [confirmImgSrc, setConfirmImgSrc] = useState('img/combatzone/confirm.png');
  const [confirmTitleClass, setConfirmTitleCalss] = useState('confirm-title-disable');

  useEffect(() => {
    if (confirmDisable) {
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
    <div className={!onlyTitle && "combat-header" || "combat-header header-center"}>

      {
        !onlyTitle &&
        <div
          className="combat-header-back-button"
          onClick={goBack}
        >
          <img src="img/combatzone/back.png" className="back-icon" />
          <span className="back-title">Back</span>
        </div>
      }

      <div className="title-container">
        <span className="combat-header-title">{title}</span>
        <span className="combat-header-subtitle">{subtitle}</span>
      </div>

      {
        (!joinBattle && !onlyTitle && showConfirmButton) ?
        <button
          className={confirmBtnClass}
          onClick={onConfirm}
        >
          <img src={confirmImgSrc} className="confirm-icon" />
          <span className={confirmTitleClass}>Confirm</span>
        </button> : 
        joinBattle ? null : <div />
      }

      {
        joinBattle ?
        <button
          className="combat-header-join-button"
          onClick={onConfirm}
        >
          <img src="img/combatzone/join_battle.png" className="confirm-icon" />
          <span className={confirmTitleClass}>Join battle</span>
        </button> : null
      }

    </div>
  )
}

export default CombatHeader;