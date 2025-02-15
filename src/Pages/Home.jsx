import React from "react";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import About from "../Components/About";
import Service from "../Components/Service";
import Strength from "../Components/Strength";
import RopwayPart from "../Components/RopwayPart";
import PlasticPart from "../Components/PlasticPart";
import MetalPart from "../Components/MetalPart";
import Fabrication from "../Components/Fabrication";
import MachineShop from "../Components/MachineShop";
import MachineryList from "../Components/MachineryList";

import ClientJPS from "../Components/ClientJPS";
import JpsVideo from "../Components/JpsVideo";

function Home() {
  return (
    <>
      {/* <JpsVideo /> */}
      <Carousel />
      <About Aboutus={"ABOUT US"} />
      <Service title={"SERVICES WE OFFERED"} />
      <Strength />
      <RopwayPart />
      <ClientJPS />
      <PlasticPart title={"PLASTIC PARTS"} />
      <MetalPart title={"METAL COMPONENT"} />
      <Fabrication title={"FABRICATION"} />
      <MachineShop title={"MACHINE SHOP"} />
      {/* <MachineryList /> */}
    </>
  );
}

export default Home;
