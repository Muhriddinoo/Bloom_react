import React from "react";
import "./Navbar.css";
import arrow from "../../images/arrow";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-inner">
          <div className="navbar-text">
            <h1>Bloom Architechture</h1>
          </div>
          <div className="navbar-icon">
            <div className="navbar-icon-img">
              <img src={arrow} alt="" />
            </div>
            <p>Заказать проект</p>
          </div>
        </div>
      </div>
    </>
  );
};
