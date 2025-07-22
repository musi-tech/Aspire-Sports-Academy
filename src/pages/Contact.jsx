import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt} from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Map from '../components/Map';


const ContactForm = () => {
  return (
    <>
      <Header />
      <Map />
      
      <Footer />
    </>
  );
};

export default ContactForm;
