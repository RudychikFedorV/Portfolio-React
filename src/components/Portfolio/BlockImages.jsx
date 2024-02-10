import { ImagesArray } from "../../js/Portfolio/ImagesArray";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

export const BlockImages = ({ category, openModal }) => {

  const filteredArray =
    category !== "All categories"
      ? ImagesArray.filter((item) => item.category === category)
      : ImagesArray;

  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };


  return (
    <div className="portfolio__images-container">
      {filteredArray.map((item, index) => (
        <InView key={`${filteredArray.length}+${index}`} triggerOnce={false}>
          {({ ref, inView }) => (
            <motion.div
              ref={ref}
              initial={"hidden"}
              animate={inView ? "visible" : "hidden"}
              variants={container}
              className="portfolio__img"
              onClick={() => openModal(item.img)}
            >
              <img src={item.img} alt={item.category} />
            </motion.div>
          )}
        </InView>
      ))}
    </div>
  );
};
