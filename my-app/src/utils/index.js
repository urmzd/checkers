import { SIZE } from '../constants'

export const initialBoard = () => {
    let Board = []

    for (let row = 0; row < SIZE; row++) {
        let piece
        let color
        let team
        let Row = []

        for (let col = 0; col < SIZE; col++) {
            color = row % 2 ^ col % 2

            if (row <= 2) {
                team = 0
            } else if (row >= 5) {
                team = 1
            } else {
                team = 2
            }

            if (team <= 1 && color) {
                piece = {
                    active: false,
                    king: false,
                    team: !!team,
                }
            } else {
                piece = false
            }

            Row.push({
                x: col,
                y: row,
                active: false,
                color: !!color,
                piece: piece,
            })
        }

        Board.push(Row)
    }

    return Board
}

export const inBound = (x, y) => {
    return x < SIZE && x >= 0 && y < SIZE && y >= 0
}

export const validMove = ({ x, y }, moves) => {
    return !!moves.filter((moves) => {
        return moves.x === x && moves.y === y
    }).length
}

export const getMoves = ({ x, y }, board) => {
    const possibleMoves = []
    const piece = board[y][x].piece

    const xArr = [-1, 1]
    const yArr = piece.king ? [-1, 1] : piece.team ? [-1] : [1]

    for (const yCheck of yArr) {
        for (const xCheck of xArr) {
            let xTemp = x + xCheck
            let yTemp = y + yCheck

            if (!inBound(xTemp, yTemp)) {
                continue
            }

            const pieceCheck = board[yTemp][xTemp].piece

            if (pieceCheck) {
                if (pieceCheck.team !== piece.team) {
                    xTemp = x + 2 * xCheck
                    yTemp = y + 2 * yCheck

                    if (!inBound(xTemp, yTemp) || board[yTemp][xTemp].piece) {
                        continue
                    }
                } else {
                    continue
                }
            }

            possibleMoves.push({
                x: xTemp,
                y: yTemp,
            })
        }
    }

    return possibleMoves
}
