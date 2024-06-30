import React, { useState } from 'react'
import './homePage.css'
import card2 from './2.png'
import card3 from './3.png'
import card4 from './4.png'
import card5 from './5.png'
import card6 from './6.png'
import card7 from './7.png'
import card8 from './8.png'
import card9 from './9.png'
import PlayerBoard from './PlayerBoard'


export default function HomePage(props) {

  const [name, setName] = useState('')
  const [flag, setFlag] = useState(false)
  
  const showBoard=()=>{
    if (flag===true){
      
      console.log(props.leaderBoard);
   return <PlayerBoard board= {props.leaderBoard}/>
    }  
  }


   
    
  
  
  const validName = () => {
    if (name.length > 0) {
      props.next(name)
    }
    else {
      alert('error')
    }
  }

 

  return (
    <div id='main'>
      <div>
        <img className='photo2' src={card2} alt="logo" /> <img className='photo' src={card3} alt="logo" />
        <img className='photo' src={card6} alt="logo" /><img className='photo2' src={card7} alt="logo" />
      </div>
      <div id='mainPage'>
        <h2 id='title'>ready for war?</h2>
        <input id='inp' onChange={(e) => { setName(e.target.value) }} type="text" placeholder='Enter your name..' /> <br /> <br />
        <button id='btn1' on onClick={validName}>enter</button> <br /> <br />
        <button onClick={()=>{setFlag(!flag)}}> score Board</button>
        {showBoard()}
      </div>
      <div >
        <img className='photo2' src={card4} alt="logo" /> <img className='photo' src={card5} alt="logo" />
        <img className='photo' src={card8} alt="logo" /><img className='photo2' src={card9} alt="logo" />
      </div>
    </div>
  )
}
