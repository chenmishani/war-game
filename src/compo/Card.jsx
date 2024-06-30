import React from 'react'
import './card.css'

export default function Card(props) {

  const bgcolor=()=>{
    if(props.card<5){
      return <div id='card' style={{backgroundColor:'rgb(202, 202, 23)'}}>
       <div className='num'> {props.card}</div>
      </div>
    }
    else if(props.card>=5 && props.card<10)
    {
      return <div id='card' style={{backgroundColor: 'rgb(241, 162, 14)'}}>
     <div className='num'> {props.card}</div>
    </div>
    }
  
  else if(props.card>=10)
  {
    return <div id='card' style={{backgroundColor:'rgb(109, 13, 13)'}}>
    <div className='num'> {props.card}</div>
  </div>
  }
}

  return (

  bgcolor()
  )
  
}
