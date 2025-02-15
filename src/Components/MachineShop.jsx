import React, { useState } from "react";
import machine1 from "../assets/Images/machine1.jpg";
import machine2 from "../assets/Images/machine2.jpg";
import machine3 from "../assets/Images/machine3.jpg";
import machine4 from "../assets/Images/machine4.jpg";
import machine5 from "../assets/Images/machine5.jpg";
import machine6 from "../assets/Images/machine6.jpg";
import machine7 from "../assets/Images/machine7.jpg";
import machine8 from "../assets/Images/machine8.jpg";
import machine9 from "../assets/Images/machine9.jpg";
import machine10 from "../assets/Images/machine10.jpg";
import machine11 from "../assets/Images/IMG_0334.jpg";
import machine12 from "../assets/Images/IMG_0296.jpg";
import { BsArrowsFullscreen } from "react-icons/bs";

const machines = [
  machine1,
  machine2,
  machine3,
  machine4,
  machine5,
  machine6,
  machine7,
  machine8,
  machine9,
  machine10,
  machine11,
  machine12,
];

function Modal({ images, currentIndex, onClose, onNext, onPrev }) {
  if (currentIndex === null) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
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

function MachineShop({ title }) {
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  const handleCloseModal = () => {
    setCurrentIndex(null);
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % machines.length);
  };

  const handlePrevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + machines.length) % machines.length
    );
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-[#214fc6] text-5xl max-sm:text-3xl font-bold mb-12">
        {title}
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {machines.map((machine, index) => (
          <div
            key={index}
            className="w-[280px] h-[250px] max-sm:w-full rounded-3xl overflow-hidden shadow-lg relative group"
            onClick={() => handleImageClick(index)}
          >
            <img
              className="w-full h-full object-cover rounded-3xl duration-300 group-hover:scale-125"
              src={machine}
              alt={`Machine ${index + 1}`}
              loading="lazy"
            />
            <BsArrowsFullscreen className="absolute inset-0 m-auto text-white bg-[#214fc6] p-2 text-5xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
      <Modal
        images={machines}
        currentIndex={currentIndex}
        onClose={handleCloseModal}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
      />
    </div>
  );
}

export default MachineShop;
