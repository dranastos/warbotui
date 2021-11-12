import React from 'react';
import styled from 'styled-components';
import { FireButton } from '../components';

const FireButtonLayout = styled.div`
  width: 150px;
  height: 150px;
  border: 15px solid #AC453A;
  border-radius: 150px;
  background: rgba(172, 69, 58, 0.2);
  position: absolute;
  bottom: 50px;
  right: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const FireButtonImage = styled.img`
  width: 100%;
  height: 100%;
`

const FireButtonContainer = () => {
  return (
    <FireButtonLayout>
      <FireButton>
        <FireButtonImage 
          src="img/combatzone/combat/fire.png" 
        />
      </FireButton>
    </FireButtonLayout>
  )
}

export default FireButtonContainer