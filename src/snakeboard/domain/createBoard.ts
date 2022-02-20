import { TileType } from "./constants/BoardElementType";
import { Direction } from "./constants/Direction";
import { IBoard, ITiles } from "./models/IBoard";
import { IFood, ISnakeSegment } from "./models/ITile";

export function createBoard(size: number = 10): IBoard {
    const tiles: ITiles = new Array(size).fill(0).map((_, x) =>
        new Array(size).fill(0).map((_, y) => ({
            x,
            y,
            type: TileType.Empty,
        }))
    );

    const startSnake: ISnakeSegment = {
        type: TileType.Snake,
        x: 5,
        y: 5,
        next: { x: 5, y: 5 },
        previous: { x: 5, y: 5 },
        shape: [Direction.Up, Direction.Down]
    };

    const startFood: IFood = {
        type: TileType.Food,
        x: 4,
        y: 5,
        color: "green",
    };

    tiles[startSnake.x][startSnake.y] = startSnake;
    tiles[startFood.x][startFood.y] = startFood;

    const board = {
        tiles,
        head: { x: 5, y: 5 },
        tail: { x: 5, y: 5 },
    };

    return board;
}
