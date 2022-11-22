import { useState } from "react";
import { range } from "../util/array";
import { Keyboard } from "./Keyboard";

const WORD_LENGHT = 5
const ROWS = 6;

type CellState ={
  letter: string;
  variant?: 'correct' | 'semi-correct' | 'incorrect' | 'undefined'
}

type Board = CellState[][];

const deepCopyBoard = (board: Board): Board => JSON.parse(JSON.stringify(board))

const getEmptyCell = () => ({
  letter: "",
})


const getEmptyBoard = () => 
range(ROWS).map(() => range(WORD_LENGHT).map(getEmptyCell))

export const Field = () => {
  const [board, setBoard] = useState<Board>(getEmptyBoard());


  const handleBackspace = () => {
    console.log("bsp")
  }

  const handlePressed = (letter) => {
    setBoard((prev) => {
      const nextState = deepCopyBoard(prev);
      nextState[0][0].letter;
      return nextState;
    })
  }
  return (
    <>
      <div className="board">
        {board.map((row,rowIndex) => (
          <div key={rowIndex} className="board-row">
            {row.map((cell, index) => (
              <div className={`cell ${cell.variant}`} key={index}>
                {cell.letter}
              </div>
            ))}
          </div>
        ))}
      </div>
      <Keyboard onPressed={handlePressed} onBackspace={handleBackspace}/>
    </>
  )
}