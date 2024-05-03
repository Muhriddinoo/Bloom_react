import React from "react";
import logo from "../../images/1.svg";
import logo2 from "../../images/2.svg";
import logo3 from "../../images/3.svg";

import "./Logo.css";

export const Logo = () => {
  return (
    <>
      <div className="logo">
        <div className="container">
          <div className="logo-inner">
            <div className="logo-text">
              <button className="btn2">
                <i className="bx bx-left-arrow-alt"></i>
              </button>
              <button className="btn1">
                <i className="bx bx-right-arrow-alt"></i>
              </button>
            </div>
            <div className="logo-img">
              <div className="one">
                <img src={logo} alt="" />
                <p>Very long client company name</p>
              </div>
              <div className="one">
                <img src={logo2} alt="" />
                <p>Very long client company name</p>
              </div>
              <div className="one">
                <img src={logo3} alt="" />
                <p>Very long client company name</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
