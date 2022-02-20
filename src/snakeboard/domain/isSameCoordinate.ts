import { ICoordinate } from "./models/ITile";

export function isEqualCoordinate(firstCoordinate: ICoordinate, secondCoordinate: ICoordinate){
    return firstCoordinate.x === secondCoordinate.x && firstCoordinate.y === secondCoordinate.y
}