import React from "react";
import "./style.scss";
import { useEffect } from "react";
import { useState } from "react";
import "../../style/reset.scss"
import email from "../../assets/Groupemail (1).png"
import mail from "../../assets/bx_bxs-lock-altlock.png"
import name from '../../assets/codicon_mailname.png'
import axios from "axios";

import { useNavigate, Link } from "react-router-dom";
const Register = () => {
    const navigate = useNavigate();

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [user, setUserDetails] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        cpassword: "",
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setUserDetails({
            user,
            [name]: value,
        });
    };

    const validateForm = (values) => {
        const error = {};
        const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.fname) {
            error.fname = "First Name is required";
        }
        if (!values.lname) {
            error.lname = "Last Name is required";
        }
        if (!values.email) {
            error.email = "Email is required";
        } else if (!regex.test(values.email)) {
            error.email = "This is not a valid email format!";
        }
        if (!values.password) {
            error.password = "Password is required";
        } else if (values.password.length < 4) {
            error.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            error.password = "Password cannot exceed more than 10 characters";
        }
        return error;
    };
    const signupHandler = (e) => {
        e.preventDefault();
        setFormErrors(validateForm(user));
        setIsSubmit(true);
        localStorage.setItem('authUser',true)
        
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(user);
            axios.post("http://localhost:9002/signup/", user).then((res) => {
                alert(res.data.message);
                navigate("/login", { replace: true });
            });
        }
    }, [formErrors]);

    return (
        <div className="main-c">
            <div className="login-part">
                <div className="txt">
                    <h1>Hello Again!</h1>
                    <h3>Welcome Back</h3>
                </div>
                <div className="input-part">
                    <div className="a">
                        <div className="input1">

                            <img src={name} alt="" />
                            <input placeholder="Name" type="text"
                                name="fname"
                                id="fname"
                                onChange={changeHandler}
                                value={user.fname} />
                        </div>
                        <div className="input1">
                            <img src={name} alt="" />
                            <input type="text"
                                name="lname"
                                id="lname"
                                placeholder="Last Name"
                                onChange={changeHandler}
                                value={user.lname} />
                        </div>
                    </div>
                    <div className="b">
                        <div className="input1">
                            <img src={email} alt="" />
                            <input type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                onChange={changeHandler}
                                value={user.email} />
                        </div>
                        <div className="input1">
                            <img src={mail} alt="" />
                            <input type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                onChange={changeHandler}
                                value={user.password} />
                        </div>
                    </div>
                    <button className="login_b" onClick={signupHandler}>Register</button>
                </div>
            </div>
            <div className="txt-a">
                <h1>Do not have account?</h1>
                <Link to="/login">
                    <h3 > Login</h3>
                </Link>

            </div>
        </div>
    );
};

export default Register;
