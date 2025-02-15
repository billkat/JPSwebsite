import React from "react";
import video1 from "../assets/video/jpsvideo1.mp4";
import video2 from "../assets/video/jpsvideo2.mp4";
import video3 from "../assets/video/jpsvideo3.mp4";
import video4 from "../assets/video/jpsvideo4.mp4";

function Newsroom() {
  return (
    <>
      {/* =========================events==================== */}

      <div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20">
        <h1 className="text-3xl text-center font-bold text-blue-500 capitalize">
          Welcome to the Upcoming events
        </h1>
        <div className="border-l-2 mt-10">
          {/* Card 1 */}
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            {/* Dot Follwing the Left Vertical Line */}
            <div className="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

            {/* Line that connecting the box with the vertical line */}
            <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

            {/* Content that showing in the box */}
            <div className="flex-auto">
              <h1 className="text-lg">Date ------------</h1>
              <h1 className="text-xl font-bold">
                Orientation and Briefing on Uniliver basics
              </h1>
              <h3>Address ---------</h3>
            </div>
            <a
              href="#"
              className="text-center font-bold text-white hover:text-gray-300"
            >
              Upcoming Event
            </a>
          </div>

          {/* Card 2 */}
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-purple-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            {/* Dot Follwing the Left Vertical Line */}
            <div className="w-5 h-5 bg-purple-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

            {/* Line that connecting the box with the vertical line */}
            <div className="w-10 h-1 bg-purple-300 absolute -left-10 z-0"></div>

            {/* Content that showing in the box */}
            <div className="flex-auto">
              <h1 className="text-lg">Date -----------</h1>
              <h1 className="text-xl font-bold">
                Orientation and Briefing on Uniliver basics
              </h1>
              <h3>Address ---------</h3>
            </div>
            <a
              href="#"
              className="text-center font-bold text-white hover:text-gray-300"
            >
              Upcoming Event
            </a>
          </div>
        </div>
      </div>

      {/* ================================Gallery================== */}

      <div className="bg-white dark:bg-gray-800 h-full py-6 sm:py-8 lg:py-6">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-12">
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
                Gallery
              </h2>

              <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
                Discover the best in contemporary art at our gallery, showcasing
                diverse collections from emerging and established artists
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            {/* video - start */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <video
                src={video2}
                autoPlay
                loop
                muted
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                4/47, AJANTA TEXTILE COMPOUND UPSIDC SITE-2, MOHAN NAGAR
                GHAZIABAD U.P. 201007
              </span>
            </a>
            {/* video - end */}

            {/* video - start */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <video
                src={video1}
                autoPlay
                loop
                muted
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Previous Event
              </span>
            </a>
            {/* video - end */}

            {/* video - start */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <video
                src={video3}
                autoPlay
                loop
                muted
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                3/20, AJANTA COMPOUND SITE-2, MOHAN NAGAR GHAZIABAD U.P. 201007
              </span>
            </a>
            {/* video - end */}

            {/* video - start */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <video
                src={video4}
                autoPlay
                loop
                muted
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                4/47, AJANTA TEXTILE COMPOUND UPSIDC SITE-2, MOHAN NAGAR
                GHAZIABAD U.P. 201007
              </span>
            </a>
            {/* video - end */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Newsroom;
