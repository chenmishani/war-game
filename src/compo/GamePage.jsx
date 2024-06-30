import React,{useState} from 'react'
import Card from './Card'
import './gamePage.css'




let playerPoint=0,comPoint=0;
let temp=0
export default function GamePage(props) {
 
    const [cardIndex,setCardIndex]=useState(0)
   

    
    const nextCard=()=>{
       
        if( props.computer.cardArr[cardIndex] > props.player.cardArr[cardIndex])
           {
               comPoint++;
               
                       
           }
           else if(props.computer.cardArr[cardIndex] < props.player.cardArr[cardIndex])
           {
            playerPoint++;
           
           }
          
       temp++
        if(cardIndex===25){
            if(playerPoint>comPoint){
                props.player.lose++;
                props.player.lastGame=false
            }
            else if(playerPoint<comPoint){
                props.player.win++;
                props.player.lastGame=true
            }
            props.nextPage(2)
            props.player.games++;
            comPoint=0
            playerPoint=0
            temp=0
        } 
        else{
            
            setCardIndex(cardIndex+1);
           
        } 
        
    }
    
    return (
        
    <div className='mainPage'>
        <div id='lap'>N.O <br />{temp}</div>
        <div style={{width:'250px'}}>
        <p className='computer'>{props.computer.name} <span className='point'> {comPoint}</span> </p>
        <Card card={props.computer.cardArr[cardIndex]}/>
        <Card card= {props.player.cardArr[cardIndex]}/>
        <p className='player'>{props.player.name} <span className='point'>{playerPoint} </span></p>
        </div>
        <div>
        <button id='btn' onClick={nextCard} >NEXT</button> <br />
        
        </div>
        
    </div>

  )
  
}
