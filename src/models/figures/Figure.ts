import { Colors } from "../Colors";
import logo from "../../assets/black-king.png";
import { Cell } from "../Cell";
import { King } from "./King";

export enum FigureNames {
  Figure = "Фигура",
  Panw = "Пешка",
  Knigth = "Конь",
  Bishoop = "Слон",
  Rook = "Лодья",
  Queen = "Ферзь",
  King = "Король",
}

export class Figure {
  color: Colors;
  logo: typeof logo | null;
  cell: Cell;
  name: FigureNames;
  id: number;

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.name = FigureNames.Figure;
    this.id = Math.random();
  }

  CanMove(target: Cell): boolean {
    if (target.figure?.color === this.color) {
      return false;
    } else if (target.figure?.name === FigureNames.King) {
      return false;
    }
    return true;
  }

  moveFigure(target: Cell) {}
}
