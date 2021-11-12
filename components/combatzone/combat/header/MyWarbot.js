import React from 'react';
import styled from 'styled-components';
import {
  WarbotLayout,
  WarbotName,
  WarbotHealthLayout,
  WarbotSpecialHealthBar,
  WarbotAvatarRight,
} from '../components';


const MyWarbot = (props) => {
  const {
    botName, 
    bloodAmount, 
    number,
    avatarUrl
  } = props;

  return (
    <WarbotLayout type="my">
      <WarbotName>
        {botName}
      </WarbotName>
      <WarbotHealthLayout
        type="my"
        amount={bloodAmount}
        number={number}
      />
      <WarbotSpecialHealthBar 
        type="my"
      />
      <WarbotAvatarRight src={avatarUrl} />
    </WarbotLayout>
  )
}

export default MyWarbot;