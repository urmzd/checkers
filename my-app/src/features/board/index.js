import { createSlice } from '@reduxjs/toolkit'
import { initialBoard, getMoves } from '../../utils'

const boardSlice = createSlice({
    name: 'board',
    initialState: initialBoard(),
    reducers: {
        highlight: (state, action) => {
            const { source } = action.payload
            const { x, y } = source
            state[y][x].piece.active = true

            const moves = getMoves(source, state)

            for (const move of moves) {
                const { x, y } = move
                state[y][x].active = true
            }
        },
        clear: (state, action) => {
            const { _source } = action.payload
            const { x, y } = _source

            state[y][x].piece.active = false

            const moves = getMoves(_source, state)

            for (const move of moves) {
                const { x, y } = move
                state[y][x].active = false
            }
        },
        move: (state, action) => {
            const { source, destination } = action.payload
            const { x: x_0, y: y_0 } = source
            const { x: x_1, y: y_1 } = destination

            const piece = state[y_0][x_0].piece

            state[y_1][x_1].piece = piece
            state[y_0][x_0].piece = false
        },
    },
})

export const { highlight, clear, move } = boardSlice.actions

export default boardSlice.reducer
