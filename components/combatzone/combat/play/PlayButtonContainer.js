import React from 'react';
import styled from 'styled-components';
import { 
  PlayUpButton,
  PlayDownButton,
  PlayLeftButton,
  PlayRightButton
} from '../components';

const PlayButtonLayout = styled.div`
  width: 150px;
  height: 150px;
  border: 15px solid #71EEFF;
  border-radius: 150px;
  background: rgba(113, 238, 255, 0.2);
  position: absolute;
  bottom: 50px;
  left: 100px;
`

const PlayButtonInnerLayout = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const PlayButtonContainer = () => {
  return (
    <PlayButtonLayout>
      <PlayButtonInnerLayout>
        <PlayUpButton 
          bg={`url("/img/combatzone/combat/up.png")`} 
        />
        <PlayDownButton 
          bg={`url("/img/combatzone/combat/down.png")`} 
        />
        <PlayLeftButton 
          bg={`url("/img/combatzone/combat/left.png")`} 
        />
        <PlayRightButton 
          bg={`url("/img/combatzone/combat/right.png")`} 
        />
      </PlayButtonInnerLayout>
    </PlayButtonLayout>
  )
}

export default PlayButtonContainer