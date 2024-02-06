import React from "react";
import logo from "../../images/logo.svg";
import { CiMenuBurger } from "react-icons/ci";
import "./Head.css";

export const Head = () => {
  return (
    <>
      <div className="head">
        <div className="head-inner">
          <div className="head-img">
            <img src={logo} alt="" />
          </div>
          <div className="head-text">
            <div className="link">
              <div className="menu">
                <CiMenuBurger className="icon" />
              </div>
              <ul>
                <li>О нас</li>
                <li>Сервисы</li>
                <li>Портфолио</li>
                <li>Клиенты</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div className="til">
              <p>EN</p>
              <p>RU</p>
              <p>UZ</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
