import { configureStore } from "@reduxjs/toolkit";
import userSlice  from "./Reducer";


export const store = configureStore({
    reducer: {
        user: userSlice
    }
})