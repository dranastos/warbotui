import React, { useState, useEffect } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import CombatHeader from '../../components/combatzone/CombatHeader';
import WarBotCard from '../../components/combatzone/WarBotCard';
import Router from "next/router";

const warbot = {
  "id": 1,
  "img": "/img/combatzone/2.png",
  "title": "Renegade",
  "settingValue": "#31226234"
}

const selectList = [
  {
    "id": 1,
    "title": "Create Battle",
    "content": "Create a battle and wait for an opponent to join in",
    "icon": "/img/combatzone/create_battle.png"
  },
  {
    "id": 2,
    "title": "Join Battle",
    "content": "Search an opponent, select and join battle",
    "icon": "/img/combatzone/join_battle.png"
  }
]


const BattleContainer = (props) => {
  const { mode, onClick, selectMode } = props;
  const [warbotClassName, setWarbotClassName] = useState('battle-container')

  useEffect(() => {
    if (mode && selectMode) {
      if (selectMode.id == mode.id) {
        setWarbotClassName('battle-container battle-active')
      } else {
        setWarbotClassName('battle-container')
      }
    }
  }, [mode, selectMode])
  return (
    <div
      className={warbotClassName}
      onClick={onClick}
    >
      <div className="battle-box">
        <span className="battle-title m-2">
          {mode.title}
        </span>
        <span className="battle-content m-2">
          {mode.content}
        </span>
      </div>
      <img src={mode.icon} className="create-img" />
    </div>
  )
}

const Choose = () => {
  const [showConfirm, setShowConfirm] = useState(true);
  const [selectBattleMode, setSelectBattleMode] = useState({});
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  return (
    <div className="combatzone-container">
      <CombatHeader
        title="Create or Join a battle"
        showConfirmButton={true}
        confirmDisable={showConfirm}
        goBack={() => Router.back()}
        onConfirm={() => {
          if(selectBattleMode) {
            if(selectBattleMode.id == 1) {
              Router.push('/combatzone_ui/create')
            } else {
              setShowConfirmModal(true);
            }
          }
        }}
      />
      <div className="container">
        <div className="select-warbot">
          <div className="bot-container">
            <WarBotCard
              card={warbot}
            />
          </div>
          <div className="select-container">
            {
              selectList.map((mode, index) => {
                return (
                  <BattleContainer
                    key={index}
                    mode={mode}
                    onClick={() => {
                      setSelectBattleMode(mode)
                      setShowConfirm(false);
                    }}
                    selectMode={selectBattleMode}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
      <SweetAlert
        custom
        show={showConfirmModal}
        style={{
          background: '#24354F',
          borderRadius: 15
        }}
        title=""
        onConfirm={() => setShowConfirmModal(false)}
        onCancel={() => setShowConfirmModal(false)}
        showCancel={false}
        showConfirm={false}
        closeOnClickOutside={true}
      >
        <div className="confirm-alert-container">
          <img src="img/combatzone/checkout.png" className="confirm-alert-img" />
          <span className="alert-title">
            Contract Interaction
          </span>
          <span className="alert-content">
            Please click the button below to continue
          </span>
          <button
            className="alert-button"
            onClick={() => {
              setShowConfirmModal(false)
              Router.push('/combatzone_ui/join')
            }}
          >
            Approve Contract
          </button>
        </div>
      </SweetAlert>
    </div>
  )
}

export default Choose;