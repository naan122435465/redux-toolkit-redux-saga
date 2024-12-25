import { createSlice } from "@reduxjs/toolkit";

const users = createSlice({
    name: 'users',
    initialState: [
        { id: 0,
            name: '',
            email: '',
            password: '',}
    ],
    reducers: {
        getUsersSlice: (state, action) => {
             state = action.payload;
            return state;
        },
        addUserSlice: (state, action) => {
            console.log(action.payload)
             state.push(action.payload);
             return state;
            
        },
        editUserSlice: (state, action) => {
            console.log("shkdjghksdg");
            
            state = state.map(i => i.id === action.payload.id ? action.payload : i)
            return state;
        },
        deleteUserSlice: (state, action) => {
            state = state.filter(i => i.id !== action.payload.id)
            return state;
        }
    }

});
export const { getUsersSlice, addUserSlice, editUserSlice, deleteUserSlice } = users.actions;
export default users.reducer;

