import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "dark"
}

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.value = action.payload
            
        },
        clearInputValue: () => ''
    }
})

export const themeReducer = themeSlice.reducer
export const { setTheme,clearInputValue } = themeSlice.actions