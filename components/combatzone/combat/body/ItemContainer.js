import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SweetAlert from 'react-bootstrap-sweetalert';
import NanoNFTCard from './NanoNFTCard';
import Carousel, { consts } from 'react-elastic-carousel'

const cardList = [
  {
    id: 1,
    img: '/img/combatzone/combat/nano_nft1.png',
    title: 'Minigun',
    description: 'Deals 10% additional damage when attacking an Walker',
    attr: {
      heart: '75',
      defend: '75',
      fire: '75',
      speed: '75',
    }
  },
  {
    id: 2,
    img: '/img/combatzone/combat/nano_nft2.png',
    title: 'Nuke',
    description: 'Deals 10% additional damage when attacking an Walker',
    attr: {
      heart: '75',
      defend: '75',
      fire: '75',
      speed: '75',
    }
  },
  {
    id: 3,
    img: '/img/combatzone/combat/nano_nft3.png',
    title: 'Missile',
    description: 'Deals 10% additional damage when attacking an Walker',
    attr: {
      heart: '75',
      defend: '75',
      fire: '75',
      speed: '75',
    }
  },
  {
    id: 4,
    img: '/img/combatzone/combat/nano_nft4.png',
    title: 'Rockets',
    description: 'Deals 10% additional damage when attacking an Walker',
    attr: {
      heart: '75',
      defend: '75',
      fire: '75',
      speed: '75',
    }
  },
  {
    id: 5,
    img: '/img/combatzone/combat/nano_nft1.png',
    title: 'Minigun',
    description: 'Deals 10% additional damage when attacking an Walker',
    attr: {
      heart: '75',
      defend: '75',
      fire: '75',
      speed: '75',
    }
  },
  {
    id: 6,
    img: '/img/combatzone/combat/nano_nft2.png',
    title: 'Nuke',
    description: 'Deals 10% additional damage when attacking an Walker',
    attr: {
      heart: '75',
      defend: '75',
      fire: '75',
      speed: '75',
    }
  }
]

const ItemsLayout = styled.div`
  position: absolute;
  right: 100px;
  bottom: 250px;
  background: rgba(7, 19, 37, 0.5);
  border-radius: 20px;
`
const ItemsInnerLayout = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`
const ExpandIcon = styled.button`
  border: 2px solid #71EEFF;
  border-radius: 5px;
  background: ${props => props.bg} no-repeat center;
  position: absolute;
  bottom: -10px;
  left: -10px;
  width: 35px;
  height: 35px;
  z-index: 1;
`
const CollabIcon = styled.button`
  border: 2px solid #71EEFF;
  border-radius: 5px;
  background: ${props => props.bg} no-repeat center;
  position: absolute;
  top: 0px;
  right: 0px;
  width: 39px;
  height: 39px;
  z-index: 1;
`
const ItemBox = styled.div`
  width: 92px;
  height: 92px;
  border: 2px solid ${props =>
    props.borderColor ?
      '#71EEFF' :
      '#3A4F6D'
  };
  border-radius: 15px;
  box-sizing: border-box;
  background: #2B2C30;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`
const ItemImage = styled.img`
  width: 90%;
  height: 90%;
`
const Modal = styled.div`
  width: 1158px;
  height: 413px;
  margin: 35px auto;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("/img/combatzone/combat/svg/modal.svg") center no-repeat;
`
const InnerModal = styled.div`
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
`
const ModalTitle = styled.div`
  width: 372px;
  height: 62px;
  background: url('/img/combatzone/combat/svg/modal-title.svg') center no-repeat;
  position: absolute;
  top: -45px;
  left: 0; 
  right: 5px; 
  margin-left: auto; 
  margin-right: auto;

  font-family: Teko;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  text-align: center;
  color: #FFFFFF;
  text-align: center;
  padding-top: 15px;
`
const ArrowButton = styled.button`
  box-sizing: border-box;
  transition: all 0.3s ease;
  font-size: 1.3em;
  background-color: #2A4D65;
  color: white;
  box-shadow: 0 0 2px 0px #333;
  border-radius: 50%;
  border: 2px solid #71EEFF;
  padding: 0;
  width: 40px;
  height: 40px;
  min-width: 40px;
  line-height: 40px;
  align-self: center;
  opacity: ${props =>
    props.disabled ? '0.3' : '1'
  };
  cursor: ${props =>
    props.disabled ?
      'not-allowed' :
      'pointer'
  };
  &:hover {
    background-color: #71EEFF;
  };
`
const ConfirmButton = styled.button`
  background: #6ED1DF;
  border-radius: 20px;
  box-shadow: 0px 5px 0 #2BA2C8;
  border: none;
  padding: 15px 50px;
  color: #1F304E;
  font-family: 'Teko';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 30px;
  text-align: center;
  left: 0; right: 0;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  bottom: -25px;
  z-index: 1;
  min-width: 200px;
  &:active {
    box-shadow: none;
    transform: translateY(5px);
  }
`
const alertClasses = {
  position: 'relative',
  width: '1158px',
  height: '500px',
  background: 'transparent',
  padding: 0,
  display: 'block'
}

const Item = (props) => {
  const { selected, src } = props;
  return (
    <ItemBox borderColor={selected}>
      <ItemImage src={src} />
    </ItemBox>
  )
}
const Arrow = ({ type, onClick, isEdge }) => {
  const pointer = type === consts.PREV ? '❮' : '❯'
  return (
    <ArrowButton onClick={onClick} disabled={isEdge}>
      {pointer}
    </ArrowButton>
  )
}

const ItemContainer = () => {
  const [openNFTcardModal, setOpenNFTCardModal] = useState(false);
  const [selectedArr, setSelectedArr] = useState([]);
  console.log(selectedArr)
  return (
    <ItemsLayout>
      {
        !openNFTcardModal && <ItemsInnerLayout>
          <Item selected={false} src="img/combatzone/combat/nano_nft1.png" />
          <Item selected={true} src="img/combatzone/combat/nano_nft2.png" />
          <Item selected={true} src="img/combatzone/combat/nano_nft3.png" />
          <ExpandIcon
            bg={`url("img/combatzone/combat/expand.png")`}
            onClick={() => {
              setOpenNFTCardModal(true);
            }}
          />
        </ItemsInnerLayout>
      }

      <SweetAlert
        custom
        show={openNFTcardModal}
        style={alertClasses}
        title=""
        onConfirm={() => setOpenNFTCardModal(false)}
        onCancel={() => setOpenNFTCardModal(false)}
        showCancel={false}
        showConfirm={false}
        closeOnClickOutside={true}
      >
        <Modal>
          <ModalTitle>
            Play an NFT card
          </ModalTitle>
          <CollabIcon
            bg={`url("img/combatzone/combat/collab.png")`}
            onClick={() => {
              setOpenNFTCardModal(false);
            }}
          />
          <ConfirmButton>
            CONFIRM
          </ConfirmButton>
          <InnerModal>
            <Carousel
              itemsToShow={4}
              itemsToScroll={1}
              pagination={false}
              renderArrow={Arrow}
            >
              {
                cardList.map((card, index) => {
                  return (
                    <NanoNFTCard 
                      key={index}
                      card={card}  
                      onSelect={() => {
                        let arr = [];
                        if(!selectedArr.includes(card.id)) {
                          arr = [...selectedArr, card.id]
                          console.log('here');
                          setSelectedArr(arr);
                        }
                      }}
                      onDisSelect={(e) => {
                        e.stopPropagation();
                        let arr = [];
                        arr = [...selectedArr];
                        let i = arr.indexOf(card.id);
                        if(i >= 0) {
                          arr.splice(i, 1);
                          setSelectedArr(arr);
                        }
                      }}
                      selected={selectedArr.includes(card.id)}
                    />
                  )
                })
              }
            </Carousel>
          </InnerModal>
        </Modal>
      </SweetAlert>
    </ItemsLayout>
  )
}

export default ItemContainer