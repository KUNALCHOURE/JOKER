import { useState } from 'react';
import './jokes.css';
export default function Jokes(){
  const url="https://official-joke-api.appspot.com/random_joke";
const [jokes,setjoke]=useState({setup:"",punchline:""});
  let getjoke=async ()=>{
    let res=await fetch(url);
    let jsonres=await res.json();
    console.log(jsonres);
    setjoke({
      setup:jsonres.setup,
      punchline:jsonres.punchline
    });
    console.log(jokes);
  
  }
    return(
        <>
        <div className="heading">
          <h1>JOKER</h1>
          <p>Finding smile ,its just a click away</p>
          </div>
          <hr />

          <p >SETUP:{jokes.setup} <br />PUNCHLINE:{jokes.punchline} </p>
          <button onClick={getjoke}>Find a Joke!</button>
        </>
    )
}