import React from 'react';
import strenght1 from '../assets/Images/strenght.avif';
import strenght2 from '../assets/Images/slider5.avif';
import strenght3 from '../assets/Images/service4.avif';
import strenght4 from '../assets/Images/service2.jpeg';
import reOrder from '../assets/Images/ropewayImg1.jfif'
const services = [
    {
        description: 'Significant experience and strong track record in timely and successful execution of projects.',
        icon: strenght1
    },
    {
        description: 'Repeated orders received by us on continuous basis..',
        icon: reOrder
    },
    {
        description: 'Qualified and experienced employees led by a proven management team',
        icon: 'https://img.freepik.com/premium-photo/group-men-wearing-yellow-hard-hats-are-smiling-wearing-yellow-helmets_1275943-1133.jpg?w=740'
    },
    {
        description: 'Expertise in sourcing and maintaining supply chain for raw material.',
        icon: strenght4
    }
];

function Strength() {
    return (
        <div className="py-2 px-4 sm:px-6 lg:px-4">
            <h1 className="text-center text-[#214fc6] text-5xl font-bold my-10 uppercase">Our Strength</h1>
            <div className="flex max-md:flex-wrap justify-around gap-4">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="relative w-full sm:w-[280px] md:w-1/4  bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
                    >
                        <div className="flex h-[40vh]  justify-center items-center">
                            <img
                                className="w-full h-full object-cover transition-filter duration-300 hover:blur-md"
                                src={service.icon}
                                loading="lazy"
                                alt={`service image ${index}`}
                            />
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center p-6 opacity-0 transition-opacity duration-300 hover:opacity-100 hover:scale-115">
                            <div className="text-center">
                                <p className="text-white text-lg">{service.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Strength;
