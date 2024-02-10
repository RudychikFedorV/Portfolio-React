import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ServiceIcons } from "../../../../components/icons/ServiceIcons";
// import { ServiceArray } from "../../../../js/ServiceBlock/ServiceArray";

export const Service = () => {
  const serviceMotion = {
    hidden: { y: -1000, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="service">
      <h2 className="title service__title">My Services</h2>
      <p className="desc service__desc">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
      <motion.div className="service__list">
        <motion.div
          className="service-item"
          initial={"hidden"}
          animate={"visible"}
          transition={{
            delay: 0.59,
          }}
          variants={serviceMotion}
        >
          <span className="service-item__img">
            <ServiceIcons type="web" />
          </span>
          <h4 className="title service-item__title">Web Development</h4>
          <p className="desc service-item__desc">Blog, E-commerce</p>
        </motion.div>
        <motion.div
          className="service-item"
          initial={"hidden"}
          animate={"visible"}
          transition={{
            delay: 0.58,
          }}
          variants={serviceMotion}
        >
          <span className="service-item__img">
            <ServiceIcons type="design" />
          </span>
          <h4 className="title service-item__title">UI/UX Design</h4>
          <p className="desc service-item__desc">Mobile app, Website Designe</p>
        </motion.div>
        <motion.div
          className="service-item"
          initial={"hidden"}
          animate={"visible"}
          transition={{
            delay: 0.57,
          }}
          variants={serviceMotion}
        >
          <span className="service-item__img">
            <ServiceIcons type="sound" />
          </span>
          <h4 className="title service-item__title">Sound Design</h4>
          <p className="desc service-item__desc">Voice Over, Beat Making</p>
        </motion.div>
        <motion.div
          className="service-item"
          initial={"hidden"}
          animate={"visible"}
          transition={{
            delay: 0.56,
          }}
          variants={serviceMotion}
        >
          <span className="service-item__img">
            <ServiceIcons type="game" />
          </span>
          <h4 className="title service-item__title">Game Design</h4>
          <p className="desc service-item__desc">
            Character Design, Props & Objects
          </p>
        </motion.div>
        <motion.div
          className="service-item"
          initial={"hidden"}
          animate={"visible"}
          transition={{
            delay: 0.55,
          }}
          variants={serviceMotion}
        >
          <span className="service-item__img">
            <ServiceIcons type="photography" />
          </span>
          <h4 className="title service-item__title">Photography</h4>
          <p className="desc service-item__desc">
            Portrait, Product Photography
          </p>
        </motion.div>
        <motion.div
          className="service-item"
          initial={"hidden"}
          animate={"visible"}
          transition={{
            delay: 0.5,
          }}
          variants={serviceMotion}
        >
          <h4 className="title service-item__title">advertising</h4>
          <p className="desc service-item__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
            diam in ac dictum a urna viverra morbi.
          </p>
          <Link to="/ordernow" className="service-item__link">
            ORDER NOW
            <span>
              <ServiceIcons type="arrow-forward" />
            </span>
          </Link>
        </motion.div>
      </motion.div>

      {/* <section className="service">
        <h2 className="title service__title">My Services</h2>
        <p className="desc service__desc">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>
        <div className="service__list">
          {ServiceArray.map((service, index) => (
            <motion.div key={index} className="service-item">
              <span className="service-item__img">{service.icon}</span>
              <h4 className="title service-item__title">{service.name}</h4>
              <p className="desc service-item__desc">{service.text}</p>
              <Link to="/ordernow" className="service-item__link">
                {service.link}
                <span>{service.arrow}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section> */}
    </section>
  );
};
