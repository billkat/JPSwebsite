import React from "react";
import ropeways1 from "../assets/Images/ropewayImg2.jfif";
import ropeways2 from "../assets/Images/winter.jpg";

const RopewaySolutions = () => {
  return (
    <div className="bg-gray-100 py-10 px-5 ">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#214fc6] capitalize mb-6">
          Ropeway Engineering Solutions
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Transforming Mobility with Cutting-Edge Ropeway Systems
        </p>
      </div>

      {/* Image and content side by side with 50% width each */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 mb-16">
        <div className="w-full lg:w-1/2">
          <img
            src={ropeways2}
            alt="Ropeway Image 1"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <section>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Ropeway Services
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  Consultation & Feasibility Study
                </h3>
                <p className="text-gray-600">
                  We begin each project with a thorough site analysis and
                  feasibility study, assessing factors such as terrain, weather
                  conditions, and environmental impact. Our team ensures that
                  the ropeway solution we design is not only technically viable
                  but also economically sound.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  Design & Engineering
                </h3>
                <p className="text-gray-600">
                  Leveraging state-of-the-art technology, we specialize in the
                  design of passenger, material, and industrial ropeways. Our
                  team of experienced engineers works closely with clients to
                  deliver customized ropeway systems that meet international
                  safety standards, while being aesthetically integrated with
                  the surrounding environment.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* More content */}
      <div className="max-w-6xl mx-auto">
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Why Choose JPS Engineers for Ropeways?
          </h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>
              Expertise in Challenging Terrains: From rugged mountains to dense
              urban environments, our team has successfully completed projects
              in a variety of challenging terrains.
            </li>
            <li>
              Sustainability Focus: Ropeway systems are an eco-friendly
              alternative to traditional transportation methods, reducing the
              carbon footprint while offering efficient mobility solutions.
            </li>
            <li>
              Comprehensive Safety Measures: Safety is paramount in all our
              designs and operations, ensuring the highest standards are met for
              both passengers and cargo.
            </li>
            <li>
              Tailor-Made Solutions: Every ropeway system is uniquely designed
              to meet the specific needs of our clients, from high-capacity
              cable cars for tourism to industrial material handling solutions.
            </li>
          </ul>
        </section>

        {/* Another image and content side by side */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 mb-16">
          <div className="w-full lg:w-1/2">
            <img
              src={ropeways1}
              alt="Ropeway Image 2"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <section>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Applications of Ropeway Systems
              </h2>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>
                  Tourism & Ski Resorts: Ropeways provide breathtaking views and
                  easy access to high-altitude destinations, enhancing the
                  tourism experience in hill stations, national parks, and ski
                  resorts.
                </li>
                <li>
                  Urban Mobility: In congested cities, ropeways offer an
                  innovative solution to alleviate traffic, connecting
                  neighborhoods and providing quick, efficient transportation.
                </li>
                <li>
                  Material Transport: For industries in remote or
                  difficult-to-reach locations, ropeway systems offer a reliable
                  method for transporting goods and raw materials.
                </li>
              </ul>
            </section>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Contact us today!
          </h2>
          <p className="text-gray-600">
            With JPS Engineers, your ropeway project is in expert hands. Our
            commitment to innovation, sustainability, and safety ensures that we
            deliver world-class ropeway solutions, custom-built to meet the
            demands of modern infrastructure.
          </p>
          <p className="text-gray-600 mt-4">
            Explore how we can bring your ropeway vision to life!
          </p>
        </div>
      </div>
    </div>
  );
};

export default RopewaySolutions;
