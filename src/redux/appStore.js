import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"
import movieReducer from "./slices/movieSlice"
import gptReducer from "./slices/gptSlice"

export const appStore = configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer,
        gpt:gptReducer
    }
})
