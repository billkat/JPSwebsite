import React, { useState } from "react";
import fabrii from "../assets/Images/fabrii.jpg";
import fabri1 from "../assets/Images/fabri1.jpg";
import fabri2 from "../assets/Images/fabri2.jpg";
import fabri3 from "../assets/Images/fabri3.jpg";
import fabri4 from "../assets/Images/fabri4.png";
import { BsArrowsFullscreen } from "react-icons/bs";

function Modal({ images, currentIndex, onClose, onNext, onPrev }) {
  if (currentIndex === null) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <button
        className="absolute top-4 right-4 text-white text-4xl font-bold"
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

function Fabrication({ title }) {
  const [currentIndex, setCurrentIndex] = useState(null);

  const images = [fabri3, fabri1, fabrii, fabri2, fabri4];

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
      <h1 className="text-center text-[#214fc6] text-3xl max-sm:text-3xl lg:text-5xl font-bold mb-12">
        {title}
      </h1>
      <div className="w-full min-h-[80vh] flex justify-center mx-auto">
        <div className="w-full max-w-screen-lg mx-auto">
          <div className="flex justify-center flex-wrap gap-12 mb-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="w-[300px] max-sm:w-[400px] h-[300px] md:h-[400px] lg:h-[400px] rounded-3xl overflow-hidden cursor-pointer relative group"
                onClick={() => handleImageClick(index)}
              >
                <img
                  className="w-full h-full object-cover rounded-3xl transition-transform duration-200"
                  src={image}
                  alt={`Fabrication Image ${index + 1}`}
                  loading="lazy"
                />
                <BsArrowsFullscreen className="absolute inset-0 m-auto text-white bg-[#214fc6] p-2 text-5xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
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

export default Fabrication;
