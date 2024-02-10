import React, { useState } from "react";
import me from "/assets/sidebar/Profile.png";
import me_2x from "/assets/sidebar/Profile_2x.png";
import Dribbble from "/assets/sidebar/Dribbble.svg";
import Youtube from "/assets/sidebar/Youtube.svg";
import Linkeding from "/assets/sidebar/Linkeding.svg";
import Twitter from "/assets/sidebar/Twitter.svg";
import Instagram from "/assets/sidebar/Instagram.svg";
import Facebook from "/assets/sidebar/Facebook.svg";
import icon from "/assets/sidebar/Icons.svg";
import frame from "/assets/sidebar/Frame.svg";
import port from "/assets/sidebar/online-resume.png";
import cross from "/assets/sidebar/cross.png";

const Sidebar = () => {
  const social = [Facebook, Instagram, Twitter, Linkeding, Youtube, Dribbble];
  const forMe = [
    { key: "Age:", value: "24" },
    { key: "Residence:", value: "BD" },
    { key: "Freelance:", value: "Available" },
    { key: "Address:", value: "Dhaka,Bangladesh" },
  ];

  const lang = [
    { key: "Bangla", value: "100%" },
    { key: "English", value: "80%" },
    { key: "Spanish", value: "60%" },
  ];

  const skill = [
    { key: "Html", value: "90%" },
    { key: "CSS", value: "85%" },
    { key: "Js", value: "80%" },
    { key: "PHP", value: "75%" },
    { key: "WordPress", value: "85%" },
  ];

  const extra = [
    "Bootstrap, Materialize",
    "Stylus, Sass, Less",
    "Gulp, Webpack, Grunt",
    "GIT Knowledge",
  ];

  const [isSectionVisible, setIsSectionVisible] = useState(true);

  const toggleSectionVisibility = () => {
    setIsSectionVisible(!isSectionVisible);
  };

  return (
    <section className="bar">
      <button className="toggle-btn top" onClick={toggleSectionVisibility}>
        {isSectionVisible ? <img src={port} width={24} height={24} /> : ""}
      </button>
      <div className={`bar__wrap ${isSectionVisible ? "" : "hidden"}`}>
        <button className="toggle-btn" onClick={toggleSectionVisibility}>
          {isSectionVisible ? (
            <img src={port} width={24} height={24} />
          ) : (
            <img width={24} height={24} src={cross} />
          )}
        </button>
        <div className="bar__logo">
          <img
            width={150}
            height={150}
            srcSet={`${me} 1x, ${me_2x} 2x`}
            alt="me"
            className="bar__logo-img"
          />
        </div>
        <h2 className="bar__title">Rayan Adlardard</h2>
        <span className="bar__decr">Font-end Developer</span>
        <ul className="bar__social">
          {social.map((item, index) => (
            <li key={index} className="bar__social-item">
              <a href="#">
                <img
                  src={item}
                  width={24}
                  height={24}
                  className="bar__social_icon"
                  alt="icon"
                />
              </a>
            </li>
          ))}
        </ul>
        <ul className="bar__for">
          {forMe.map((item, index) => (
            <li key={index} className="bar__for-itm">
              <p>{item.key}</p>
              <span>{item.value}</span>
            </li>
          ))}
        </ul>

        <h3 className="bar__subtitle">Languages</h3>
        <ul className="bar__languages">
          {lang.map((item, index) => (
            <li key={index} className="bar__languages-itm">
              <p>{item.key}</p>
              <span>{item.value}</span>
              <div className="wraps">
                <span
                  className="value"
                  style={{ width: `${item.value}`, backgroundColor: "#fdd835" }}
                ></span>
              </div>
            </li>
          ))}
        </ul>
        <h3 className="bar__subtitle">Skills</h3>
        <ul className="bar__skills">
          {skill.map((item, index) => (
            <li key={index} className="bar__skills-itm">
              <p>{item.key}</p>
              <span>{item.value}</span>
              <div className="wraps">
                <span
                  className="value"
                  style={{ width: `${item.value}`, backgroundColor: "#fdd835" }}
                ></span>
              </div>
            </li>
          ))}
        </ul>

        <h3 className="bar__subtitle">Extra Skills</h3>
        <ul className="bar__extra">
          {extra.map((item, index) => (
            <li key={index} className="bar__extra-itm">
              <img src={icon} width={22} height={22} alt="icon" />
              <p>{item}</p>
            </li>
          ))}
        </ul>

        <a href="#" className="bar__link">
          Download cv
          <img src={frame} width={15} height={15} alt="frame" />
        </a>
      </div>
    </section>
  );
};

export default Sidebar;
