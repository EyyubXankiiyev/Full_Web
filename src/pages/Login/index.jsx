import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom'
import "./style.scss";
import "../../style/reset.scss"
import email from "../../assets/Groupemail (1).png"
import mail from "../../assets/bx_bxs-lock-altlock.png"
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
const Login = ({ setUserState }) => {
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});
    const [emailValue,setEmailValue]=useState("")
    const [passwordValue,setPasswordValue]=useState("")
    const [isSubmit, setIsSubmit] = useState(false);
    const [user, setUserDetails] = useState({
        email: "",
        password: "",
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setUserDetails({
            ...user,
            [name]: value,
        });
    };

    const setEmailValue=(e)=>{
        
    }
    const validateForm = (values) => {
        const error = {};
        const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            error.email = "Email is required";
        } else if (!regex.test(values.email)) {
            error.email = "Please enter a valid email address";
        }
        if (!values.password) {
            error.password = "Password is required";
        }
        return error;
    };

    const loginHandler = (e) => {
        e.preventDefault();
        setFormErrors(validateForm(user));
        setIsSubmit(true);
        localStorage.setItem('authUser',true)
        console.log(e);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(user);
            axios.post("http://localhost:9002/login", user).then((res) => {
                alert(res.data.message);
                setUserState(res.data.user);
                navigate("/", { replace: true });
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

                    <div className="input1">
                        <img src={email} alt="" />
                        <input type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            onChange={setEmailValue()}
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
                    <button className="login_b" onClick={loginHandler}>Login</button>
                </div>
            </div>
            <div className="txt-a">
                <h1>Do not have account?</h1>
                <Link to="/register">
                    <h3 > Register</h3>

                </Link>
            </div>
        </div>
    );
};

export default Login;
