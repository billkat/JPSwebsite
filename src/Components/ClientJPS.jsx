import React from "react";
import Slider from "react-slick";
import adverb from '../assets/Images/adverb.png';
import drill from '../assets/Images/drill.png';
import jk from '../assets/Images/jk.png';
import clearpack from '../assets/Images/clearpack.png';
import jktour from '../assets/Images/jktour.png';
import allied from '../assets/Images/allied.png';
import dabar from '../assets/Images/dabar.png';
import indo from '../assets/Images/indo.png';
import motherson from '../assets/Images/motherson.png';
import uno from '../assets/Images/uno.png';
import escort from '../assets/Images/escort.png';
import unilever from '../assets/Images/unilever.svg'
import cocaCola from '../assets/Images/cocaCola.webp'
import ace from '../assets/Images/ace.webp'
import patanjali from '../assets/Images/patanjali.png'
import cocalogo from '../assets/Images/cocalogo.png'
import itc from '../assets/Images/itc.jpg'


function ClientJPS() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };


  const clients = [
    { src: unilever, name: "UNILEVER" },
    { src: cocaCola, name: "COCO-COLA" },
    { src: ace, name: "ACE" },
    { src: patanjali, name: "PATANJALI" },
    // { src: cocalogo, name: "Coca-Cola" },
    { src: itc, name: "ITC" },
    { src: adverb, name: "ADDVERB" },
    { src: drill, name: "DRIL" },
    { src: jk, name: "J&K CABLE" },
    { src: clearpack, name: "CLEARPACK" },
    { src: jktour, name: "J&K TOURISM" },
    { src: allied, name: "ALLIED BLENDERS" },
    { src: dabar, name: "DABUR" },
    { src: indo, name: "INDO FARM" },
    { src: motherson, name: "MOTHERSON" },
    { src: uno, name: "UNO MINDA" },
    { src: escort, name: "ESCORT KUBOTA" }
  ];
  return (
    <div className="my-4">
      <h1 className='text-center text-[#214fc6] text-3xl max-sm:text-3xl lg:text-5xl uppercase font-bold mb-12'>
        our Client
      </h1>
      <div className="slider-container">
        <Slider {...settings} className=" overflow-hidden" >
          {
            clients.map((item, index) =>
              <div className="p-5 " key={index}>
                <img src={item.src} alt="" className="w-full h-full  object-contain" style={{ aspectRatio: "3/2" }} loading="lazy" />
              </div>
            )
          }
        </Slider>
      </div>

    </div>
  )
}



export default ClientJPS