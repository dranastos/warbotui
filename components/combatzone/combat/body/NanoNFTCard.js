import React from 'react';
import styled from 'styled-components';

const CardBox = styled.div`
  position: relative;
  border-radius: 15px;
  margin: 20px;
  width: 195px;
  cursor: pointer;
  border: 2px solid ${props => 
    props.selected ?
      '#71EEFF':
      'transparent'
  };
`;
const CardImgContainer = styled.div`
  width: 100%;
  background: #2B2C30;
  border-radius: 14px 14px 0px 0px;
`
const CardImg = styled.img`
  height: 150px;
`;
const CardBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 15px;
  background: #24364F;
`;
const CardTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const CardTitle = styled.span`
  font-family: Teko;
  font-style: normal;
  font-weight: 600;
  font-size: 18.867px;
  line-height: 27px;
  color: #FFFFFF;
`;
const InfoIconImg = styled.img`
  width: 18px;
`
const CardDescription = styled.span`
  font-family: "IronMan", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.5px;
  color: #778FBA;
  text-align: left;
`;
const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 10px;
  background: #2A3E5B;
  border-radius: 0px 0px 14px 14px;

  font-family: "IronMan", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 13.5px;
  line-height: 150%;
  color: #EAF4FB;
`
const FooterItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
`
const ItemImg = styled.img`
  width: 14px;
  margin-right: 3px;
`
const DisSelect = styled.img`
  width: 38px;
  height: 38px;
  position: absolute;
  top: -19px;
  right: -19px;
  z-index: 1;
`


const NanoNFTCard = (props) => {
  const { card, onSelect, selected, onDisSelect } = props;
  return (
    <CardBox
      onClick={onSelect}
      selected={selected}
    >
      {
        selected && 
          <DisSelect 
            src="img/combatzone/combat/svg/close.svg" 
            onClick={onDisSelect}
          />
      }
      <CardImgContainer>
        <CardImg src={card.img} />
      </CardImgContainer>
      <CardBody>
        <CardTitleContainer>
          <CardTitle>
            {card.title}
          </CardTitle>
          <InfoIconImg src="img/combatzone/combat/svg/info.svg"/>
        </CardTitleContainer>
        <CardDescription>
          {card.description}
        </CardDescription>
      </CardBody>
      <CardFooter>
        <FooterItem>
          <ItemImg src="img/combatzone/heart_green.png" />
          {card.attr.heart}
        </FooterItem>
        <FooterItem>
          <ItemImg src="img/combatzone/defend.png" />
          {card.attr.defend}
        </FooterItem>
        <FooterItem>
          <ItemImg src="img/combatzone/fire.png" />
          {card.attr.fire}
        </FooterItem>
        <FooterItem>
          <ItemImg src="img/combatzone/forward.png" />
          {card.attr.speed}
        </FooterItem>
      </CardFooter>
    </CardBox>
  )
}

export default NanoNFTCard