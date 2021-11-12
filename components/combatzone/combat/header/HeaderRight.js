import React from 'react';
import styled from 'styled-components';
import {
  WarbotVoltage,
  WarbotSetting,
} from '../components';

const HeaderRightLayout = styled.div`
  position: absolute;
  right: 5%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`

const HeaderRight = () => {
  return (
    <HeaderRightLayout>
      <WarbotVoltage 
        imageUrl={"/img/combatzone/combat/voltage.png"} 
        amount={"35 500"}
      />
      <WarbotSetting imageUrl={"/img/combatzone/combat/setting.png"}/>
    </HeaderRightLayout>
  )
}

export default HeaderRight;