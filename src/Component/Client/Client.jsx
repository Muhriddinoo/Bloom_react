import React from "react";
import "./Client.css";

export const Client = () => {
  return (
    <>
      <div id="client">
        <marquee behavior="left" direction="row">
          Client Client Client Client
        </marquee>
        <div className="container">
          <div className="client-inner">
            <div className="client-text"></div>
          </div>
        </div>
      </div>
    </>
  );
};
