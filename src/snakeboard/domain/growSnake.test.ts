import { TileType } from "./constants/BoardElementType";
import { Direction } from "./constants/Direction";
import { growSnake } from "./growSnake";
import { IBoard } from "./models/IBoard";

test("grow the snake one segment up", () => {
    const direction: Direction = Direction.Up;
    const currentBoard: IBoard = {
        head: { x: 1, y: 1 },
        tail: { x: 1, y: 1 },
        tiles: [
            [
                { type: TileType.Empty, x: 0, y: 0 },
                { type: TileType.Empty, x: 0, y: 1 },
                { type: TileType.Empty, x: 0, y: 2 },
            ],
            [
                { type: TileType.Empty, x: 1, y: 0 },
                {
                    type: TileType.Snake,
                    x: 1,
                    y: 1,
                    next: { x: 1, y: 1 },
                    previous: { x: 1, y: 1 },
                    shape: [Direction.Up]
                },
                { type: TileType.Empty, x: 1, y: 2 },
            ],
            [
                { type: TileType.Empty, x: 2, y: 0 },
                { type: TileType.Empty, x: 2, y: 1 },
                { type: TileType.Empty, x: 2, y: 2 },
            ],
        ],
    };

    const expectedBoard: IBoard = {
        head: { x: 1, y: 0 },
        tail: { x: 1, y: 1 },
        tiles: [
            [
                { type: TileType.Empty, x: 0, y: 0 },
                { type: TileType.Empty, x: 0, y: 1 },
                { type: TileType.Empty, x: 0, y: 2 },
            ],
            [
                {
                    type: TileType.Snake,
                    x: 1,
                    y: 0,
                    next: { x: 1, y: 1 },
                    previous: { x: 1, y: 1 },
                    shape: [Direction.Down]
                },
                {
                    type: TileType.Snake,
                    x: 1,
                    y: 1,
                    next: { x: 1, y: 0 },
                    previous: { x: 1, y: 0 },
                    shape: [Direction.Up]
                },
                { type: TileType.Empty, x: 1, y: 2 },
            ],
            [
                { type: TileType.Empty, x: 2, y: 0 },
                { type: TileType.Empty, x: 2, y: 1 },
                { type: TileType.Empty, x: 2, y: 2 },
            ],
        ],
    };

    const result = growSnake(currentBoard, direction);

    expect(result).toStrictEqual(expectedBoard);
});
test.only("grow the snake one segment up and one segment right", () => {
    const currentBoard: IBoard = {
        head: { x: 1, y: 1 },
        tail: { x: 1, y: 1 },
        tiles: [
            [
                { type: TileType.Empty, x: 0, y: 0 },
                { type: TileType.Empty, x: 0, y: 1 },
                { type: TileType.Empty, x: 0, y: 2 },
            ],
            [
                { type: TileType.Empty, x: 1, y: 0 },
                {
                    type: TileType.Snake,
                    x: 1,
                    y: 1,
                    next: { x: 1, y: 1 },
                    previous: { x: 1, y: 1 },
                    shape: [Direction.Up]
                },
                { type: TileType.Empty, x: 1, y: 2 },
            ],
            [
                { type: TileType.Empty, x: 2, y: 0 },
                { type: TileType.Empty, x: 2, y: 1 },
                { type: TileType.Empty, x: 2, y: 2 },
            ],
        ],
    };

    const expectedBoard: IBoard = {
        head: { x: 2, y: 0 },
        tail: { x: 1, y: 1 },
        tiles: [
            [
                { type: TileType.Empty, x: 0, y: 0 },
                { type: TileType.Empty, x: 0, y: 1 },
                { type: TileType.Empty, x: 0, y: 2 }
            ],
            [
                {
                    type: TileType.Snake,
                    x: 1,
                    y: 0,
                    next: { x: 2, y: 0 },
                    previous: { x: 1, y: 1 },
                    shape: [Direction.Down, Direction.Right]
                },
                {
                    type: TileType.Snake,
                    x: 1,
                    y: 1,
                    next: { x: 1, y: 0 },
                    previous: { x: 2, y: 0 },
                    shape: [Direction.Up]
                },
                { type: TileType.Empty, x: 1, y: 2 },
            ],
            [
                { 
                    type: TileType.Snake,
                    x: 2, 
                    y: 0,
                    next: { x: 1, y: 1 },
                    previous: { x: 1, y: 0},
                    shape: [Direction.Left]
                 },
                { type: TileType.Empty, x: 2, y: 1 },
                { type: TileType.Empty, x: 2, y: 2 },
            ],
        ],
    };

    const intermediateBoard = growSnake(currentBoard, Direction.Up);
    const result = growSnake(intermediateBoard, Direction.Right);

    expect(result).toStrictEqual(expectedBoard);
});

test("grow the snake a second segment left", () => {
    const direction: Direction = Direction.Left;
    const currentBoard: IBoard = {
        head: { x: 1, y: 0 },
        tail: { x: 1, y: 1 },
        tiles: [
            [
                { type: TileType.Empty, x: 0, y: 0 },
                { type: TileType.Empty, x: 0, y: 1 },
                { type: TileType.Empty, x: 0, y: 2 },
            ],
            [
                {
                    type: TileType.Snake,
                    x: 1,
                    y: 0,
                    next: { x: 1, y: 1 },
                    previous: { x: 1, y: 1 },
                    shape: [Direction.Up, Direction.Down]
                },
                {
                    type: TileType.Snake,
                    x: 1,
                    y: 1,
                    next: { x: 1, y: 0 },
                    previous: { x: 1, y: 0 },
                    shape: [Direction.Up, Direction.Down]
                },
                { type: TileType.Empty, x: 1, y: 2 },
            ],
            [
                { type: TileType.Empty, x: 2, y: 0 },
                { type: TileType.Empty, x: 2, y: 1 },
                { type: TileType.Empty, x: 2, y: 2 },
            ],
        ],
    };

    const expectedBoard: IBoard = {
        head: { x: 0, y: 0 },
        tail: { x: 1, y: 1 },
        tiles: [
            [
                {
                    type: TileType.Snake,
                    x: 0,
                    y: 0,
                    next: { x: 1, y: 1 },
                    previous: { x: 1, y: 0 },
                    shape: [Direction.Left, Direction.Right]
                },
                { type: TileType.Empty, x: 0, y: 1 },
                { type: TileType.Empty, x: 0, y: 2 },
            ],
            [
                {
                    type: TileType.Snake,
                    x: 1,
                    y: 0,
                    next: { x: 0, y: 0 },
                    previous: { x: 1, y: 1 },
                    shape: [Direction.Down, Direction.Left]
                },
                {
                    type: TileType.Snake,
                    x: 1,
                    y: 1,
                    next: { x: 1, y: 0 },
                    previous: { x: 0, y: 0 },
                    shape: [Direction.Up, Direction.Down]
                },
                { type: TileType.Empty, x: 1, y: 2 },
            ],
            [
                { type: TileType.Empty, x: 2, y: 0 },
                { type: TileType.Empty, x: 2, y: 1 },
                { type: TileType.Empty, x: 2, y: 2 },
            ],
        ],
    };

    const result = growSnake(currentBoard, direction);

    expect(result).toStrictEqual(expectedBoard);
});

test("grow the snake a second segment right", () => {
    const direction: Direction = Direction.Left;
    const currentBoard: IBoard = {
        head: { x: 1, y: 0 },
        tail: { x: 1, y: 1 },
        tiles: [
            [
                { type: TileType.Empty, x: 0, y: 0 },
                { type: TileType.Empty, x: 0, y: 1 },
                { type: TileType.Empty, x: 0, y: 2 },
            ],
            [
                {
                    type: TileType.Snake,
                    x: 1,
                    y: 0,
                    next: { x: 1, y: 1 },
                    previous: { x: 1, y: 1 },
                    shape: [Direction.Up, Direction.Down]
                },
                {
                    type: TileType.Snake,
                    x: 1,
                    y: 1,
                    next: { x: 1, y: 0 },
                    previous: { x: 1, y: 0 },
                    shape: [Direction.Up, Direction.Down]
                },
                { type: TileType.Empty, x: 1, y: 2 },
            ],
            [
                { type: TileType.Empty, x: 2, y: 0 },
                { type: TileType.Empty, x: 2, y: 1 },
                { type: TileType.Empty, x: 2, y: 2 },
            ],
        ],
    };

    const expectedBoard: IBoard = {
        head: { x: 0, y: 0 },
        tail: { x: 1, y: 1 },
        tiles: [
            [
                {
                    type: TileType.Snake,
                    x: 0,
                    y: 0,
                    next: { x: 1, y: 1 },
                    previous: { x: 1, y: 0 },
                    shape: [Direction.Left, Direction.Right]
                },
                { type: TileType.Empty, x: 0, y: 1 },
                { type: TileType.Empty, x: 0, y: 2 },
            ],
            [
                {
                    type: TileType.Snake,
                    x: 1,
                    y: 0,
                    next: { x: 0, y: 0 },
                    previous: { x: 1, y: 1 },
                    shape: [Direction.Down, Direction.Left]
                },
                {
                    type: TileType.Snake,
                    x: 1,
                    y: 1,
                    next: { x: 1, y: 0 },
                    previous: { x: 0, y: 0 },
                    shape: [Direction.Up, Direction.Down]
                },
                { type: TileType.Empty, x: 1, y: 2 },
            ],
            [
                { type: TileType.Empty, x: 2, y: 0 },
                { type: TileType.Empty, x: 2, y: 1 },
                { type: TileType.Empty, x: 2, y: 2 },
            ],
        ],
    };

    const result = growSnake(currentBoard, direction);

    expect(result).toStrictEqual(expectedBoard);
});
