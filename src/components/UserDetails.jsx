import React from "react";
import DeleteAllUsers from "./DeleteAllUser";
import { fakeUserData } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/UserSlice";
import DisplayUser from "./DisplayUser";


const UserDetails = () => {
    const dispatch = useDispatch();
    const addNewUser = (payload) => {
        dispatch(addUser(payload))
    }
    return (
        <div>
            <div>UserDetails</div>
            <button className="btn text-white" style={{ backgroundColor: "red" }} onClick={() => addNewUser(fakeUserData())}>Add User Table</button>
            <DisplayUser />
            <DeleteAllUsers />
        </div>
    )
}
export default UserDetails;