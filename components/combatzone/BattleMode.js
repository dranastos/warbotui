import React from 'react';

const BattleMode = (props) => {
  const { card, onClick } = props;
  return (
    <div
      className="card battle-mode-card m-2"
      onClick={onClick}
    >
      <h5 className="card-header battle-mode-card-header">
        {card.title}
      </h5>
      <div className="card-body battle-mode-card-body">
        <span className="bottom-title">
          {card.id != '1' && 'Coming Soon'}
        </span>
      </div>
    </div>
  )
}

export default BattleMode;