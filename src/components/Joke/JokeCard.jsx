import React, { useState } from 'react'
import axios from 'axios';

export default function JokeCard() {
    const [Joke,setJoke]= useState({})
    async function getFetch(){
        await axios.get('https://api.chucknorris.io/jokes/random')
            .then((res)=>{
                console.log(res.data.value);
                setJoke(res.data)
            })
            .catch((error)=>{console.error('Error fetch joke ',error)})
    }
    return (
    <div className='container'>
        <button className='btn btn-light' onClick={getFetch}>Chuck Norriss Joke</button>
        <h3 className='text-light mt-4'>{Joke.value}</h3>
        <img src={Joke.icon_url} alt="" />
    </div>
  )
}
