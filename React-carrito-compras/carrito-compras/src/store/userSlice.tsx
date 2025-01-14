import {createSlice} from '@reduxjs/toolkit';

interface userState {
    username : string ,
    email : string,
}
const initialState : userState ={
    username : "",
    email: ""
} 

const userSlice = createSlice (
    {
        name : "user",
        initialState,
        reducers : {
            "setUser": (state, action) =>{
                const {email,username} = action.payload;
                state.email = email;
                state.username = username;
            }
        }
    }
)

export const {setUser} = userSlice.actions;
export default userSlice.reducer;