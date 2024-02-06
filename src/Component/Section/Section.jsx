import React from "react";
import "./Section.css";
import img from "../../images/plan.png";

export const Section = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="section-inner">
            <img src={img} alt="" />
            <div className="section-text">
              <div className="one">
                <h3>Архитектурное проектирование</h3>
                <h1>01</h1>
              </div>
              <div className="two">
                <h3>Дизайн итерьера</h3>
                <h1>02</h1>
              </div>
              <div className="three">
                <h3>Проектирование городской среды</h3>
                <h1>03</h1>
              </div>
              <div className="two">
                <h3>Ландшафтный дизайн</h3>
                <h1>04</h1>
              </div>
              <div className="two">
                <h3>Проектная документация</h3>
                <h1>05</h1>
              </div>
              <div className="two">
                <h3>Авторский надзор</h3>
                <h1>06</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
