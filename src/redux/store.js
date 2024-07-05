import React from 'react'

import { configureStore,combineReducers } from '@reduxjs/toolkit'
import {loginReducer} from "./features/loginSlice"
import { themeReducer } from './features/ThemeeSlice'
import counterReducer from './features/counterSlice'


const rootReducer = combineReducers({
  loginReducer,
  themeReducer,
  counterReducer
})


export const store = configureStore({
  reducer:rootReducer
})