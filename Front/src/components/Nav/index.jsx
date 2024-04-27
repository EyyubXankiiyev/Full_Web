import React, { useRef } from "react";
import { Link } from 'react-router-dom'
import "./style.scss";
import logo from "../../assets/icon/Brand iconicon.png";
import { CgDollar } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";



const Nav = ({ theme }) => {
  const menuIcon = useRef(".hamburger");
  const sideNav = useRef(".sidenav");

  const MenuClicked = () => {
    menuIcon.current.classList.toggle("x");
    sideNav.current.classList.toggle("active");
  };

  return (
    <nav>
      <div className="container">


        <ul>
          <li>Men</li>
          <li>Women</li>
          <li>Child</li>
          <Link to="/">
            <img src={logo} alt="" />

          </Link>

          <CgDollar />
          <FiShoppingCart />
          <div ref={menuIcon} onClick={MenuClicked} className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </ul>
        <div ref={sideNav} className="sidenav">
          <Link to="/">
            <li>Men</li>
          </Link>
          <Link to="/">
            <li>Women</li>
          </Link>
          <Link to="/">
            <li>Child</li>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
