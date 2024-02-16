
import {configureStore} from  "@reduxjs/toolkit"
import counterReducer from "./slices/TestSlice"

export const store=configureStore({
    reducer:{
        counter:counterReducer
    }
})