import React, {useState, useEffect} from "react";


const BotCollection = ({incoming}) => {

 const [bots,setBots] = useState([]);
 const [vinbot, setVinBot] =useState([]);

//  Fetch the list of bots from the backend API using fetch or a similar method.
// Store the data in a state variable using React's useState hook.

 useEffect(()=> {
    fetch("http://localhost:8000/bots")
     .then(response => response.json())
     .then(data => setBots(data));
 }, []);


function display(event){



   let id = event.target.id
    //given id recieved names 
   let  myVinBotArray = [...vinbot,id]
   //created array an array of id
   let  myVinArray2 = [...new Set(myVinBotArray)]
   //changing state of empty array
   setVinBot(myVinArray2)
   //passing bot array to parent
   incoming(vinbot)
}




//  function dischargebots(){
//     fetch("http://localhost:8000/bots/bots.id", {
//         method="DELETE",
//        .then(() => setBots(bots.filter))   

//     })
// }

  return (
    <div>
        
        <h2>BotCollection</h2>
        {bots.map((bot)=>{
          const{
            id,
            name,
            health,
            damage,
            armor,
            bot_class,
            catchphrase,
            avatar_url,
            created_at,
            updated_at,
          } = bot

          return (

             <div className="card">
                 <div class="card-name">
                 <h3>{name}</h3> 
                 </div>
                 <div class="card-image">
                 <img src={ avatar_url}/>
                 </div>
                 <div class="card-details">

                    <p>{health}</p>
                    <p>{damage}</p>
                    <p>{armor}</p>
                    <p>{armor}</p>
                    <p>{bot_class}</p>
                    <p> {catchphrase}</p>
                    <p> {created_at}</p>
                    <p> {updated_at}</p>

                 </div>
                </div>

          )
        })}

        
        
        </div>
  )
}

export default BotCollection;
