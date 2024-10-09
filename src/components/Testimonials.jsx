import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  { 
    name: 'John Doe', 
    text: 'Sports Academy has transformed my fitness journey. Highly recommended!', 
    image: 'https://placehold.co/400' 
  },
  { 
    name: 'Jane Smith', 
    text: 'The coaching staff is top-notch. I improved in just a few months.', 
    image: 'https://placehold.co/400' 
  },
  { 
    name: 'Mike Johnson', 
    text: 'Great facilities and a welcoming community. It\'s more than just a gym!', 
    image: 'https://placehold.co/400' 
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] text-[#D8DBD5]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#6CD123] to-[#B5FF4D]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          What Our Members Say
        </motion.h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
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
                className="bg-[#252525] p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 text-center flex flex-col items-center relative overflow-hidden group"
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-[#252525] opacity-30 z-0"
                />
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-28 h-28 rounded-full object-cover mb-6 z-10 transition-transform group-hover:scale-110 duration-500"
                />
                <p className="mb-6 italic text-[#BBBBBB] text-lg z-10">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-[#6CD123] text-lg z-10">- {testimonial.name}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
