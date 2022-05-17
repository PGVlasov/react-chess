import { Cell } from "../models/Cell";

interface cellProps {
  cell: Cell;
}

export const CellComponent: React.FC<cellProps> = ({ cell }) => {
  return <div className={["cell", cell.color].join(" ")}>{cell.figure}</div>;
};
