import React from 'react';
import styled from 'styled-components';
import {
  WarbotLayout,
  WarbotName,
  WarbotHealthLayout,
  WarbotSpecialHealthBar,
  WarbotAvatarLeft,
} from '../components';


const OppoentWarbot = (props) => {
  const {
    botName, 
    bloodAmount, 
    number,
    avatarUrl
  } = props;

  return (
    <WarbotLayout type="opponent">
      <WarbotName>
        {botName}
      </WarbotName>
      <WarbotHealthLayout
        type="opponent"
        amount={bloodAmount}
        number={number}
      />
      <WarbotSpecialHealthBar 
        type="opponent"
      />
      <WarbotAvatarLeft src={avatarUrl} />
    </WarbotLayout>
  )
}

export default OppoentWarbot;