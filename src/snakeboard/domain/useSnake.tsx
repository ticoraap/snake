import { useEffect, useState } from "react"
import { TileType } from "./constants/BoardElementType";
import { Direction } from "./constants/Direction";
import { GAME_TICK_SPEED } from "./constants/GameTickSpeed";
import { createBoard } from "./createBoard";
import { setDirection, getDirection } from "./direction";
import { growSnake } from "./growSnake";
import { moveSnake } from "./moveSnake";
import { addFood } from "./addFood";
import { getNextTile } from "./getNextTile";
import { useOnKeyDown } from "./useOnKeyDown";
import { IBoard } from "./models/IBoard";
import { useSettingsStore } from "./settingsStore";


export function useSnake(): [IBoard, boolean] {

    const [board, setBoard] = useState(createBoard());

    const [dead, setDead] = useState(false)
    const [isModalVisible, setModalVisible] = useSettingsStore().modal


    useOnKeyDown([" "], () => setModalVisible(!isModalVisible));
    useOnKeyDown(["w", "ArrowUp"], () => setDirection(Direction.Up));
    useOnKeyDown(["a", "ArrowLeft"], () => setDirection(Direction.Left));
    useOnKeyDown(["s", "ArrowDown"], () => setDirection(Direction.Down));
    useOnKeyDown(["d", "ArrowRight"], () => setDirection(Direction.Right));

    function iterate() {
        const direction = getDirection()
        const nextTile = getNextTile(board, direction)

        switch (nextTile.type) {
            case TileType.Empty:
                setBoard(moveSnake(board, direction))
                break;
            case TileType.Food:
                setBoard(addFood(growSnake(board, direction)))
                break;
            case TileType.Snake:
                setDead(true)
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isModalVisible)
            iterate()
        }, GAME_TICK_SPEED);

        return () => {
            clearTimeout(timeout)
        };

    });



    return [board, dead]
}
