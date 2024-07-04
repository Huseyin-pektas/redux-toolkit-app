import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    name: "",
    surname: ""
}

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loginAction: (state, action) => {
            state.value = action.payload

        },
        logoutAction: (state) => {
            state.value = initialState

        }
    }
})
export const { loginAction, logoutAction } = loginSlice.actions

export const loginReducer = loginSlice.reducer