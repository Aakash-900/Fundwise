import React, {useEffect} from 'react'
import Hero from '../../components/Hompage_Components/Hero/Hero'
import Section from '../../components/Hompage_Components/Section/Section'
// import Search from '../../components/Hompage_Components/Search/Search'
// import DonationContain from '../../components/Hompage_Components/DonationContain/DonationContain'
import SectionContain from '../../components/Hompage_Components/SectionContain/SectionContain'
import FundraisingPlatform from '../../components/Hompage_Components/FundraisingPlatform/FundraisingPlatform'
import PartnersSection from '../../components/Hompage_Components/Partner/PartnersSection'
import HumanitarianMission from '../../components/Hompage_Components/HumanitarianMission/HumanitarianMission'
import StartCampaign from '../../components/Hompage_Components/StartCampaign/StartCampaign'
 

import './Home.css'
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <Hero/>  
        <Section/>
        {/* <Search/> */}
        {/* <DonationContain/> */}
        <SectionContain/>
        <FundraisingPlatform/>
        <HumanitarianMission/>
        <PartnersSection/>
        <StartCampaign/>
        
    </div>
  )
}

export default Home
