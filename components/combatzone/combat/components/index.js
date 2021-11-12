import React from 'react';
import styled from 'styled-components';
import { Line } from 'rc-progress';


// ---------------- WarbotLayout ---------------- //

export const WarbotLayout = styled.div`
  position: relative;
  display: flex;
  box-sizing: border-box;
  border-radius: 15px;
  width: 370px;
  flex-direction: column;
  justify-content: center;
  align-items: ${props =>
    props.type == 'my' ?
      'flex-end' :
      'flex-start'
  };
  background: ${props =>
    props.type == 'my' ?
      'rgba(36, 54, 79, 0.5)' :
      'rgba(65, 20, 15, 0.5)'
  };
  border: 1px solid ${props =>
    props.type == 'my' ?
      '#71EEFF' :
      '#AC453A'
  };
  padding: ${props =>
    props.type == 'my' ?
      '20px 100px 20px 0px' :
      '20px 0px 20px 100px'
  };
`

export const WarbotName = styled.span`
  font-family: Teko;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 20px;
  text-align: right;
  color: white;
`


// ---------------- WarbotAvatar ---------------- //

const WarbotAvatar = styled.img`
  width: 140px;
  position: absolute;
`
export const WarbotAvatarRight = styled(WarbotAvatar)`
  right: -60px;
`
export const WarbotAvatarLeft = styled(WarbotAvatar)`
  left: -60px;
`


// ---------------- WarbotHealth ---------------- //

const WarbotNumRight = styled(WarbotName)`
  margin: 5px 10px 0px 0px;
`
const WarbotNumLeft = styled(WarbotName)`
  margin: 5px 0px 0px 10px;
`
const HealthBar = styled(Line)`
  border: 1px solid white;
  padding: 1px;
  width: 190px;
  height: 22px;
  transform: ${props =>
    props.type == 'my' ?
      'rotateY(180deg)' :
      'rotateY(0deg)'
  };
`
const SpeicalHealthBar = styled(Line)`
  border: 1px solid #71EEFF;
  width: 150px;
  height: 12px;
  margin-top: 5px;
  transform: ${props =>
    props.type == 'my' ?
      'rotateY(180deg)' :
      'rotateY(0deg)'
  };
`

export const WarbotSpecialHealthBar = (props) => {
  const {type} = props;
  return (
    <SpeicalHealthBar 
      type={type}
      percent={100}
      strokeLinecap="bar"
      trailColor="transparent"
      strokeColor={'#71EEFF'}
    />
  )
}

const WarbotHealth = (props) => {
  const {
    className,
    number,
    amount,
    type,
  } = props;

  return (
    <div className={className}>
      {
        type == 'my' && <WarbotNumRight>
          {number}
        </WarbotNumRight>
      }
      <HealthBar
        type={type}
        percent={amount}
        strokeLinecap="bar"
        trailColor="transparent"
        strokeColor={
          amount > 70 ? "#44EBB9" :
            amount > 50 && amount <= 70 ? "#EFEA7C" : 
            amount > 10 && amount <= 50 ? "#D07A3B" : "#992929"
          
        }
      />
      {
        type != 'my' && <WarbotNumLeft>
          {number}
        </WarbotNumLeft>
      }
    </div>
  )
}
export const WarbotHealthLayout = styled(WarbotHealth)`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`


// ---------------- WarbotVoltage ---------------- //

const WarbotVoltageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
`
const WarbotVoltageImage = styled.img`
  width: 42px;
  height: 42px;
`
const WarbotVoltageAmount = styled.span`
  font-family: Teko;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 40px;
  text-align: center;
  color: #FFFFFF;
`
export const WarbotVoltage = (props) => {
  const {imageUrl, amount} = props;
  return (
    <WarbotVoltageLayout>
      <WarbotVoltageImage src={imageUrl} />
      <WarbotVoltageAmount>
        {amount}
      </WarbotVoltageAmount>
    </WarbotVoltageLayout>
  )
}


// ---------------- WarbotSetting ---------------- //

const WarbotSettingLayout = styled.button`
  background: rgba(113, 238, 255, 0.5);
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 15px;
  margin: 10px;
`
const WarbotSettingImage = styled.img`
  width: 45px;
  height: 45px;
`
export const WarbotSetting = (props) => {
  const {imageUrl, onClick} = props;
  return (
    <WarbotSettingLayout onClick={onClick}>
      <WarbotSettingImage src={imageUrl} />
    </WarbotSettingLayout>
  )
}


// ---------------- WarbotPlayButton ---------------- //

export const PlayUpButton = styled.button`
  position: absolute;
  top: 15px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  border: none;
  background: ${props => props.bg} no-repeat;
  width: 35px;
  height: 23px;
`

export const PlayDownButton = styled.button`
  position: absolute;
  bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  border: none;
  background: ${props => props.bg} no-repeat;
  width: 35px;
  height: 23px;
`

export const PlayLeftButton = styled.button`
  position: absolute;
  left: 15px;
  margin-top: auto;
  margin-bottom: auto;
  top: 0;
  bottom: 0;
  text-align: center;
  border: none;
  background: ${props => props.bg} no-repeat;
  width: 23px;
  height: 35px;
`

export const PlayRightButton = styled.button`
  position: absolute;
  right: 15px;
  margin-top: auto;
  margin-bottom: auto;
  top: 0;
  bottom: 0;
  text-align: center;
  border: none;
  background: ${props => props.bg} no-repeat;
  width: 23px;
  height: 35px;
`


// ---------------- WarbotFireButton ---------------- //

export const FireButton = styled.button`
  text-align: center;
  border: none;
  background: ${props => props.bg} no-repeat;
  height: 95px;
`


// ---------------- WarbotItems ---------------- //
