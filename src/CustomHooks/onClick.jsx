import React, { useState } from 'react'
import calculateWinner from '../Utils/calculateWinner'


function useOnClick (pos, flag) {

    const [board, setBoard] = useState(Array(9).fill("")); 
    const [player, setPlayer] = useState("X");
    const [message, setMessage] = useState("Start"); 
    const [history, setHistory] = useState([])

      const restart  = () => {
        setBoard(Array(9).fill("")); 
        setMessage("Start");
        setPlayer("X");  
    }

    const comTurn = (boardC, player)=>{
      let pos

      do {
         pos = Math.floor(Math.random() * (9 - 0) + 0);

      } while ( boardC[pos] !== "");
     
      const boardCopy = [...boardC];
      boardCopy[pos] = player;
      setBoard(boardCopy);
      

      if (calculateWinner(boardCopy)){
          setMessage(`WON: ${player}`)
          setHistory([...history,player])
          setPlayer("");
          return;
      }

      if (boardCopy.indexOf("")=== -1){
        setMessage("DRAW")
        setPlayer("");
     }else {
        let nextPlayer = (player === "X") ? "O" : "X"
        setPlayer(nextPlayer); 
        setMessage(`Next player: ${nextPlayer}`)
    }

    }


    const click = (pos) => {    

        let nextPlayer
        if (player === "" || board[pos] !== "") {
            return;
        }
        
        const boardCopy = [...board];
        boardCopy[pos] = player;
        setBoard(boardCopy);
        
 
        if (calculateWinner(boardCopy)){
            setMessage(`WON: ${player}`)
            setHistory([...history,player])
            setPlayer("");
            return;
        }

        if (boardCopy.indexOf("")=== -1){
            setMessage("DRAW")
            setPlayer("");
        } else {
            nextPlayer = (player === "X") ? "O" : "X"
            setPlayer(nextPlayer); 
            setMessage(`Next player: ${nextPlayer}`)
           
        }

        if(flag)
        {
          setTimeout( function(){comTurn(boardCopy, nextPlayer)}, 1000)
        }
    }

    return [board,message,history, restart, click]
}

export default useOnClick