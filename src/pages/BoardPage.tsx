import { useEffect, useState } from "react";
import { BoardComponent } from "../components/BoardComponent";
import { Board } from "../models/Board";

export const BoardPage = () => {
  const [board, setBoard] = useState(new Board());

  useEffect(() => {
    restart();
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }
  return <BoardComponent board={board} setBoard={setBoard} />;
};
