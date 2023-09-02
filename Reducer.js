import { createSlice } from "@reduxjs/toolkit";

const items = localStorage.getItem("users") !== null ? JSON.parse(localStorage.getItem("users")) : []
console.log("items", items)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: items,
    },
    reducers: {
        addUser(state, action) {
            console.log(action)
            state.data.push(action.payload);
            localStorage.setItem("users", JSON.stringify(state.data.map(item => item)))
        },
        updatUser(state, action) {
            const { index, userData } = action.payload;
            state.data[index] = userData;
            localStorage.setItem("users", JSON.stringify(state.data.map(item => item)))
        },
        deleteUser(state, action) {
            state.data.splice(action.payload, 1);
            localStorage.setItem("users", JSON.stringify(state.data.map(item => item)))
        }
    }
})
export default userSlice.reducer;
export const { addUser, deleteUser, updatUser } = userSlice.actions;