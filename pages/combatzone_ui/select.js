import React, { useState, useEffect } from 'react';
import Checkbox from "react-custom-checkbox";
import SweetAlert from 'react-bootstrap-sweetalert';
import * as Icon from "react-icons/fi";

import CombatHeader from '../../components/combatzone/CombatHeader';
import WarBotCard from '../../components/combatzone/WarBotCard';
import Router from "next/router";

const warbotCardList = [
  {
    "id": 1,
    "img": "/img/combatzone/1.png",
    "title": "Renegade",
    "settingValue": "#31226234"
  },
  {
    "id": 2,
    "img": "/img/combatzone/2.png",
    "title": "Renegade",
    "settingValue": "#31226234"
  },
  {
    "id": 3,
    "img": "/img/combatzone/3.png",
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
  const { checked, label, onChange } = props;
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
              cursor: 'pointer'
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
          cursor: 'pointer !important'
        }}
        labelStyle={{
          margin: '0px 20px 0px 10px',
          color: 'white',
          fontFamily: 'Teko',
          fontSize: '26px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
        size={40}
        label={label}
        onChange={onChange}
      />
    </div>
  )
}

const SelectWarBot = () => {
  const [showConfirm, setShowConfirm] = useState(true);
  const [selectWarbot, setSelectWarbot] = useState({});
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  return (
    <div className="combatzone-container">
      <CombatHeader
        title="Select your Warbot"
        showConfirmButton={true}
        confirmDisable={showConfirm}
        goBack={() => Router.back()}
        onConfirm={() => {
          setShowConfirmModal(true);
        }}
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
                    key={index}
                    checked={false}
                    label={check.label}
                    onChange={(checked) => { }}
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
                    onClick={() => {
                      setSelectWarbot(warbot);
                      setShowConfirm(false);
                    }}
                    card={warbot}
                    selectWarbot={selectWarbot}
                  />
                </div>
              )
            })
          }
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
              Router.push('/combatzone_ui/choose')
            }}
          >
            Approve Contract
          </button>
        </div>
      </SweetAlert>
    </div>
  )
}

export default SelectWarBot;