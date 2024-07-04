import React from 'react'

import { configureStore,combineReducers } from '@reduxjs/toolkit'
import {loginReducer} from "./features/loginSlice"



const rootReducer = combineReducers({
  loginReducer
})


export const store = configureStore({
  reducer:rootReducer
})