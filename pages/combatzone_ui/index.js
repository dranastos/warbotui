import React from 'react';
import CombatHeader from '../../components/combatzone/CombatHeader';
import BattleMode from '../../components/combatzone/BattleMode';
import Router from "next/router";

const cardList = [
  { "id": 1, "title": "1v1 Battle" },
  { "id": 2, "title": "Deathmatch" },
  { "id": 3, "title": "Domination" }
]

const Combat = () => {
  return (
    <div className="combatzone-container">
      <CombatHeader
        title="Choose Battle Mode"
        showConfirmButton={false}
        confirmDisable={true}
        goBack={() => Router.back()}
      />
      <div className="container">
        <div className="row p-5">
          {
            cardList.map((card, index) => {
              return (
                <div key={index} className="col-lg-4">
                  <BattleMode
                    card={card}
                    onClick={() => Router.push("/combatzone_ui/select")}
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

export default Combat;