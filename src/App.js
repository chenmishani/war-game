import React, { useState } from 'react';
import './App.css';
import HomePage from './compo/HomePage';
import GamePage from './compo/GamePage';
import ScorePage from './compo/ScorePage';



let player, computer;
let playerBoard=[]

function App() {
  
  const [page, setpage] = useState(0)
  const showPage = () => {
    if (page === 0) {
      return <HomePage next={initGame} player={player} leaderBoard={playerBoard} />
      
    }
    else if (page === 1) {
      return <GamePage player={player} computer={computer} nextPage={setpage}/>
    }
    else {
      return <ScorePage next={restart} player={player}  nextPage={setpage}/>
    }
  }

 
 
// const boardPlayer=()=>{
//   return playerBoard
// }



  const initGame = (name) => {
   
    let fullDec = new CardDeck()
    let playerDeck = [], comDeck = [];
    for (let i = 0; i < 26; i++) {
      playerDeck.push(fullDec.dealCard());
      comDeck.push(fullDec.dealCard());
    }
    player = new Player(name, playerDeck)
    computer = new Player('computer', comDeck)
    playerBoard.push(player)
   
    setpage(1);
  }

const  restart = ()=>{
   let playerDeck = [], comDeck = [];
  let fullDec = new CardDeck()
   for (let i = 0; i < 26; i++) {
    playerDeck.push(fullDec.dealCard());
    comDeck.push(fullDec.dealCard());
   }
   player.cardArr=playerDeck
   computer.cardArr=comDeck
  setpage(1);

}



  return (
    <div className="App">
      {showPage()}
    </div>
  );
}

export default App;

class Player {
  name = '';
  win = 0;
  lose = 0;
  games = 0;
  lastGame=false;
  cardArr = [];

  constructor(name, cards) {
    this.name = name;
    this.cardArr = cards;
  }
}

class CardDeck {
  cards = [];

  constructor() {
    this.initCard()
  }
  initCard() {
    for (let i = 1; i < 14; i++) {
      for (let j = 0; j < 4; j++) {
        this.cards.push(i)
      }
    }
  }

  dealCard() {
    let rand = Math.floor(Math.random() * this.cards.length)
    let card = this.cards.splice(rand, 1)
    return card[0]
  }
}