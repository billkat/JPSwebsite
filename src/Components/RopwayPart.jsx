import React, { useState } from "react";
import Ropway2 from "../assets/Images/ropeway2.png";
import Ropway1 from "../assets/Images/ropeway1.png";
import ropeway3 from "../assets/Images/change-parts.jpg";
import ropeway4 from "../assets/Images/ropewayImg2.jfif";
import ropeway5 from "../assets/Images/ropewayImg3.webp";
import { BsArrowsFullscreen } from "react-icons/bs";

const ropewayImages = [Ropway2, Ropway1, ropeway3, ropeway4, ropeway5];

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

function RopwayPart() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  const handleCloseModal = () => {
    setCurrentIndex(null);
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ropewayImages.length);
  };

  const handlePrevImage = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + ropewayImages.length) % ropewayImages.length
    );
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-[#214fc6] text-3xl sm:text-4xl lg:text-5xl font-bold mb-12">
        ROPEWAY PARTS
      </h1>
      <div className="flex flex-wrap justify-center gap-12">
        {ropewayImages.map((image, index) => (
          <div
            key={index}
            className="w-[350px] h-[300px] max-sm:w-full rounded-3xl overflow-hidden shadow-lg relative group"
            onClick={() => handleImageClick(index)}
          >
            <img
              className="w-full h-full object-cover rounded-3xl transition-transform duration-300 group-hover:scale-125"
              src={image}
              alt={`Ropeway Part ${index + 1}`}
              loading="lazy"
            />
            <BsArrowsFullscreen className="absolute inset-0 m-auto text-white bg-[#214fc6] p-2 text-5xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
      <Modal
        images={ropewayImages}
        currentIndex={currentIndex}
        onClose={handleCloseModal}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
      />
    </div>
  );
}

export default RopwayPart;
