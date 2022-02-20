import { TileType } from "../constants/BoardElementType";
import { Direction } from "../constants/Direction";

export interface ICoordinate {
    x: number;
    y: number;
}

export interface IEmpty extends ICoordinate {
    type: TileType.Empty;
}

export interface IFood extends ICoordinate {
    type: TileType.Food;
    color: string;
}

export interface ISnakeSegment extends ICoordinate {
    type: TileType.Snake;
    next: ICoordinate;
    previous: ICoordinate;
    shape: Direction[]
}

export type ITile = ISnakeSegment | IFood | IEmpty;
