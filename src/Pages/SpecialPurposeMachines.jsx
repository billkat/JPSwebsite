import React from "react";
import img1 from "../assets/Images/machine2.jpg";
import img2 from "../assets/Images/machine3.jpg";

const SpecialPurposeMachines = () => {
  return (
    <div className="  mx-auto p-6">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#214fc6] my-4">
          Special Purpose Machines (SPMs)
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          At JPS Engineers, we specialize in designing and manufacturing Special
          Purpose Machines (SPMs) tailored to meet the unique requirements of
          industries across various sectors.
        </p>
      </header>

      {/* Section 1: What are Special Purpose Machines? */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          What are Special Purpose Machines?
        </h2>
        <p className="text-lg text-gray-600">
          Special Purpose Machines are customized automation solutions designed
          to perform a particular task or a series of tasks in a manufacturing
          process. Unlike general-purpose machines, which can handle a wide
          range of operations, SPMs are engineered to perform a single
          specialized function or a set of related tasks. These machines are
          typically designed for high-volume production environments, where
          speed, precision, and consistency are critical.
        </p>
        <p className="text-lg text-gray-600 mt-4">
          SPMs are commonly used in industries such as automotive, aerospace,
          electronics, and metalworking, where there is a need to automate
          complex or specialized processes. They help improve throughput, reduce
          human error, enhance precision, and reduce operational costs by
          performing tasks that would otherwise require manual labor or several
          steps of intervention.
        </p>
      </section>

      {/* Images Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex justify-center items-center">
          <img src={img1} alt="SPM Image 1" className="rounded-lg shadow-lg" />
        </div>
        <div className="flex justify-center items-center">
          <img src={img2} alt="SPM Image 2" className="rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Section 2: Why Choose JPS Engineers */}
      <section className="mb-12 mt-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Why Choose JPS Engineers for Your Special Purpose Machines?
        </h2>
        <ul className="list-disc pl-6 text-lg text-gray-600">
          <li>
            Customized Design Solutions: We take the time to understand your
            specific requirements, ensuring that the SPM we design fits
            perfectly into your production process.
          </li>
          <li>
            Innovative Engineering: We focus on integrating the latest
            technological advancements like automation, robotics, and smart
            sensors.
          </li>
          <li>
            High Precision and Reliability: Our SPMs are designed for high
            precision, ensuring that every part produced meets the strictest
            quality standards.
          </li>
          <li>
            Cost-Effective Solutions: Our machines are engineered for
            performance and efficiency, minimizing production costs and
            maximizing ROI.
          </li>
          <li>
            After-Sales Support: We provide comprehensive after-sales support
            including installation, training, and maintenance services.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default SpecialPurposeMachines;
