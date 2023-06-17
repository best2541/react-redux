import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    color: 'red'
}

export const counterSlice = createSlice({
    name: 'counter2',
    initialState,
    reducers: {
        increment2: (state) => {
            state.value += 1
        },
        decrement2: (state) => {
            state.value -= 1
        },
        editColor: (state,action) => {
            state.color = action.payload
        }
    }
})

export const { increment2, decrement2, editColor } = counterSlice.actions
export default counterSlice.reducer