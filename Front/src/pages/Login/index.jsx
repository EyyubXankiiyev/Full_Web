import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
import "./style.scss";
import "../../style/reset.scss"
import email from "../../assets/Groupemail (1).png"
import mail from "../../assets/bx_bxs-lock-altlock.png"
import Validation from './loginValidation'
function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})
    const handelInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value]}))
    }
    const handelSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
    }
return (
        <div className="main-c">
            <div className="login-part" onSubmit={handelSubmit}>
                <div className="txt">
                    <h1>Hello Again!</h1>
                    <h3>Welcome Back</h3>
                </div>
                <div className="input-part">

                    <div className="input1">
                        <img htmlFor='email' src={email} alt="" />
                        <input type="email" placeholder="Email" name="email" onChange={handelInput} />
                        {errors.email && <span className=" text-danger">{errors.email}</span>}
                    </div>
                    <div className="input1">
                        <img htmlFor='password' src={mail} alt="" />
                        <input type="password" placeholder="Password" name="password" onChange={handelInput}  />
                        {errors.password && <span className='text-danger'> {errors.password}</span>}

                    </div>
                    <button type="submit" className="login_b">Login</button>
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
