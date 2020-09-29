import { createSlice } from '@reduxjs/toolkit'

const turnReducer = createSlice({
    name: 'turn',
    initialState: false,
    reducers: {
        change: (state) => {
            return !state
        },
    },
})

export const { change } = turnReducer.actions

export default turnReducer.reducer
