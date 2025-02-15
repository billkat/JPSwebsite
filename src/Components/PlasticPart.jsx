import React, { useState } from "react";
import image1 from "../assets/Images/1.png";
import image2 from "../assets/Images/2.png";
import image3 from "../assets/Images/3.png";
import image4 from "../assets/Images/4.png";
import image5 from "../assets/Images/5.png";
import image6 from "../assets/Images/6.png";
import image7 from "../assets/Images/7.png";
import image8 from "../assets/Images/8.png";
import image9 from "../assets/Images/Plastics-.gif";
import image10 from "../assets/Images/10.png";
import image11 from "../assets/Images/11.png";
import image12 from "../assets/Images/Adjustable-conveyor-1-600x440.jpg";
import { BsArrowsFullscreen } from "react-icons/bs";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
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
        className="max-w-full max-h-full"
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

function PlasticPart({ title }) {
  const [currentIndex, setCurrentIndex] = useState(null);

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
            className="w-[280px] h-[200px] max-sm:w-full rounded-3xl overflow-hidden shadow-lg relative group"
            onClick={() => handleImageClick(index)}
          >
            <img
              className="w-full h-full object-cover rounded-3xl transition-transform duration-300 group-hover:scale-125"
              src={image}
              alt={`Plastic Part ${index + 1}`}
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

export default PlasticPart;
