import React from 'react';
import styled from 'styled-components';
import MyWarbot from './MyWarbot';
import OppoentWarbot from './OpponentWarbot';
import HeaderRight from './HeaderRight';

const VSHeaderLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 50px 0px;
  position: relative;
`

const VSmode = styled.span`
  font-family: Teko;
  font-style: normal;
  font-weight: bold;
  font-size: 45px;
  line-height: 47px;
  text-align: center;
  color: white;
  margin: 0px 80px;
`

const Round = styled.div`
  background: #24364F;
  border-radius: 0px 0px 15px 15px;
  position: absolute;
  top: 0;
  left: auto;
  right: auto;
  font-family: Teko;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  color: #FFFFFF;
  padding: 5px 20px;
`

const VSHeader = () => {
  return (
    <VSHeaderLayout>
      <Round>Round 1</Round>
      <MyWarbot
        botName="Tractor Lvl.1"
        number="2201"
        bloodAmount={80}
        avatarUrl="/img/combatzone/combat/my_warbot.png"
      />
      <VSmode> VS. </VSmode>
      <OppoentWarbot
        botName="Aerial Lvl.1"
        number="2201"
        bloodAmount={30}
        avatarUrl="/img/combatzone/combat/opponent_warbot.png"
      />
      <HeaderRight />
    </VSHeaderLayout>
  )
}

export default VSHeader;