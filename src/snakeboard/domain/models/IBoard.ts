import { ICoordinate, ITile } from "./ITile";

export type ITiles = ITile[][];

export type IBoard = {
    tiles: ITiles
    head: ICoordinate;
    tail: ICoordinate;
};
 