import { TileType } from "./constants/BoardElementType";
import { getTilesByType } from "./getTilesByType";
import { IBoard } from "./models/IBoard";
import { IFood } from "./models/ITile";

export function addFood(board: IBoard) {
    const emptyTiles = getTilesByType(board, TileType.Empty);
    const emptyTile = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];

    const food: IFood = {
        ...emptyTile,
        type: TileType.Food,
        color: "green",
    };

    board.tiles[food.x][food.y] = food;

    return board;
}
