import React from "react";
import hdpe from "../assets/Images/hdperode.jpg";
import plasticimg from "../assets/Images/Plastics-.gif";
import nylonsheet from "../assets/Images/nylonsheet.jpg";

const EngineeringPlastics = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl text-[#214fc6] font-bold text-center mb-8 capitalize py-5">
        Engineering Plastics by JPS Engineers
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* First Image with content */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={plasticimg} // Replace with real image link
            alt="Nylon Machine Parts"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Nylon Machine Parts</h2>
            <p className="text-gray-700">
              Our Nylon Machine Parts are designed for durability and precision,
              offering excellent wear resistance and strength-to-weight ratio.
              Ideal for industrial applications requiring robust, low-friction
              components.
            </p>
          </div>
        </div>

        {/* Second Image with content */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={hdpe} // Replace with real image link
            alt="HDPE Rods"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">HDPE Rods</h2>
            <p className="text-gray-700">
              Our HDPE rods provide superior performance in applications needing
              high impact resistance, low moisture absorption, and excellent
              machinability. Suitable for heavy-duty use in various industries.
            </p>
          </div>
        </div>
        {/* ==========third====== */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={nylonsheet} // Replace with real image link
            alt="Nylon Sheets"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Nylon Sheets</h2>
            <p className="text-gray-700">
              Nylon sheets are widely used in engineering plastics for their
              strength, durability, and versatility. These sheets are made from
              polyamide materials, which offer exceptional mechanical
              properties. Nylon sheets are known for their high tensile
              strength, impact resistance, and wear resistance, making them
              ideal for industrial applications such as machine parts, gears,
              bushings, and bearings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineeringPlastics;
