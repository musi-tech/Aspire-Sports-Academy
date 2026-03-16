// App.js
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import NotificationCenter from '../components/NotificationCenter';
import OperatingHours from '../components/OperatingHours';
import Services from '../components/Services';
import SportsOffered from '../components/SportsOffered';
import MembershipPlans from '../components/MembershipPlans';
import HomeHighlights from '../components/HomeHighlights';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';


function LandingPage() {
  return (
    <div className="font-sans bg-[#D8DBD5]">
      <Header />
      <Hero />
      <NotificationCenter />
      <HomeHighlights />
      <Services />
      <SportsOffered />
      <MembershipPlans/>
      <OperatingHours/>
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default LandingPage;