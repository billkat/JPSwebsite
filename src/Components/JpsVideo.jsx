import React from "react";
import Jps from "../assets/video/jpsvideo1.mp4";

function JpsVideo() {
  return (
    <div className="w-full h-[90vh] max-lg:h-[50vh] max-md:h-[40vh] max-sm:h-[30vh]">
      <video
        width="100%"
        className="h-full w-full object-cover"
        loop
        muted
        autoPlay
      >
        <source src={Jps} type="video/mp4" />
      </video>
    </div>
  );
}

export default JpsVideo;
