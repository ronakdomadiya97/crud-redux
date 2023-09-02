import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../Redux/Reducer";

const Table = ({ setSelectedData }) => {
    const userData = useSelector((state) => state?.user?.data)
    const dispatch = useDispatch();
    const onEditData = (item) => {
        setSelectedData(item);
    }
    const deleteData = (id) => {
        dispatch(deleteUser(id))
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>lastName</th>
                    <th>Emial</th>
                    <th>PHone</th>
                    <th>gender</th>
                </tr>
            </thead>
            <tbody>
                {userData?.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item?.name}</td>
                            <td>{item?.lastName}</td>
                            <td>{item?.email}</td>
                            <td>{item?.phone}</td>
                            <td>{item?.gender}</td>
                            <td><button onClick={(e) => { e.preventDefault(); onEditData({ ...item, index }) }} >Edit</button></td>
                            <td><button onClick={() => deleteData(index)}>Delete</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
export default Table;