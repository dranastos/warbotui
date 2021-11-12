import React, { useState } from 'react';
import CombatHeader from '../../components/combatzone/CombatHeader';
import Router from "next/router";

const battleList = [
  {
    "battleId": "#834431",
    "player": "0x1a2b3c4d...6f7g8h9",
    "type": "Tractor",
    "level": "9"
  },
  {
    "battleId": "#834432",
    "player": "0x1a2b3c4d...6f7g8h9",
    "type": "Tractor",
    "level": "9"
  },
  {
    "battleId": "#834433",
    "player": "0x1a2b3c4d...6f7g8h9",
    "type": "Tractor",
    "level": "9"
  },
  {
    "battleId": "#834434",
    "player": "0x1a2b3c4d...6f7g8h9",
    "type": "Tractor",
    "level": "9"
  },
  {
    "battleId": "#834435",
    "player": "0x1a2b3c4d...6f7g8h9",
    "type": "Tractor",
    "level": "9"
  },
  {
    "battleId": "#834436",
    "player": "0x1a2b3c4d...6f7g8h9",
    "type": "Tractor",
    "level": "9"
  },
  {
    "battleId": "#834437",
    "player": "0x1a2b3c4d...6f7g8h9",
    "type": "Tractor",
    "level": "9"
  },
  {
    "battleId": "#834438",
    "player": "0x1a2b3c4d...6f7g8h9",
    "type": "Tractor",
    "level": "9"
  },
  {
    "battleId": "#834439",
    "player": "0x1a2b3c4d...6f7g8h9",
    "type": "Tractor",
    "level": "9"
  },
  {
    "battleId": "#834440",
    "player": "0x1a2b3c4d...6f7g8h9",
    "type": "Tractor",
    "level": "9"
  },
]

const JoinBattle = () => {
  const [showConfirm, setShowConfirm] = useState(true);
  const [selectRow, setSelectRow] = useState(null);

  return (
    <div className="combatzone-container">
      <CombatHeader
        title="Choose an opponent..."
        subtitle="Join a battle from the list below."
        showConfirmButton={true}
        confirmDisable={showConfirm}
        goBack={() => Router.back()}
        onConfirm={() => {
          Router.push('/combatzone_ui/prepare');
        }}
      />
      <div className="container">
        <div className="row justify-content-center align-items-start">
          <div className="col-12 col-md-4 col-lg-3">
            <div className="join-card">
              <img src="img/combatzone/1.png" className="join-img w-100" />
              <div className="join-card-name">
                <span>Tractor Lv1. 1</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-9">
            <div className="available">
              <div className="available-num">
                <img src="img/combatzone/green_dot.png" className="available-img" />
                <span>25 available battles</span>
              </div>
              <button className="refresh-btn">
                <img src="img/combatzone/refresh.png" />
                <span>Refresh</span>
              </button>
            </div>

            <div className="join-table-container">
              <div className="join-table-header">
                <div className="battle-id">
                  Battle ID #
                </div>
                <div className="battle-player">
                  Player
                </div>
                <div className="battle-warbot-type">
                  Warbot Type
                </div>
                <div className="battle-level">
                  Level
                </div>
                <div className="battle-control">
                </div>
              </div>
              <div className="join-table-body">
                {
                  battleList.map((battle, index) => {
                    let rowClasses = "join-table-row";
                    let btnClasses = "battle-btn";
                    let btnTitle = "Select battle";
                    if(selectRow) {
                      if(selectRow.battleId == battle.battleId) {
                        rowClasses = "join-table-row selected";
                        btnClasses = "battle-btn";
                        btnTitle = "Deselect battle";
                      } else {
                        btnClasses = "battle-btn-unselect"
                      }
                    }
                    return (
                      <div 
                        key={index} 
                        className={rowClasses}
                      >
                        <div className="battle-id-row">
                          <span>{battle.battleId}</span>
                        </div>
                        <div className="battle-player-row">
                          <span>{battle.player}</span>
                        </div>
                        <div className="battle-warbot-type-row">
                          <span>{battle.type}</span>
                        </div>
                        <div className="battle-level-row">
                          <span>{battle.level}</span>
                        </div>
                        <div className="battle-control-row">
                          <button 
                            className={btnClasses}
                            onClick={() => {
                              setSelectRow(battle)
                              setShowConfirm(false);
                            }}
                          >
                            {btnTitle}
                          </button>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinBattle