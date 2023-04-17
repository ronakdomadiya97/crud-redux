import { useSelector, useDispatch } from "react-redux";
import { AiFillDelete } from "react-icons/ai"
import { removeUser } from "../store/slices/UserSlice";

const DisplayUser = () => {

    const dispatch = useDispatch();
    const data = useSelector((state) => { return state.users })
    console.log(data)
    const deleteUser = (id) => {
        dispatch(removeUser(id))
    }
    return (
        <div className="main-data" style={{ margin: '0 auto', width: '80%' }}>
            {
                data?.map((user, id) => {
                    return (
                        <li style={{ listStyle: "none", borderBottom: "1px solid #000" }} key={id}>{user}
                            <button className="border-0" onClick={() => deleteUser(id)}>
                                <AiFillDelete className="delete-icons" />
                            </button>
                        </li>

                    )
                })
            }
        </div>
    )
}
export default DisplayUser;