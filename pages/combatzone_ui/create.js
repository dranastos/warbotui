import React, { useState, useEffect } from 'react';
import CombatHeader from '../../components/combatzone/CombatHeader';
import Router from "next/router";
import SweetAlert from 'react-bootstrap-sweetalert';

const Create = () => {
  const [showJoinModal, setShowJoinModal] = useState(false);
  return (
    <div className="prepare-container">
      <CombatHeader
        title="Waiting for opponent..."
        subtitle="You created battle ID #834430"
        showConfirmButton={false}
        goBack={() => Router.back()}
        onConfirm={() => {
          setShowJoinModal(true)
        }}
        joinBattle={true}
      />
      <div className="prepare-bottom">
        <div className="prepare-card-footer">
          <div className="join-card">
            <img src="img/combatzone/1.png" className="join-img w-100" />
            <div className="join-card-name">
              <span>Tractor Lv1. 1</span>
            </div>
          </div>
        </div>
      </div>

      <SweetAlert
        custom
        show={showJoinModal}
        style={{
          background: '#24354F',
          borderRadius: 15
        }}
        title=""
        onConfirm={() => setShowJoinModal(false)}
        onCancel={() => setShowJoinModal(false)}
        showCancel={false}
        showConfirm={false}
        closeOnClickOutside={true}
      >
        <div className="confirm-alert-container">
          <img src="img/combatzone/join_battle.png" className="confirm-alert-img" />
          <span className="alert-title">
            Join battle?
          </span>
          <span className="alert-content">
            Do you really wish to join another battle instead? This will remove the battle ID you created from the list of available battles and will prevent players from joining in.
          </span>
          <button
            className="alert-button"
            onClick={() => {
              setShowJoinModal(false)
              Router.push('/combatzone_ui/join')
            }}
          >
            Yes, Join another battle
          </button>
          <button
            className="alert-button-cancel"
            onClick={() => {
              setShowJoinModal(false)
            }}
          >
            No, I'll wait for an opponent
          </button>
        </div>
      </SweetAlert>
    </div>
  )
}

export default Create