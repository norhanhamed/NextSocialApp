import { configureStore } from "@reduxjs/toolkit";
import PostReducer from './features/postSlice'
const myStore = configureStore({

    reducer: {
        PostReducer ,
    }
})

export default myStore;
export type Appstore = ReturnType <typeof myStore.getState >