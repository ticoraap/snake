import { Direction } from "./constants/Direction"
import { ICoordinate } from "./models/ITile"

export function getNextSnakehead({ x, y }: ICoordinate, direction: Direction): ICoordinate {
        switch (direction) {
        case Direction.Up:
            return { x, y: y - 1 }
        case Direction.Down:
            return { x, y: y + 1 }
        case Direction.Left:
            return { x: x - 1, y }
        case Direction.Right:
            return { x: x + 1, y }
        default:
            return { x, y };
    }
}