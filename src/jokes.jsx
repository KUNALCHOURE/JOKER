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
    smileyConfetti();
  
  }
  

    return(
        <>
        <div className="heading">
          <div className='one'></div>
          <div className="main">
          <h1>JOKER</h1>
          <br />
          <p>Finding smile&#128516;,its just a click away</p>
          </div>
          <div className='two'></div>
        </div>

          <hr />

          <p ><span><h2>{jokes.setup} </h2></span>
           <span> <h2> {jokes.punchline}</h2></span> </p>
          <button onClick={getjoke}>Find a Joke!</button>
        </>
    )
}