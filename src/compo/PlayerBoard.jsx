import React from 'react';
import './homePage.css'

export default function PlayerBoard(props) {

  return (

    <div className='score'>
  {props.board.map((val)=>{
  return <div> <p>{val.name} | win:{val.win} | lose:{val.lose}</p> </div>
})}
    </div>
  )
}