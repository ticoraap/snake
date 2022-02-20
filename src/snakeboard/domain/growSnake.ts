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

export function growSnake({ head, tail, tiles }: IBoard, direction: Direction) {
    const board = {
        tiles: [...tiles],
        head: { ...head },
        tail: { ...tail },
    };

    const newHeadCoordinate = getNextSnakehead(head, direction);
    const directions = [getPreviousDirection(head, newHeadCoordinate)];

    const newSnakeSegment: ISnakeSegment = {
        type: TileType.Snake,
        ...newHeadCoordinate,
        previous: { ...head },
        next: { ...tail },
        shape: directions,
    };

    // set the new segment, and the head location
    board.tiles[newSnakeSegment.x][newSnakeSegment.y] = newSnakeSegment;
    board.head = newHeadCoordinate;

    // set the previous's next location
    const newPreviousSnakeSegment: ISnakeSegment = {
        ...board.tiles[newSnakeSegment.previous.x][newSnakeSegment.previous.y],
        next: { x: newSnakeSegment.x, y: newSnakeSegment.y },
    } as ISnakeSegment;

    board.tiles[newSnakeSegment.previous.x][newSnakeSegment.previous.y] =
        newPreviousSnakeSegment;

    // set the next's previous location
    const newNextSnakeSegment: ISnakeSegment = {
        ...board.tiles[newSnakeSegment.next.x][newSnakeSegment.next.y],
        previous: { x: newSnakeSegment.x, y: newSnakeSegment.y },
    } as ISnakeSegment;

    board.tiles[newSnakeSegment.next.x][newSnakeSegment.next.y] =
        newNextSnakeSegment;

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

    return board;
}
