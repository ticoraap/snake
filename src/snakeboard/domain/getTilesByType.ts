import { TileType } from "./constants/BoardElementType";
import { IBoard } from "./models/IBoard";

export function getTilesByType(board: IBoard, tileType: TileType) {
    return board.tiles.flatMap((column) => 
        column.filter(({ type }) => type === tileType)
    );
}
