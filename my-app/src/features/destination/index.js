import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { move, clear } from '../board'

export const select = createAsyncThunk(
    'destination/select',
    async (destination, { dispatch, getState }) => {
        const { source } = getState()
        const _source = source

        dispatch(clear({ _source }))
        dispatch(move({ source, destination }))
        return { destination }
    }
)
const destinationSlice = createSlice({
    name: 'destination',
    initialState: {},
    reducers: {
        [select.fulfilled]: (state, action) => {
            const { destination } = action.payload
            const { x, y } = destination
            state.x = x
            state.y = y
        },
    },
})

export default destinationSlice.reducer
