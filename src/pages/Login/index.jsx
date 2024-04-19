import React from "react";
import { Link } from 'react-router-dom'
import "./style.scss";
import "../../style/reset.scss"
import email from "../../assets/Groupemail (1).png"
import mail from "../../assets/bx_bxs-lock-altlock.png"

const Login = () => {


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
                        <input placeholder="Email Address" type="text" />
                    </div>
                    <div className="input1">
                        <img src={mail} alt="" />
                        <input placeholder="Password" type="text" />
                    </div>
                    <button className="login_b">Login</button>
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
