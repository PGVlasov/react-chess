import { Colors } from "../Colors";
import logo from "../../assets/black-kong.png";
import { Cell } from "../Cell";

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
    this.logo = null;
    this.name = FigureNames.Figure;
    this.id = Math.random();
  }

  CanMove(target: Cell): boolean {
    return true;
  }

  moveFigure(target: Cell) {}
}
