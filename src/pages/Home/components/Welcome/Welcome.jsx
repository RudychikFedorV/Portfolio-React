import WelcomeElement from './WelcomeElement'

import Icon1 from "/assets/Welcome/yellow-circle.svg";
import Icon2 from "/assets/Welcome/green-circle.svg";
import Icon3 from "/assets/Welcome/blue-rectangle.svg";
import Icon4 from "/assets/Welcome/green-circle.svg";
import Icon5 from "/assets/Welcome/yellow-circle.svg";
import Icon6 from "/assets/Welcome/yellow-rectangle.svg";
import Icon7 from "/assets/Welcome/red-triangle.svg";

export const Welcome = () => {
  return (
    <section className="welcome">
      <div className="welcome__container"> 
        <div className="welcome__info">
          <h1 className=" title welcome__title">
            I’m Rayan Adlrdard <span>Front-end</span> Developer
          </h1>
          <p className="desc welcome__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit . Et,
            volutpat feugiat placerat lobortis. Natoque rutrum semper sed
            suspendisse nunc lectus.
          </p>
          <a href="/" className="btn welcome__btn">
            HIRE ME
            <WelcomeElement/>
          </a>
        </div>
        <div className="welcome__img">
          <img src="/assets/Welcome/welcome-man.png" alt="man" />
          <img className="welcome__icon" src={Icon7} alt="red-triangle" />
          <img className="welcome__icon" src={Icon6} alt="yellow-rectangle" />
          <img className="welcome__icon" src={Icon5} alt="yellow-circle" />
          <img className="welcome__icon" src={Icon4} alt="green-circle" />
          <img className="welcome__icon" src={Icon3} alt="blue-rectangle" />
          <img className="welcome__icon" src={Icon2} alt="green-circle" />
          <img className="welcome__icon" src={Icon1} alt="yellow-circle" />
        </div>
      </div>
    </section>
  );
};
