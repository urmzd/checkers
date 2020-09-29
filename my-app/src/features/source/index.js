import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { highlight, clear } from '../board'

export const select = createAsyncThunk(
    'source/select',
    async (source, { dispatch, getState }) => {
        const { source: _source } = getState()

        if (Object.keys(_source).length) {
            dispatch(clear({ _source }))
        }

        dispatch(highlight({ source }))
        return { source }
    }
)

const sourceSlice = createSlice({
    name: 'source',
    initialState: {},
    extraReducers: {
        [select.fulfilled]: (state, action) => {
            const { source } = action.payload
            const { x, y } = source
            state.x = x
            state.y = y
        },
    },
})

export default sourceSlice.reducer
