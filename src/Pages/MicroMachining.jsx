// src/components/MicroMachining.js

import React from "react";
import micromachining from "../assets/Images/micromachining.jpg";

const MicroMachining = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl text-[#214fc6] font-bold text-center mb-8 capitalize py-5">
        Micro Machining
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-between space-x-4">
        <div className="flex-1">
          <p className="text-lg text-gray-700 mb-6">
            Micro machining is a cutting-edge technique used for creating small,
            intricate parts with high precision. It involves advanced technology
            to cut, drill, mill, or grind materials at the microscopic level,
            making it ideal for industries like electronics, medical devices,
            aerospace, and automotive.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            By utilizing CNC machines, lasers, and other sophisticated
            equipment, micro machining allows for the production of components
            with tight tolerances, often down to microns, ensuring the highest
            quality standards.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Key Features of Micro Machining:
          </h3>
          <ul className="list-disc pl-5 space-y-3 text-gray-700">
            <li>
              Exceptional Precision: Achieving accuracy down to the micron
              level.
            </li>
            <li>
              Material Versatility: Suitable for metals, plastics, ceramics, and
              more.
            </li>
            <li>Efficiency: Fast production times with minimal waste.</li>
            <li>
              Complex Geometries: Capable of creating complex, miniature parts
              that other methods can't handle.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Applications of Micro Machining:
          </h3>
          <ul className="list-disc pl-5 space-y-3 text-gray-700">
            <li>
              Electronics: Creating tiny connectors, sensors, and circuit
              boards.
            </li>
            <li>
              Medical Devices: Fabricating implants, surgical instruments, and
              microfluidic chips.
            </li>
            <li>
              Aerospace: Manufacturing lightweight, high-performance components
              for aircraft and satellites.
            </li>
            <li>
              Automotive: Producing miniature parts like fuel injectors and
              sensors.
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="flex-1 mt-8 md:mt-0">
          <img
            src={micromachining}
            alt="Micro Machining"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default MicroMachining;
