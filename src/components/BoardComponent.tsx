import React, { useEffect, useState } from "react";
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
    if (
      selectedCell &&
      selectedCell !== cell &&
      selectedCell.figure?.CanMove(cell)
    ) {
      selectedCell.moveFigure(cell);
      setSelectedCell(null);
      updateBoard();
    } else {
      setSelectedCell(cell);
    }
  }

  useEffect(() => {
    highLightCells();
  }, [selectedCell]);

  function highLightCells() {
    board.highLightCells(selectedCell);
    updateBoard();
  }

  function updateBoard() {
    const newBoard = board.getNewBoard();
    setBoard(newBoard);
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
