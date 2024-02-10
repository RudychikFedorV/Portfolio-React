import React from "react";
import { Welcome } from "./components/Welcome/Welcome";
import { Service } from "./components/ServiceBlock/Service";
import { Price } from "./components/Price/Price";
import { Experience } from "./components/Experience/Experience";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Blog } from "./components/Blog/Blog";
import { Contact } from "./components/Contact/Contact";
import { Recommend } from './components/Recommend/Recommend';

export const Home = () => {
  return (
    <>
          <Welcome />
          <Service />
          <Price />
          <Recommend/>
          <Experience />
          <Portfolio />
          <Blog />
          <Contact />
    </>
  );
};