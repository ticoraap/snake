import { Direction } from "./constants/Direction";
import { getNextSnakehead } from "./getNextSnakehead";
import { IBoard } from "./models/IBoard";

export function getNextTile(board: IBoard, direction: Direction) {
    const nextCoordinate = getNextSnakehead(board.head, direction);
    return board.tiles[nextCoordinate.x][nextCoordinate.y]
}
