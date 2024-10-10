// App.js
import React from 'react';
import Header from '../components/Header';
import AboutHero from '../components/AboutHero';
import Footer from '../components/Footer';
import Get from '../components/Get';
import Introduction from '../components/Introduction';
import WhyChooseUs from '../components/WhyChooseUs';
import History from '../components/History';
import OurMission from '../components/OurMission';
import OurVision from '../components/OurVision';



function LandingPage() {
  return (
    <div className="font-sans bg-[#D8DBD5]">
      <Header />
      <AboutHero />
      <Introduction />
      <WhyChooseUs />
      <History />
      <OurMission /> 
      <OurVision />
      <Get />
      <Footer />
    </div>
  );
}

export default LandingPage;