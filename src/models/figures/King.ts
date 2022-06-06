import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/black-king.png";
import whiteLogo from "../../assets/white-king.png";

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.King;
  }
  CanMove(target: Cell): boolean {
    if (!super.CanMove(target)) {
      return false;
    }

    if (this.cell.kingsMove(target)) {
      return true;
    }
    // if (this.cell.isEmptyVertical(target)) {
    //   return true;
    // }
    // if (this.cell.isEmptyHoresontal(target)) {
    //   return true;
    // }
    // if (this.cell.isEmptyDiagonal(target)) {
    //   return true;
    // }
    // if (target.y === this.cell.y + 1 && target.x === this.cell.x + 1) {
    //   return true;
    // }
    return false;
  }
}
