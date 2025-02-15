import React, { useEffect } from "react";
import Service from "../Components/Service";
import Plant from "../assets/Images/IMG_0250.jpg";
import fabrii from "../assets/Images/fabrii.jpg";
import design from "../assets/Images/design.jfif";
import ropeway22 from "../assets/Images/wireImg.avif";
import plantUp from "../assets/Images/IMG_0288.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const data = [
  {
    title: "Complete Plant Inspection",
    image: Plant,
    description:
      'JPS Engineers provides "Complete Plant Inspection" services to ensure that your industrial facilities operate safely and efficiently. Our skilled team conducts rigorous inspections to ensure structural integrity, machinery operation, and compliance with safety standards. We give extensive data and actionable insights to help you avoid costly downtime and increase productivity. JPS Engineers provides complete evaluations that use advanced tools and technology to identify potential risks and optimize plant operations. Partner with us to maintain high standards in your plants infrastructure and equipment, assuring the dependability and safety of your staff and investments.Contact JPS Engineers immediately for top - notch inspection services. ',
  },
  {
    title: "Structural Fabrication",
    image: fabrii,
    description:
      "Explore structural fabrication services from JPS Engineers, where precision engineering meets inventive design. Our skilled staff specializes in creating high-quality steel structures that are both durable and safe for all projects. From original concept to final implementation, we offer comprehensive solutions that are suited to your individual needs. Whether its a commercial, industrial, or residential project, JPS Engineers will deliver great craftsmanship and dependability.Discover how our cutting- edge technology and dedication to excellence can make your vision a reality.Visit us today to discover more about our structural fabrication capabilities and how we can help with your next project.",
  },
  {
    title: "Non Destruction Test of Mechanical/Civil Structure",
    image:
      "https://www.hkcalibrations.com.au/pub/media/wysiwyg/norbar/sh1jpg4.jpg",
    description:
      "JPS Engineers specializes in non-destructive testing (NDT) for mechanical and civil constructions. Our innovative processes ensure the integrity and safety of materials and structures while causing no damage. Whether using ultrasonic testing, radiography, or other NDT technologies, we ensure accurate and dependable results to help your structures last longer and perform better. JPS Engineers provides comprehensive inspections and quality assurance to ensure that your infrastructure is safe and durable. Explore our services to safeguard your capital and meet industry requirements.",
  },
  {
    title: "Design",
    image: design,
    description:
      " JPS Engineers offers creative design solutions. Our skilled staff specializes in developing technical designs that are both sustainable and visually beautiful, as well as tailored to fulfill the needs of various projects. From design to completion, we use advanced technology and industry best practices to achieve remarkable results. Learn how our creative approach and technological experience can help you turn your vision into reality. Whether its urban planning, structural design, or environmental engineering, JPS Engineers is your partner in creating a better tomorrow.Contact us today to learn more about our complete design services and how we can help with your next project.",
  },
  {
    title: "NDTMFL of steel wire rope",
    image: ropeway22,
    description: `Discover JPS Engineers' expertise in Non-Destructive Testing (NDT) for Metal Fibered Lifting (MFL) steel wire ropes. We ensure that industrial lifting equipment meets the highest safety and reliability standards. Our innovative NDT procedures detect hidden faults, corrosion, and wear, thereby avoiding accidents and equipment failures. Trust our professional services for complete inspection, maintenance, and certification of steel wire ropes, which are critical in industries such as construction, mining, and maritime. JPS Engineers provides you with peace of mind by ensuring that your operations are secure and in compliance with industry requirements. Contact us today for skilled NDT solutions that are suited to your specific needs.`,
  },
  {
    title: "Inspection & Material Testing",
    image:
      "https://img.freepik.com/free-photo/workers-uniforms-protecting-against-corona-virus_342744-121.jpg?t=st=1722599231~exp=1722602831~hmac=2745ddc4ff6455d4937143a447334d42a6949d59bbfccad1f06abb65a4a94f5d&w=900",
    description: `JPS Engineers are experts in inspection and material testing, providing comprehensive solutions to assure the quality and integrity of materials and structures. Our skilled staff uses advanced procedures and technology to conduct precise inspections and testing, discovering any defects or discrepancies. We serve a wide range of industries, offering trustworthy evaluations that adhere to regulatory standards and client demands. JPS Engineers provides precise, efficient, and detailed inspection and testing services, ensuring that your projects are built on a solid foundation of quality and safety. We are your excellence partner, and we prioritize precision and professionalism in all of our projects.`,
  },
  {
    title: "Plant Upgradation and Medication",
    image: plantUp,
    description: `Discover JPS Engineers' expertise in Plant Upgradation and Medication Services. Our team provides cutting-edge solutions for updating industrial plants, increasing efficiency, and assuring compliance with the most recent standards. From equipment improvements to process optimization, we offer comprehensive support to enhance plant performance and lifetime. Learn how our cutting-edge technologies and industry knowledge can revolutionize your facilities, decrease downtime, and boost productivity. JPS Engineers provides dependable, cost-effective, and long-lasting plant upgrade and medication services. Contact us today to learn more about our unique solutions designed to meet your specific operational requirements.
`,
  },
];

function ServicePage() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <div className="about-contant ">
        <h2 className="text-gray-900 font-bold text-center uppercase text-5xl max-sm:text-4xl pt-[12rem]">
          Services
        </h2>
      </div>

      <p className="pt-10 px-10  leading-6 custom-paragraph max-sm:text-center max-sm:px-2">
        We are blessed by a huge and innovative infrastructural facility that is
        well connected with all the major means of transportation. We have
        further divided our infrastructural facility into enormous departments
        which include manufacturing department, production department, quality
        testing department, R&D department, warehousing and packaging
        department, etc., for hassle free business operations. Our production
        unit is well-armed with the latest tools, machines and equipments for
        timely meeting the large-scale requirements of our patrons.
        Additionally, we also upgrade our infrastructure at regular interval in
        adherence with current market scenario to enhance the production rate.
      </p>
      <div className="w-full mx-auto max-sm:w-full">
        <Service />
      </div>
      <h1 className="text-center text-[#214fc6] text-5xl font-bold max-sm:text-3xl">
        NON DESTRUCTIVE TESTING
      </h1>
      <div className="w-full min-h-[100vh] my-16 overflow-hidden">
        {data.map((item, index) => (
          <div
            key={index}
            className={`w-[96%] min-h-[60vh]  flex justify-center gap-12 items-center max-md:flex-wrap mx-auto mb-20 ${
              index % 2 === 1 ? "flex-row-reverse" : ""
            }`}
            data-aos="zoom-in"
          >
            <div className="w-[600px] h-[60vh] rounded-2xl overflow-hidden">
              <img
                src={item.image}
                className="w-full h-full object-cover rounded-2xl hover:scale-150 duration-300 "
              />
            </div>
            <div className="w-[550px] min-h-full p-4 overflow-hidden ">
              <h1 className="text-center text-[#214fc6] text-xl sm:text-2xl lg:text-2xl uppercase font-bold mb-12">
                {item.title}
              </h1>
              <p className="max-sm:text-justify">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ServicePage;
