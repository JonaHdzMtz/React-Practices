import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.tsx"

const store = configureStore(
    {
        reducer : {
            user : userReducer,
        }
    }
)

export default store;
