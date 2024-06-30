import React from 'react'
import './score.css'

export default function ScorePage(props) {

    const showScore=()=>{
        return <h2 id='showScore' >{props.player.win} - {props.player.lose}</h2>
    }

    const winLose=()=>{
        if(props.player.lastGame===true){
            return <h2 className='winLose'>you win!</h2>
        }
        else{
     return <h1 className='loseWin'>you lose! </h1>
        }
   }

  //  const restart=()=>{
  //    props.nextPage(1)
    
  //  }

  
  return (
    <div id='score'>
      <button id='btnX' onClick={()=>{props.nextPage(0)}}>x</button>
       {winLose()}
      <h2 id='title'><span id='win'> win</span>/<span id='lose'>lose</span> </h2>  
        {showScore()} 
        
        <button className='btn' onClick={()=>{props.next()}}>play again</button>
    </div>
  )
}
