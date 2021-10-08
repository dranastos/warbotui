import React, { useState, useEffect } from 'react';
import Checkbox from "react-custom-checkbox";
import * as Icon from "react-icons/fi";
import CombatHeader from '../../components/combatzone/CombatHeader';
import WarBotCard from '../../components/combatzone/WarBotCard';
import Router from "next/router";

const warbotCardList = [
  {
    "img": "/img/combatzone/1.png",
    "title": "Renegade",
    "settingValue": "#31226234"
  },
  {
    "img": "/img/combatzone/2.png",
    "title": "Renegade",
    "settingValue": "#31226234"
  },
  {
    "img": "/img/combatzone/3.png",
    "title": "Renegade",
    "settingValue": "#31226234"
  },
  {
    "img": "/img/combatzone/4.png",
    "title": "Renegade",
    "settingValue": "#31226234"
  },
  {
    "img": "/img/combatzone/1.png",
    "title": "Renegade",
    "settingValue": "#31226234"
  },
  {
    "img": "/img/combatzone/2.png",
    "title": "Renegade",
    "settingValue": "#31226234"
  }
]

const checkList = [
  {
    "id": 1,
    "label": "Tractor"
  },
  {
    "id": 2,
    "label": "Aerial"
  },
  {
    "id": 3,
    "label": "Walker"
  }
]

const CheckBox = (props) => {
  const {checked, label, onChange} = props; 
  return (
    <div className="checkbox-container">
      <Checkbox
        checked={checked}
        icon={
          <div
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: "transparent",
              alignSelf: "stretch",
            }}
          >
            <Icon.FiCheck color="#71EEFF" size={40} />
          </div>
        }
        borderColor="#131D2D"
        borderWidth={2}
        borderRadius={5}
        style={{ 
          overflow: 'hidden', 
          backgroundColor: '#131D2D', 
        }}
        labelStyle={{ 
          margin: '0px 20px 0px 10px', 
          color: 'white',
          fontFamily: 'Teko',
          fontSize: '26px',
          fontWeight: 'bold',
        }}
        size={40}
        label={label}
        onChange={onChange}
      />
    </div>
  )
}

const SelectWarBot = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  return (
    <div className="combatzone-container">
      <CombatHeader
        title="Select your Warbot"
        showConfirmButton={true}
        confirmDisable={showConfirm}
        goBack={() => Router.back()}
      />
      <div className="container">
        <div className="warbot-checkbox-container">
          <div className="warbot-count">
            <span className="warbot-count-prefix">You have</span>
            <span className="warbot-count-suffix">6 Warbots</span>
          </div>
          <div className="checkbox-list">
            {
              checkList.map((check, index) => {
                return (
                  <CheckBox 
                    checked={false}
                    label={check.label}
                    onChange={(checked) => {}}
                  />
                )
              })
            }
          </div>
        </div>
        <div className="row">
          {
            warbotCardList.map((warbot, index) => {
              return (
                <div className="col-md-12 col-lg-6 col-xl-4" key={index}>
                  <WarBotCard
                    onClick={() => { }}
                    card={warbot}
                  />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default SelectWarBot;