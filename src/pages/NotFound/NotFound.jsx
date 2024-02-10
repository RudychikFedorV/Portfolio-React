import { NavLink } from "react-router-dom";
import { IconGear } from "../../components/icons/IconGear";
import { motion } from "framer-motion";

export const NotFound = () => {
  return (
    <div className="notFound-container">
      <p className="notFoud-desc">
        4
        <motion.i className="icon">
          <IconGear />
        </motion.i>
        4 Page
      </p>
      <div className="notFound-item">
        <NavLink
          className={(navData) => (navData.isActive ? "is-active" : "none")}
          to="/"
        >
          <span className="btn notFound-btn">Go Home</span>
        </NavLink>
      </div>
    </div>
  );
};
