import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import AboutContant from "./Pages/AboutContant";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact";
import ServicePage from "./Pages/ServicePage";
import PlasticPage from "./Pages/PlasticPage";
import MetalPage from "./Pages/MetalPage";
import FabricationPage from "./Pages/FabricationPage";
import MachinePage from "./Pages/MachinePage";
import ScrollTop from "./Components/ScrollTop";
import Newsroom from "./Pages/Newsroom";
import RopewaySolutions from "./Pages/RopewaySolutions";
import EngineeringPlastics from "./Pages/EngineeringPlastics";
import MicroMachining from "./Pages/MicroMachining";
import SpecialPurposeMachines from "./Pages/SpecialPurposeMachines";
import ReverseEngineering from "./Pages/ReverseEngineering";
import EngineeringPlasticsTrading from "./Pages/EngineeringPlasticsTrading";
import Loading from "./Components/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to handle right-click context menu
    const handleContextMenu = (event) => {
      event.preventDefault(); // Prevent the default context menu
    };

    // Function to handle keydown events
    const handleKeyDown = (event) => {
      // Disable F12 key and Ctrl+Shift+I (for Chrome)
      if (
        event.key === "F12" ||
        (event.ctrlKey && event.shiftKey && event.key === "I")
      ) {
        event.preventDefault(); // Prevent the default behavior
      }
    };

    // Add event listeners
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup function to remove the listeners when the component unmounts
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <ScrollTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutContant />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/plasticpart" element={<PlasticPage />} />
        <Route path="/metalpart" element={<MetalPage />} />
        <Route path="/fabrication" element={<FabricationPage />} />
        <Route path="/machine" element={<MachinePage />} />
        <Route path="/newsroom" element={<Newsroom />} />
        <Route path="/RopewaySolutions" element={<RopewaySolutions />} />
        <Route path="/EngineeringPlastics" element={<EngineeringPlastics />} />
        <Route path="/MicroMachining" element={<MicroMachining />} />
        <Route
          path="/SpecialPurposeMachines"
          element={<SpecialPurposeMachines />}
        />

        <Route path="/ReverseEngineering" element={<ReverseEngineering />} />
        <Route
          path="/EngineeringPlasticsTrading"
          element={<EngineeringPlasticsTrading />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
