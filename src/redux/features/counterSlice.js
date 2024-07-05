import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0
}

/**
 * burada counter Slice oluşturuyoruz 
 * 3 parametre alır 
 * 1) name, 2) initialstate, 3)recucers
 * 
 */
export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment :(state,action)=>{
            state.value += 1
        },
        decrement :(state,action)=>{
            state.value -= 1
        },
        setDelete :(state,action)=>{
            state.value = action.payload
        }
    }
})

// burası 2. asamadır ve 2 işlem yapacağız
//1 ) reducerlerin altında oluşturduğumuz fonksiyonları export edeceğiz
export const {increment,decrement,setDelete}= counterSlice.actions

// 2) ise counter slice yi export edeceğiz
export default  counterSlice.reducer