import React from "react";
import { Link } from 'react-router-dom'

import "./style.scss";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="links">
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Shoes</li>
          </ul>
          <ul>
            <li>About</li>
            <li>Terms</li>
            <li>Contact</li>
          </ul>
          <ul>
            <li>Account</li>
            <li>Card</li>
            <li>Checkout</li>
          </ul>
          <ul>
            <Link to="/login">
              <li>Login</li>
            </Link>
            <Link to="/register">
              <li>Register</li>
            </Link>

          </ul>
        </div>
        <div className="social">
          <h2>
            Via Pasquale Scura 73,
            <br /> Milano,Italy
          </h2>
          <ul>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaSnapchatGhost />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
