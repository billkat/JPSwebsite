import React from "react";
import service from "../assets/Images/newServicefix.png";

function Service({ title }) {
  const nonDestructiveTestingItems = [
    "Complete Plant Inspection",
    "Structural Fabrication",
    "Non Destruction Test of Mechanical/Civil Structure",
    "Design",
    "NDTMFL of steel wire rope",
    "Inspection & Material Testing",
    "Plant Upgradation and Medication",
  ];

  const additionalServices = [
    "MULTI AXIS MILLED PARTS",
    "TURNING PARTS",
    "ROPEWAY",
    "MICRO MACHINING",
    "FABRICATION",
    "SPECIAL PURPOSE MACHINES",
    "UHMW PE / NYLON / ACETAL & NYLON PARTS",
    "POM / ACETAL PARTS",
    "NEW PART DEVELOPMENT",
    "REVERSE ENGINEERING",
  ];

  return (
    <div className="p-8">
      <h1 className="text-center text-[#214fc6] text-3xl sm:text-4xl lg:text-5xl font-bold my-6">
        {title}
      </h1>
      <div className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-12 mt-12">
        <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden">
          <img
            className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-200"
            src={service}
            alt="Service Image"
            loading="lazy"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row items-start  gap-8 max-md:block">
          <div className="w-full">
            <h2 className="text-xl sm:text-2xl lg:text-[25px] font-bold">
              NON DESTRUCTIVE TESTING
            </h2>
            <ul className="mt-6 list-disc pl-5">
              {nonDestructiveTestingItems.map((item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full">
            <h2 className="text-xl sm:text-2xl lg:text-[25px] font-bold mt-8 lg:mt-0">
              ADDITIONAL SERVICES
            </h2>
            <ol className="mt-6 list-decimal pl-5">
              {additionalServices.map((service, index) => (
                <li key={index} className="mb-2">
                  {service}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
