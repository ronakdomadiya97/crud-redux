import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, updatUser } from "../Redux/Reducer";

const Form = ({ selectedData, setSelectedData }) => {
    const namePattern = /^[a-zA-Z\s]+$/; // Allows only letters and spaces
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
    const phonePattern = /^\d{10}$/; // Allows exactly 10 digits for a phone number

    const [formvalue, setFormValue] = useState({ name: "", lastName: "", email: "", gender: "", phone: "" });

    const [formError, setFormError] = useState({ name: "", lastName: "", email: "", gender: "", phone: "" });
    const [errors, setErrors] = useState({})
    const dispatch = useDispatch();
    useEffect(() => {
        if (selectedData) {
            setFormValue({
                name: selectedData?.name,
                lastName: selectedData?.lastName,
                email: selectedData?.email,
                gender: selectedData?.gender,
                phone: selectedData?.phone
            })
        }
    }, [selectedData])

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        const newErrors = { ...formError };
        if (formvalue.name.trim() === "") {
            newErrors.name = "Name is required";
            isValid = false;
        } else {
            newErrors.name = "";
        }
        if (formvalue.lastName.trim() === "") {
            newErrors.lastName = "LastName is required";
            isValid = false;
        } else {
            newErrors.lastName = "";
        }
        if (formvalue.gender.trim() === "") {
            newErrors.gender = "gender is required";
            isValid = false;
        } else {
            newErrors.gender = "";
        }
        if (formvalue.email.trim() === "") {
            newErrors.email = "email is required";
            isValid = false;
        } else {
            newErrors.email = "";
        }
        if (formvalue.phone.trim() === "") {
            newErrors.phone = "phone is required";
            isValid = false;
        } else {
            newErrors.phone = "";
        }
        setFormError(newErrors);
        if (selectedData) {
            dispatch(updatUser({ index: selectedData?.index, userData: formvalue }))
            setSelectedData(null)
        }
        else {
            if (isValid) {
                dispatch(addUser(formvalue));
            }
        }
        setFormValue({ name: "", lastName: "", email: "", gender: "", phone: "" })
    }

    const handleChnage = (e) => {
        const { name, value } = e.target
        setFormValue({ ...formvalue, [name]: value })

        if (name === "name" && !namePattern.test(value)) {
            setErrors({ ...errors, name: "Invalid name format" });
        } else if (name === "lastName" && !namePattern.test(value)) {
            setErrors({ ...errors, lastName: "Invalid Lastname address" });
        } else if (name === "email" && !emailPattern.test(value)) {
            setErrors({ ...errors, email: "Invalid email address" });
        } else if (name === "phone" && !phonePattern.test(value)) {
            setErrors({ ...errors, phone: "Invalid phone number" });
        } else {
            setErrors({ ...errors, [name]: "" });
        }
    };

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input name="name" type="text" value={formvalue?.name} onChange={handleChnage} />
                {formError.name && <p className="error">{formError.name}</p>}
                {errors.name && <p className="error">{errors.name}</p>}

            </div>
            <div>
                <label>Last Name</label>
                <input name="lastName" type="text" value={formvalue?.lastName} onChange={handleChnage} />
                {formError.lastName && <p className="error">{formError.lastName}</p>}
                {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>
            <div>
                <label>Email</label>
                <input name="email" type='email' value={formvalue?.email} onChange={handleChnage} />
                {formError.email && <p className="error">{formError.email}</p>}
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div>
                <label>PHone</label>
                <input name="phone" type='phone' value={formvalue?.phone} onChange={handleChnage} />
                {formError.phone && <p className="error">{formError.phone}</p>}
                {errors.phone && <p className="error">{errors.phone}</p>}
            </div>
            <div className="">
                <label>Gender</label>
                <input type='radio' name="gender" value="male" checked={formvalue?.gender === "male"} onChange={handleChnage} />
                <input type='radio' name="gender" value="Female" checked={formvalue?.gender === "Female"} onChange={handleChnage} />
                {formError.gender && <p className="error">{formError.gender}</p>}
            </div>
            <button type="submit">{selectedData ? "update" : "add"}</button>
        </form>
    )
}
export default Form;