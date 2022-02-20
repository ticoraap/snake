import { TileType } from "./constants/BoardElementType";
import { getTilesByType } from "./getTilesByType";
import { IBoard } from "./models/IBoard";
import { IEmpty, ISnakeSegment } from "./models/ITile";

test("returns only empty board elements", () => {
    const emptyElement: IEmpty = {
        type: TileType.Empty,
        x: 4,
        y: 5,
    };

    const snakeElement: ISnakeSegment = {
        previous: { x: 4, y: 5 },
        next: { x: 4, y: 5 },
        type: TileType.Snake,
        x: 4,
        y: 5,
    };

    const board: IBoard = {
        tiles: [
            [emptyElement, emptyElement, emptyElement, snakeElement],
            [
                emptyElement,
                snakeElement,
                emptyElement,
                emptyElement,
                snakeElement,
            ],
            [emptyElement],
        ],
        head: snakeElement,
        tail: snakeElement,
    };

    const expectedReturnValue = [
        emptyElement,
        emptyElement,
        emptyElement,
        emptyElement,
        emptyElement,
        emptyElement,
        emptyElement,
    ];

    const returnValue = getTilesByType(board, TileType.Empty);

    expect(returnValue).toEqual(expectedReturnValue);
});
