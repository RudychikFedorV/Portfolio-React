import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BlockImages } from "../../../../components/Portfolio/BlockImages";
import ModalImg from "../../../../components/Portfolio/ModalImg";

export const Portfolio = () => {
  const categories = [
    "All categories",
    "UI Design",
    "Web Templates",
    "Logo",
    "Branding",
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  useEffect(() => {
    console.log("Active category changed:", activeCategory);
  }, [activeCategory]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage('');
    setModalOpen(false);
  };

  return (
    <section className="portfolio">
      <h2 className="title portfolio__title">Portfolio</h2>
      <p className="desc portfolio__desc">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>

      <div className="portfolio__ul">
        {categories.map((item, index) => (
          <Link
            key={index}
            className={`portfolio__li ${
              item === activeCategory ? "portfolio__li-active" : ""
            }`}
            onClick={() => handleCategoryClick(item)}
          >
            {item}
          </Link>
        ))}
      </div>
      <BlockImages category={activeCategory}  openModal={openModal} />
      <ModalImg isOpen={isModalOpen} onClose={closeModal} imageURL={selectedImage} />
    </section>
  );
};
