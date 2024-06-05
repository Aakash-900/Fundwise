import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Section from "./components/Section/Section";
import DonationContain from "./components/DonationContain/DonationContain";
import SectionContain from "./components/SectionContain/SectionContain";
import FundraisingPlatform from "./components/FundraisingPlatform/FundraisingPlatform";
import HumanitarianMission from "./components/HumanitarianMission/HumanitarianMission";
// import Signup from "./components/Signup/Signup";



function App(){
    return(
       <div>
        <Navbar/>
        <Hero/>  
        <Section/>  
        <Search/>  
        <DonationContain/>
        <SectionContain/>
        <FundraisingPlatform/>
        <HumanitarianMission/>
       </div>
    );
}
export default App
