import React, { useState, useEffect } from 'react';
import VSHeader from '../../components/combatzone/combat/header/VSHeader';
import PlayButtonContainer from '../../components/combatzone/combat/play/PlayButtonContainer';
import FireButtonContainer from '../../components/combatzone/combat/play/FireButtonContainer';
import ItemContainer from '../../components/combatzone/combat/body/ItemContainer';

const Combat = () => {
  return (
    <>
      <VSHeader />
      <PlayButtonContainer />
      <FireButtonContainer />
      <ItemContainer />
    </>
  )
}

export default Combat;