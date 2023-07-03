import React from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import CreateAndSell from "./components/CreateAndSell/CreateAndSell";
import LiveAuctions from "./components/LiveAuctions/LiveAuctions";
import TopSeller from "./components/TopSeller/TopSeller";
import TodaysPics from "./components/TodaysPics/TodaysPics";
import PopularCollections from "./components/PopularCollections/PopularCollections";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="max-w-screen-[1920px]">
      <Hero />
      <CreateAndSell />
      <LiveAuctions />
      <div className="bg-[#F8F8F8]">
        <TopSeller />
      </div>
      <TodaysPics/>
      <div className="bg-[#F8F8F8]">
        <PopularCollections/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
