import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";
import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-img">
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
            <div className="footer-text">
              <h5>- 01 -</h5>
              <h3>Зеркальный Лабиринт</h3>
              <p> жилой комплекс с зеркальными стенами</p>
              <div className="btn">
                <button>
                  <BsArrowRightShort className="icon" />
                </button>
                <button>
                  <BsArrowLeftShort className="icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
