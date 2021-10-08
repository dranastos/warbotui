import React from 'react';

const StatsItem = (props) => {
  const {src, value} = props;
  return (
    <div className="stats-item-container">
      <img src={src} className="item-img" />
      <span className="item-value">{value}</span>
    </div>
  )
}

const WarBotCard = (props) => {
  const { onClick, card } = props;
  return (
    <div 
      className="card warbot-card"
      onClick={onClick}
    >
      <img 
        className="card-img-top warbot-card-img" 
        src={card.img} 
      />
      
      <div className="card-body warbot-card-body">
        <div className="card-inner">
          <h5 className="card-title warbot-card-inner-title">
            {card.title}
          </h5>
          <div className="warbot-card-inner">
            <img 
              src="img/combatzone/setting.png" 
              className="warbot-card-inner-img" 
            />
            <span className="warbot-card-inner-text">
              {card.settingValue}
            </span>
          </div>
        </div>
        <img 
          src="/img/combatzone/heart.png" 
          className="warbot-card-body-img" 
        />
      </div>
      
      <div className="card-footer warbot-card-footer">
        <span className="warbot-card-footer-title">
          Stats
        </span>
        <div className="warbot-card-footer-text">
          <StatsItem
            src="img/combatzone/heart_green.png"
            value={75}
          />
          <StatsItem
            src="img/combatzone/defend.png"
            value={75}
          />
          <StatsItem
            src="img/combatzone/fire.png"
            value={75}
          />
          <StatsItem
            src="img/combatzone/forward.png"
            value={75}
          />
        </div>
      </div>
    </div>
  )
}

export default WarBotCard;