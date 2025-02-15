import React from "react";
import AboutImg from "../assets/Images/aboutcanva.png";

function About({ Aboutus }) {
  return (
    <div className="mt-8">
      <h1 className="text-center text-[#214fc6] text-5xl font-bold max-sm:text-3xl">
        {Aboutus}
      </h1>
      <div className="w-full min-h-[60vh] flex justify-center items-center max-md:flex-wrap gap-12 mt-2 overflow-hidden">
        <div className="w-[550px] min-h-[60vh]">
          <p className=" text-justify  leading-7 custom-paragraph mx-4">
            We are manufacturing company engaged in field of manufacturing parts
            for engineering companies like intra logistics, packaging,
            automotive, conveyors, ropeways, by machining and fabrication We
            have machining facilities like CNC and VMC can work even in seventh
            axis in 7th axis. We have reverse engineering facilities along with
            design and development for ropeways and engineering companies. Our
            hardworking and knowledge staff of sales, application, and
            production engineers collaborate with our customers to guarantee
            that the goods are appropriate for the application and assist users
            in increasing productivity and lowering costs Our customers have
            consistently trusted us. From introducing comprehensive conveyor
            systems in accordance with the needs of our esteemed business
            partners. JPS ENGINEERS will continue to grow and pursue a larger
            market share. We are approaching our market from afresh angle and
            are happy to share our ideals of quality and innovation with every
            client.
          </p>
        </div>
        <div className="w-[600px] min-h-[20vh]">
          <img
            className="w-full  object-contain"
            src={AboutImg}
            alt="About Image"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
