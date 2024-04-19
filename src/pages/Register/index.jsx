import React from "react";
import "./style.scss";
import {Link} from 'react-router-dom'
import "../../style/reset.scss"
import email from "../../assets/Groupemail (1).png"
import mail from "../../assets/bx_bxs-lock-altlock.png"
import name from '../../assets/codicon_mailname.png'

const Register = () => {


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
                            <input placeholder="Name" type="text" />
                        </div>
                        <div className="input1">
                            <img src={name} alt="" />
                            <input placeholder="Surname" type="text" />
                        </div>
                    </div>
                    <div className="b">
                        <div className="input1">
                            <img src={email} alt="" />
                            <input placeholder="Email Address" type="text" />
                        </div>
                        <div className="input1">
                            <img src={mail} alt="" />
                            <input placeholder="Password" type="text" />
                        </div>
                    </div>
                    <button className="login_b">Register</button>
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
