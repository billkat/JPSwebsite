import React from "react";
import trading1 from "../assets/Images/plastictrading1.jpg";
import trading2 from "../assets/Images/jps3.jpg";

const EngineeringPlasticsTrading = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6 text-[#214fc6] my-4">
        Engineering Plastics Trading
      </h1>
      <p className="text-lg text-center mb-8">
        At JPS Engineers, we specialize in the trade of high-performance
        engineering plastics, offering an extensive range of materials that
        cater to various industrial and engineering applications. Whether you're
        looking for durability, heat resistance, chemical stability, or
        mechanical strength, our engineering plastics provide the ideal solution
        for your manufacturing needs.
      </p>

      {/* Two images side by side */}
      <div className="flex justify-between mb-8">
        <img
          src={trading1}
          alt="Plastic Example 1"
          className="w-1/2 pr-2 object-contain"
        />
        <img
          src={trading2}
          alt="Plastic Example 2"
          className="w-1/2 pl-2 object-contain"
        />
      </div>

      {/* Content List */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">
          Our Range of Engineering Plastics
        </h2>
        <ul className="space-y-4 text-gray-700">
          <li>
            <strong>Polyamide (Nylon PA6, PA66):</strong> Known for its
            strength, toughness, and wear resistance, nylon is ideal for
            components in automotive, machinery, and industrial applications.
          </li>
          <li>
            <strong>Polyoxymethylene (POM/Acetal):</strong> Acetal provides
            excellent dimensional stability, low friction, and high rigidity,
            making it perfect for precision parts such as gears, bearings, and
            bushings.
          </li>
          <li>
            <strong>Polycarbonate (PC):</strong> Offering excellent impact
            resistance and optical clarity, polycarbonate is commonly used in
            electrical, automotive, and construction sectors.
          </li>
          <li>
            <strong>Acrylonitrile Butadiene Styrene (ABS):</strong> With its
            balanced toughness, rigidity, and resistance to high impacts, ABS is
            ideal for applications like automotive parts, consumer goods, and
            electronics.
          </li>
          <li>
            <strong>Polyethylene Terephthalate (PET):</strong> PET is known for
            its excellent wear resistance and low coefficient of friction,
            suitable for applications such as food packaging, electrical
            insulation, and mechanical parts.
          </li>
          <li>
            <strong>Polytetrafluoroethylene (PTFE):</strong> PTFE is famous for
            its high chemical resistance and low friction, making it perfect for
            use in gaskets, seals, and non-stick coatings.
          </li>
          <li>
            <strong>Polypropylene (PP):</strong> With its resistance to fatigue
            and chemical corrosion, polypropylene is used in a variety of
            applications such as packaging, piping, and medical equipment.
          </li>
          <li>
            <strong>Polyether Ether Ketone (PEEK):</strong> A high-performance
            thermoplastic, PEEK offers outstanding thermal, chemical, and
            mechanical properties, often used in aerospace, automotive, and
            medical industries.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EngineeringPlasticsTrading;
