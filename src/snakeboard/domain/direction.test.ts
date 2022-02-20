import { Direction } from "./constants/Direction"
import { getDirection, resetDirection, setDirection } from "./direction"

beforeEach(() => {
    resetDirection()
})

test('sets direction left',() => {
    setDirection(Direction.Left)

    expect(getDirection()).toBe(Direction.Left)
})

test('ignores opposite direction',() => {
    setDirection(Direction.Left)
    setDirection(Direction.Right)

    expect(getDirection()).toBe(Direction.Left)
    expect(getDirection()).toBe(Direction.Left)
})

test('queues directions',() => {
    setDirection(Direction.Left)
    setDirection(Direction.Down)
    setDirection(Direction.Right)
    setDirection(Direction.Up)

    expect(getDirection()).toBe(Direction.Left)
    expect(getDirection()).toBe(Direction.Down)
    expect(getDirection()).toBe(Direction.Right)
    expect(getDirection()).toBe(Direction.Up)
})

test('ignores queueing current direction',() => {
    setDirection(Direction.Left)
    setDirection(Direction.Down)
    setDirection(Direction.Down)
    setDirection(Direction.Down)
    setDirection(Direction.Right)

    expect(getDirection()).toBe(Direction.Left)
    expect(getDirection()).toBe(Direction.Down)
    expect(getDirection()).toBe(Direction.Right)
})
