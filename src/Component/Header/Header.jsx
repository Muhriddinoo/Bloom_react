import React from "react";
import { Head } from "../Head/Head";
import { Navbar } from "../Navbar/Navbar";
import "./Header.css";

export const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="header-inner">
            <Head />
            <Navbar />
          </div>
        </div>
      </header>
    </>
  );
};
