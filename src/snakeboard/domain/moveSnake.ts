import { getNextSnakehead } from "./getNextSnakehead";
import { Direction } from "./constants/Direction";
import { IBoard } from "./models/IBoard";
import { ISnakeSegment } from "./models/ITile";
import { TileType } from "./constants/BoardElementType";
import {
    getPreviousDirection,
    getShapeDirections,
} from "./getPreviousDirection";
import { isEqualCoordinate } from "./isSameCoordinate";

export function moveSnake({ head, tail, tiles }: IBoard, direction: Direction) {
    const board: IBoard = {
        tiles: [...tiles],
        head: { ...head },
        tail: { ...tail },
    };

    const isOneSegment = head.x === tail.x && head.y === tail.y;

    const newHeadCoordinate = getNextSnakehead(head, direction);
    const directions = [getPreviousDirection(head, newHeadCoordinate)];

    const oldTailSegment = board.tiles[tail.x][tail.y] as ISnakeSegment;
    const newTailSegment =
        board.tiles[oldTailSegment.next.x][oldTailSegment.next.y];

    const newTailCoordinate = oldTailSegment.next;
    if (newTailSegment.type === TileType.Snake) {
        newTailSegment.previous = newHeadCoordinate;
    }
    board.tiles[newTailSegment.x][newTailSegment.y] = newTailSegment;
    board.tail = isOneSegment ? newHeadCoordinate : newTailCoordinate;
    board.tiles[tail.x][tail.y] = { type: TileType.Empty, ...tail };

    const snakeSegment: ISnakeSegment = {
        type: TileType.Snake,
        ...newHeadCoordinate,
        previous: isOneSegment ? newHeadCoordinate : head,
        next: isOneSegment ? newHeadCoordinate : newTailCoordinate,
        shape: directions,
    };

    const oldHeadSegment = board.tiles[head.x][head.y];
    if (oldHeadSegment.type === TileType.Snake) {
        oldHeadSegment.next = newHeadCoordinate;

        oldHeadSegment.shape = isEqualCoordinate(
            oldHeadSegment.previous,
            oldHeadSegment.next
        )
            ? [
                  getPreviousDirection(oldHeadSegment.next, {
                      x: oldHeadSegment.x,
                      y: oldHeadSegment.y,
                  }),
              ]
            : getShapeDirections(
                  oldHeadSegment.previous,
                  { x: oldHeadSegment.x, y: oldHeadSegment.y },
                  oldHeadSegment.next
              );

        board.tiles[head.x][head.y] = oldHeadSegment;
    }

    board.tiles[newHeadCoordinate.x][newHeadCoordinate.y] = snakeSegment;
    board.head = newHeadCoordinate;

    return board;
}
