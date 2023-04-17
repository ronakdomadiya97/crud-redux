import React from "react";
import { deleteUsers } from "../store/slices/UserSlice";
import { useDispatch } from "react-redux";

const DeleteAllUsers = () => {
    const dispatch = useDispatch();
    const clearUsers = () => {
        dispatch(deleteUsers());
    }
    return (
        <button onClick={clearUsers}>clear all</button>
    )
}
export default DeleteAllUsers;