import React from 'react'

import { configureStore,combineReducers } from '@reduxjs/toolkit'
import {loginReducer} from "./features/loginSlice"
import { themeReducer } from './features/ThemeeSlice'



const rootReducer = combineReducers({
  loginReducer,
  themeReducer
})


export const store = configureStore({
  reducer:rootReducer
})