import React, { useState, useEffect } from 'react';
import CombatHeader from '../../components/combatzone/CombatHeader';

const Prepare = () => {
  const [myReadyStatus, setMyReadyStatus] = useState("/img/combatzone/unready.png");
  const [oppReadyStatus, setOppReadyStatus] = useState("/img/combatzone/unready.png");
  const [readyTitle, setReadyTitle] = useState("Prepare to battle");
  const [readySubTitle, setReadySubTitle] = useState("Press the green button when you're ready");

  return (
    <div className="prepare-container">
      <CombatHeader
        onlyTitle={true}
        title={readyTitle}
        subtitle={readySubTitle}
      />
      <div className="container">
        <div className="vs-container mt-5">
          <div className="me-container">
            <img src="/img/combatzone/tank1.png" className="my-tank" />
          </div>
          <div className="vs">
            <span>VS.</span>
          </div>
          <div className="opponent-container">
            <img src="/img/combatzone/tank2.png" className="my-tank" />

          </div>
        </div>

        <div className="ready-container">
          <div className="ready-status">
            <img src={myReadyStatus} className="ready-img" />
            Tractor Lvl. 1
          </div>
          <div className="ready-status">
            Aerial Lvl. 1
            <img src={oppReadyStatus} className="ready-img" />
          </div>
        </div>
      </div>
      <div className="prepare-bottom">
        <button 
          className="ready-btn"
          onClick={() => {
            setMyReadyStatus("/img/combatzone/ready.png")
            setReadyTitle("Opponent not ready");
            setReadySubTitle("Waiting for your opponent to get ready.");
          }}
        >
          <img src='img/combatzone/confirm_success.png' className="confirm-icon" />
          Ready
        </button>
      </div>
    </div>
  )
}

export default Prepare