import React from "react";

import "./App.css";

import { Header } from "./Component/Header/Header";
import { Main } from "./Component/Main/Main";
import { Service } from "./Component/Service/Service";
import { Section } from "./Component/Section/Section";
import { Portfolio } from "./Component/Portfolio/Portfolio";
import { Blog } from "./Component/Blog/Blog";
import { Client } from "./Component/Client/Client";
import { Logo } from "./Component/Logo/Logo";

export const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Service />
      <Section />
      <Portfolio />
      <Blog />
      <Client />
      <Logo />
    </>
  );
};
