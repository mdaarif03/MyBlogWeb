import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";

export default function TopBar() {
  // const user = false;
  return (
    <>
    <div className='top'>
        <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to="/">HOME</Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/about">ABOUT</Link>
                  </li>
                <li className="topListItem">
                  <Link className="link" to="/login">CONTACT</Link>
                  </li>
                <li className="topListItem">
                  <Link className="link" to="/write">WRITE</Link>
                  </li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
          
            <img className="topImg"
            src="https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="not found" />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
    </>
  )
}
