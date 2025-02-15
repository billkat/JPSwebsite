import React from "react";
import reverseImg from "../assets/Images/jps4.jpg";

const ReverseEngineering = () => {
  return (
    <div className=" mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-[#214fc6] my-8">
        Reverse Engineering Services
      </h1>

      <div className="flex flex-wrap justify-between items-center mb-8">
        {/* Text Content Section */}
        <div className="w-full md:w-1/2 px-2">
          <p className="text-lg mb-4">
            At JPS Engineers, we specialize in providing cutting-edge Reverse
            Engineering services that enable businesses to understand, analyze,
            and recreate complex systems, products, and components. Our
            expertise spans across industries, helping clients gain deeper
            insights into existing designs, improve product functionality, and
            develop accurate documentation for legacy systems.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Why Choose Reverse Engineering?
          </h2>
          <ul className="list-disc ml-5 mb-4">
            <li className="mb-2">
              Lack detailed design documentation for legacy systems.
            </li>
            <li className="mb-2">
              Wish to analyze competitor products for benchmarking purposes.
            </li>
            <li className="mb-2">
              Need to create replacements for discontinued or obsolete parts.
            </li>
            <li className="mb-2">
              Aim to improve an existing design or rectify design flaws.
            </li>
          </ul>
          <p className="text-lg">
            At JPS Engineers, our reverse engineering process allows us to
            extract essential data from physical objects, providing our clients
            with accurate digital models that can be used for future
            enhancements or replication.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 px-2">
          <img
            src={reverseImg}
            alt="Reverse Engineering Process"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Reverse Engineering Capabilities Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">
          Our Reverse Engineering Capabilities:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* 3D Scanning and Modeling */}
          <div>
            <h3 className="text-xl font-bold mb-2">3D Scanning and Modeling</h3>
            <p>
              Using advanced 3D scanning technologies, we capture precise
              measurements of physical objects. This data is then converted into
              accurate 3D CAD models that replicate the original product design.
            </p>
          </div>

          {/* Detailed CAD Reconstruction */}
          <div>
            <h3 className="text-xl font-bold mb-2">
              Detailed CAD Reconstruction
            </h3>
            <p>
              Our engineering team uses Computer-Aided Design (CAD) software to
              recreate original designs, ensuring all details are replicated
              exactly as intended. We can also make modifications to improve the
              functionality or address any design inefficiencies.
            </p>
          </div>

          {/* Material and Component Analysis */}
          <div>
            <h3 className="text-xl font-bold mb-2">
              Material and Component Analysis
            </h3>
            <p>
              Understanding the material composition and properties of a product
              is a critical step in reverse engineering. We perform in-depth
              material analysis to help clients determine the best materials for
              performance, durability, and cost-effectiveness.
            </p>
          </div>

          {/* Prototyping and Testing */}
          <div>
            <h3 className="text-xl font-bold mb-2">Prototyping and Testing</h3>
            <p>
              Once the design is reverse-engineered, we can assist with
              prototyping and testing to validate the functionality and
              performance of the recreated product. This ensures that any
              adjustments or improvements are reflected in the final version.
            </p>
          </div>

          {/* Legacy Product Documentation */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-2">
              Legacy Product Documentation
            </h3>
            <p>
              For businesses with outdated systems or products, reverse
              engineering offers a way to recover lost design documentation. We
              provide comprehensive technical documentation, including 2D
              drawings, assembly instructions, and part specifications for
              future reference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReverseEngineering;
