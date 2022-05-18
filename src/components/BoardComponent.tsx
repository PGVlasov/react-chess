import React, { useState } from "react";
import { Board } from "../models/Board";
import { Cell } from "../models/Cell";
import { CellComponent } from "./CellComponent";

interface boardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

export const BoardComponent: React.FC<boardProps> = ({ board, setBoard }) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  function click(cell: Cell) {
    if (cell.figure) {
      setSelectedCell(cell);
    }
  }

  function highLightCells() {
    // board.highLightCells();
  }

  return (
    <div className="board">
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <CellComponent
              click={click}
              cell={cell}
              key={cell.id}
              selected={
                cell.x === selectedCell?.x && cell.y === selectedCell?.y
              }
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
