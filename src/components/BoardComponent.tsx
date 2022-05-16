import React from "react";
import { Board } from "../models/Board";
import { CellComponent } from "./CellComponent";

interface boardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

export const BoardComponent: React.FC<boardProps> = ({ board, setBoard }) => {
  return (
    <div className="board">
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <CellComponent cell={cell} key={cell.id} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
