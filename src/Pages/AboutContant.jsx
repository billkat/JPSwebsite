import React from "react";
import About from "../Components/About";

function AboutContant() {
  return (
    <div>
      <div className="about-contant ">
        <h2 className="text-gray-900 font-bold text-center uppercase text-5xl max-sm:text-4xl pt-[12rem]">
          About us{" "}
        </h2>
      </div>
      <p className="pt-10 px-10  leading-6 custom-paragraph max-sm:text-center max-sm:px-2">
        Incorporated in the year 2007 at Ghaziabad (Uttar Pradesh, India), we
        “JPS Engineers” is known as the prominent Manufacturer, Supplier and
        Service Provider occupied in offering a comprehensive range of Jigs And
        Fixtures, Nylon Machine Parts, Plastic Machine Parts, Ropeway Parts,
        Brass Components, Metal Bushes and Plastic Bushes. Our offered products
        are widely acknowledged in the market for their qualitative features
        such as easy installation, precise dimensions, robust construction,
        application specific design, excellent finish, etc. The Tool Room
        Service, Steel Fabrication Service and Ropeway Maintenance Service are
        rendered by our team of experienced professionals as per the exact
        requirements and necessities of our honorable customers. Moreover,
        clients can easily avail these products from us at industry leading
        prices within the promised time span. Under the leadership of our
        Proprietor “Pardeep Singh”, we have gained huge success across the
        nation.
        <About />
      </p>
    </div>
  );
}

export default AboutContant;
