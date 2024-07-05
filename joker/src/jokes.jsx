import './jokes.css';
export default function Jokes(){
  const url="https://official-joke-api.appspot.com/random_joke";

  let joke=async function getjoke(){
    let res=await fetch(url);
    console.log(res);
  }
    return(
        <>
        <div className="heading">
          <h1>JOKER</h1>
          <p>Finding smile ,its just a click away</p>
          </div>
          <hr />

          <p></p>
          <button>Find a Joke!</button>
        </>
    )
}