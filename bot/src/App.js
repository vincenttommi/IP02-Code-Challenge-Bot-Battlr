import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import './App.css';
import BotCard from './components/BotCard';

import { useEffect ,useState } from 'react';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("")
      .then((response) => response.json())
      .then((bots) => setBots(bots));
  }, []);

  const addToArmy = (bot) => {
    if (!army.includes(bot)) {
      setArmy([...army, bot]);
    }
  };

  const removeFromArmy = (bot) => {
    setArmy(army.filter((b) => b !== bot));
  };

  const dischargeBot = (bot) => {
    fetch(`http://localhost:3002/bots{bot.id}`, {
      method: "DELETE",
    })
      .then(() => {
        setBots(bots.filter((b) => b !== bot));
        setArmy(army.filter((b) => b !== bot));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <h1> My Army</h1>
      <YourBotArmy army={army} removeFromArmy={removeFromArmy}dischargeBot={dischargeBot}
      />
      <BotCollection bots={bots} addToArmy={addToArmy} />
     
    </div>
  );
}

export default App;