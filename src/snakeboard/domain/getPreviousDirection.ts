import { Direction } from "./constants/Direction";
import { ICoordinate } from "./models/ITile";

export const getPreviousDirection = (
    previous: ICoordinate,
    next: ICoordinate
): Direction => {
    const x = previous.x - next.x;
    const y = previous.y - next.y;
    switch (x) {
        case -1:
            return Direction.Left;
        case 1:
            return Direction.Right;
        default:
            break;
    }

    switch (y) {
        case -1:
            return Direction.Up;
        case 1:
            return Direction.Down;
        default:
            return Direction.Down;
    }
};

export const getShapeDirections = (
    previous: ICoordinate,
    current: ICoordinate,
    next: ICoordinate
): Direction[] => {
    return [
        getPreviousDirection(previous, current),
        getPreviousDirection(next, current),
    ];
};
