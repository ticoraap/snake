import styled from "@emotion/styled"
import { Direction } from "../domain/constants/Direction"
import { useSnake } from "../domain/useSnake"



export function SnakeGame() {
    const [board, dead] = useSnake()
    return (
        <AspectRatioWrapper>

            <StyledSnakeBoard aria-label="Board">
                {board.tiles.map((column, columnindex) => {
                    return (
                        <StyledSnakeColumn aria-label={`Column ${columnindex}`} key={columnindex}>
                            {column.map((row, rowindex) => {
                                const index = `Column ${columnindex} Row ${rowindex}`
                                return (
                                    row.type === 'snake' ?
                                        <StyledSnakeBlock directions={row.shape} aria-label={`Snake: ${index}`} dead={dead} key={index} /> :
                                        row.type === 'food' ?
                                            <StyledFoodBlock aria-label={`Food ${index}`} key={index} /> :
                                            <StyledEmpty aria-label={`Empty tile: ${index}`} key={index} />

                                )
                            })}
                        </StyledSnakeColumn>
                    )
                })}

            </StyledSnakeBoard>
        </AspectRatioWrapper>
    )
}

const AspectRatioWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const StyledSnakeBoard = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    aspect-ratio: 1;
`

const StyledSnakeColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`

const StyledSnakeBlock = styled.div<{ dead: boolean, directions: Direction[] }>`
    flex-grow: 1;
    background-color: ${(props) => props.dead ? 'red' : 'black'};
    border: 1px solid #eeeeee;
    ${(props) => props.directions.map(direction => {
        switch (direction) {
            case Direction.Left:
                return 'border-left: 1px solid black;'
            case Direction.Right:
                return 'border-right: 1px solid black;'
            case Direction.Down:
                return 'border-bottom: 1px solid black;'
            case Direction.Up:
                return 'border-top: 1px solid black;'
        
            default:
                return '';
        }
    })}

`

const StyledFoodBlock = styled.div`
    flex-grow: 1;
    background-color: green;
    border: 1px solid #eeeeee;
`

const StyledEmpty = styled.div`
    flex-grow: 1;
    border: 1px solid #eeeeee;
`