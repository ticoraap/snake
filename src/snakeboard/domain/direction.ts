import { Direction } from "./constants/Direction";
import { DirectionOpposite } from "./constants/DirectionOpposite";

let previousDirection = Direction.Up;
let directionQueue: Array<Direction> = [];

function peekLastDirection() {
  if (directionQueue.length) return directionQueue[directionQueue.length - 1];
  return previousDirection;
}

export function setDirection(newDirection: Direction) {
  if (
    newDirection !== peekLastDirection() &&
    newDirection !== DirectionOpposite[peekLastDirection()]
  ) {
    directionQueue.push(newDirection);
  }
}

export function getDirection(): Direction {
  if (directionQueue.length >= 1) {
    previousDirection = directionQueue.shift()!;
  }
  return previousDirection;
}

export function resetDirection() {
  previousDirection = Direction.Up
  directionQueue = [];
}
