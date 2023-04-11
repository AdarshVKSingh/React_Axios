import React, { useState, useEffect } from "react";
import axios from 'axios';

const App = ()=>{
  const [num,setNum] = useState("1");
  const [name,setName] = useState();
  const [moves,setMoves] = useState();

  useEffect(()=>{
    async function apiCall(){
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      setName(res.data.name);
      setMoves(res.data.moves.length);
    }
    apiCall();
    

  });




  return(
    <>
      <h2>You selected {num}</h2>
       <h2> Name of the pokemon is {name}</h2>
       <h2>{name} has {moves} number of moves</h2>
       <br/>
       <select value={num} onChange={(event)=>{
         setNum(event.target.value);
         console.log(num);
       }}>
         <option value={"1"}>1</option>
         <option value={"2"}>2</option>
         <option value={"3"}>3</option>
         <option value={"4"}>4</option>
         <option value={"5"}>5</option>
       </select>
    </>
  )
}

export default App;