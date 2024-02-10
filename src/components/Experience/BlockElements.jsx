import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

export const BlockElements = ({ blockArray }) => {

  const formatAndDisplayDate = (date) => {
    const dateObject = new Date(date);
    if (isNaN(dateObject.getTime())) {
      return "";
    }
    const formattedDate = dateObject.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
    return formattedDate;
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="experience__items">
      {blockArray.map((item, index) => (
        <InView key={`${blockArray.length}+${index}`} triggerOnce={false}>
          {({ ref, inView }) => (
            <motion.div
              key={index}
              ref={ref}
              animate={inView ? "visible" : "hidden"}
              variants={container}
              initial="hidden"
              className="experience__item"
            >
              <div className="experience__item-info-establishment">
                <h4 className="title experience__item-university">
                  {item.university}
                </h4>
                <div className="experience__item-student">
                  <p className="experience__item-role">{item.role}</p>
                  <div className="experience__item-period">
                    {`${formatAndDisplayDate(
                      item.dateStart
                    )} - ${formatAndDisplayDate(item.dateFinish)}`}
                  </div>
                </div>
              </div>
              <div className="experience__item-specialty-info">
                <h4 className="title experience__item-document">
                  {item.documentAboutEducation}
                </h4>
                <p className="desc experience__item-desc">
                  {item.specialtyDescription}
                </p>
              </div>
            </motion.div>
          )}
        </InView>
      ))}
    </div>
  );
};
