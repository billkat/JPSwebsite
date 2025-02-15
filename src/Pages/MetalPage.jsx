import React from "react";
import MetalPart from "../Components/MetalPart";

function MetalPage() {
  return (
    <>
      <div className="about-contant ">
        <h2 className="text-gray-900 font-bold text-center uppercase text-5xl max-sm:text-4xl pt-[12rem]">
          Metal parts
        </h2>
      </div>
      <p className="pt-10 px-10  leading-6 custom-paragraph max-sm:text-center max-sm:px-2">
        JPS Engineers is a leading provider of high-quality metal part,
        specializing in precision engineering and manufacturing solutions. With
        a commitment to excellence and innovation, JPS Engineers serves various
        industries, including automotive, aerospace, construction, and
        electronics. Our state-of-the-art facilities and advanced technology
        enable us to produce a wide range of metal part, from small intricate
        parts to large structural elements, ensuring the highest standards of
        quality and durability. Our team of skilled engineers and technicians
        works closely with clients to understand their specific requirements and
        deliver tailored solutions that meet their unique needs. JPS Engineers
        values client satisfaction and strives to surpass expectations via
        continual improvement and adherence to industry best practices. Our
        comprehensive services encompass design consultation, prototyping,
        production, and quality assurance, resulting in a smooth and efficient
        process from concept to completion. JPS Engineers provides dependable,
        cost-effective, and quality metal part to improve the performance and
        lifetime of your products. Discover how our experience and dedication
        can benefit your initiatives.
      </p>
      <MetalPart />
    </>
  );
}

export default MetalPage;
