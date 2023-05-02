import React, { useEffect, useState } from 'react'
// import BotCollection from './BotCollection';

const YourBotArmy = (output_id) => {

    const [bot_available,setBot_available] = useState([]);


    useEffect(()=> {
        fetch("http://localhost:8000/bots")
         .then(response => response.json())
         .then(data => setBot_available(data));
     }, []);
    
    
  return (

   <div className='DisplayBots'>

    <h2>vincettommi</h2>



   </div>
  )
}

export default YourBotArmy