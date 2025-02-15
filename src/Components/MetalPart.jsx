import React, { useState, useEffect } from "react";
import metal1 from "../assets/Images/metal1.png";
import metal2 from "../assets/Images/metal2.png";
import metal3 from "../assets/Images/metal3.png";
import metal4 from "../assets/Images/metal4.png";
import metal5 from "../assets/Images/metal5.png";
import metal6 from "../assets/Images/metal6.png";
import metal7 from "../assets/Images/IMG_0189.jpg";
import metal8 from "../assets/Images/IMG_0270.jpg";
import metal9 from "../assets/Images/IMG_0256.jpg";
import metal10 from "../assets/Images/IMG_0171.jpg";
import metal11 from "../assets/Images/IMG_0284.jpg";
import metal12 from "../assets/Images/IMG_0187.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { BsArrowsFullscreen } from "react-icons/bs";

const images = [
  metal1,
  metal2,
  metal3,
  metal4,
  metal5,
  metal6,
  metal7,
  metal8,
  metal9,
  metal10,
  metal11,
  metal12,
];

function Modal({ images, currentIndex, onClose, onNext, onPrev }) {
  if (currentIndex === null) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <button
        className="absolute top-4 right-4 text-white text-5xl font-bold"
        onClick={onClose}
      >
        &times;
      </button>
      <button
        className="absolute left-4 text-white text-5xl font-bold"
        onClick={onPrev}
      >
        &lsaquo;
      </button>
      <img
        src={images[currentIndex]}
        alt="Full Screen"
        className="max-w-full max-h-full bg-white"
      />
      <button
        className="absolute right-4 text-white text-5xl font-bold"
        onClick={onNext}
      >
        &rsaquo;
      </button>
    </div>
  );
}

function MetalPart({ title }) {
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  const handleCloseModal = () => {
    setCurrentIndex(null);
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-[#214fc6] text-3xl sm:text-4xl lg:text-5xl font-bold mb-12">
        {title}
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-[280px] h-[250px] max-sm:w-full rounded-3xl overflow-hidden shadow-lg relative group"
            data-aos="zoom-in"
            onClick={() => handleImageClick(index)}
          >
            <img
              className="w-full h-full object-cover rounded-3xl transition-transform duration-300 group-hover:scale-125"
              src={image}
              alt={`Metal Image ${index + 1}`}
              loading="lazy"
            />
            <BsArrowsFullscreen className="absolute inset-0 m-auto text-white bg-[#214fc6] p-2 text-5xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
      <Modal
        images={images}
        currentIndex={currentIndex}
        onClose={handleCloseModal}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
      />
    </div>
  );
}

export default MetalPart;
