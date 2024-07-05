import React from 'react'

import { configureStore,combineReducers } from '@reduxjs/toolkit'
import {loginReducer} from "./features/loginSlice"
import { themeReducer } from './features/ThemeeSlice'
import counterReducer from './features/counterSlice'
import todosReducer from "./features/todoSlice"

const rootReducer = combineReducers({
  loginReducer,
  themeReducer,
  counterReducer,
  todosReducer
})


export const store = configureStore({
  reducer:rootReducer
})