import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  { name: 'John Doe', text: `Sports Academy has transformed my fitness journey. Highly recommended!`, image: 'https://placehold.co/400' },
  { name: 'Jane Smith', text: `The coaching staff is top-notch. I've improved tremendously in just a few months.`, image: 'https://placehold.co/400' },
  { name: 'Mike Johnson', text: `Great facilities and a welcoming community. It's more than just a gym!`, image: 'https://placehold.co/400' },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#040404] to-[#0A0A0A] text-[#D8DBD5]">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#6CD123] to-[#B5FF4D]">
          What Our Members Say
        </h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
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
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-[#1F1F1F] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center flex flex-col items-center relative overflow-hidden"
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1F1F1F] opacity-20 z-0"
                />
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 z-10"
                />
                <p className="mb-4 italic text-[#A7A7A7] text-lg z-10">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-[#6CD123] z-10">- {testimonial.name}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
