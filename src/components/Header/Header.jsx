// Header.jsx
import React from "react";
import { useDarkMode } from "./DarkModeContext";
import dart from "/assets/sidebar/Contrast.svg";
import home from "/assets/sidebar/Home.svg";
import servise from "/assets/sidebar/Service.svg";
import cv from "/assets/sidebar/Cv.svg";
import portfolio from "/assets/sidebar/Portfolio.svg";
import blog from "/assets/sidebar/Blog.svg";
import contact from "/assets/sidebar/Contact.svg";

const Header = () => {
  const { lightDartMode, toggleLightDartMode } = useDarkMode();

  return (
    <header className={`head ${lightDartMode ? "" : "dart"}`}>
      <div className="head__wrap">
        <button className="head__mode" onClick={toggleLightDartMode}>
          <img src={dart} alt="dart" />
        </button>
        <nav>
          <ul className="head__list">
            <li className="head__list-item">
              <a href="/">
                <img src={home} alt="home" />
              </a>
            </li>
            <li className="head__list-item">
              <a href="/service">
                <img src={servise} alt="service" />
              </a>
            </li>
            <li className="head__list-item">
              <a href="/cv">
                <img src={cv} alt="cv" />
              </a>
            </li>
            <li className="head__list-item">
              <a href="/portfolio">
                <img src={portfolio} alt="portfolio" />
              </a>
            </li>
            <li className="head__list-item">
              <a href="/blog">
                <img src={blog} alt="blog" />
              </a>
            </li>
            <li className="head__list-item">
              <a href="contact">
                <img src={contact} alt="contact" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
