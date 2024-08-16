// components/Testimonials.js
import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';



const testimonials = [
  { name: 'John Doe', text: `Sports Academy has transformed my fitness journey. Highly recommended!`, image: 'https://placehold.co/400' },
  { name: 'Jane Smith', text: `The coaching staff is top-notch. I've improved tremendously in just a few months.`, image: 'https://placehold.co/400' },
  { name: 'Mike Johnson', text: `Great facilities and a welcoming community. It's more than just a gym!`, image: 'https://placehold.co/400' },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-[#040404] text-[#D8DBD5]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#6CD123]">What Our Members Say</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-[#1F1F1F] p-6 rounded-lg shadow-lg text-center flex flex-col items-center"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <p className="mb-4 italic text-[#7C7C7C]">"{testimonial.text}"</p>
                <p className="font-semibold text-[#6CD123]">- {testimonial.name}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
