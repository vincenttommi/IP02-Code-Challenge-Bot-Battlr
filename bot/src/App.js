import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import './App.css';
import { useState } from 'react';

function App() {

 const [out_put, setOutput] = useState([]);

function getId(incoming){
setOutput(incoming)}
  return (
    <div className="App">
      
      <BotCollection output_id={out_put}/>
      <YourBotArmy incoming={getId}/>
    </div>
  );
}

export default App;
