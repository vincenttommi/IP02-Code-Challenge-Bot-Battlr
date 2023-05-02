import React from "react";

function YourBotArmy({ army, removeFromArmy, dischargeBot }) {
  
  
  return (
    <div className="your-bot-army">
      {army.length > 0 ? (
        army.map((bot) => (
          <BotCard
            // key={bot.id}
            // bot={bot}
            // removeFromArmy={removeFromArmy}
            // deleteBot={dischargeBot}
          />
        ))
      ) : (
        <p> You haven't enlisted vincenttommi.</p>
      )}
    </div>
  );
}

export default YourBotArmy;