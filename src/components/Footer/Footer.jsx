import logo1 from "/assets/Footer/logo1.png";
import logo2 from "/assets/Footer/logo2.png";
import logo3 from "/assets/Footer/logo3.png";
import logo4 from "/assets/Footer/logo4.png";
import logoLemon from "/assets/Footer/logoLemon.svg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__img">
          <img src={logo1} alt="Logo" />
          <img src={logo2} alt="Logo" />
          <img src={logo3} alt="Logo" />
          <img src={logo4} alt="Logo" />
        </div>
        <div className="footer__copy">
          &copy;{currentYear} All Rights Reserved. Team
          <img src={logoLemon} alt="logoLemon" />
        </div>
      </div>
    </footer>
  );
};
