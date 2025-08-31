import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const partners = [
  {
    id: 1,
    logo: require("../assets/swi.jpg"),
    name: "Waveline Sports Pvt. Ltd.",
    description: `We hold the Master License to conduct the Michael Phelps Swimming Program across India.
    
With a mission to provide high-quality swim instruction with unsurpassed customer service, Waveline Sports Pvt. Ltd. started operations in the year 2015.

Today, that principle remains the backbone of our company which has expanded to more than 25 locations across the subcontinent.

We provide consistent, superior instruction at each of our centers with an optimum learning environment year-round. Each instructor is hand-picked for their love of swimming and trained to help every swimmer reach their full potential.`,
  },
  {
    id: 2,
    logo: require("../assets/padukone.webp"),
    name: "Padukone School of Badminton",
    description: `Padukone School of Badminton brings world-class badminton coaching and grassroots development programs. 
With a focus on technique, fitness and competitive mindset, they run academies and camps that have produced national-level players.
Their certified coaches emphasize long-term athlete development and sportsmanship.`,
  },
  {
    id: 3,
    logo: require("../assets/garyy.png"),
    name: "Gary Kirsten Cricket India",
    description: `Gary Kirsten Cricket India offers professional cricket coaching, batting methodology, and high-performance camps led by internationally experienced coaches.
They focus on skill refinement, mental preparation and match-situation training for youth and senior players across the country.`,
  },
  {
    id: 4,
    logo: require("../assets/spolto.jpg"),
    name: "Spolto Lawn Tennis",
    description: `Spolto Lawn Tennis provides modern tennis coaching for beginners through advanced players.
Their programs focus on footwork, shot development and match play strategy, delivered at well-maintained courts with progressive training plans and tournaments.`,
  },
  {
    id: 5,
    logo: require("../assets/abc.avif"),
    name: "ABC Sports & Fitness Academy",
    description: `ABC Sports & Fitness Academy runs basketball programs, fitness training and youth development initiatives.
They combine skill coaching, physical conditioning and team-building to create versatile athletes prepared for school, club and competitive play.`,
  },


];

const OurPartners = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  return (
    <div className="bg-black min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Stylish header section */}
        <div className="mb-16 text-center">
          <h2 className="text-sm uppercase tracking-widest text-green-600 mb-2">Collaborations</h2>
          <h1 className="text-5xl font-bold text-white mb-6">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6CD123] to-[#B5FF4D]">Partners</span></h1>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </div>
        
        {/* Carousel container */}
        <div className="relative">
          <Slider {...settings} className="partner-slider">
            {partners.map((partner) => (
              <div key={partner.id} className="px-4 outline-none">
                <div className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden transform transition duration-300 hover:scale-102 hover:shadow-green-400/20">
                  <div className="flex flex-col md:flex-row">
                    {/* Logo section */}
                    <div className="md:w-1/3 p-8 flex items-center justify-center bg-gray-900">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="max-h-64 object-contain rounded-lg"
                      />
                    </div>
                    
                    {/* Content section */}
                    <div className="md:w-2/3 p-8">
                      <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6CD123] to-[#B5FF4D] mb-4">
                        {partner.name}
                      </h3>
                      <div className="prose prose-lg prose-invert">
                        {partner.description.split('\n\n').map((paragraph, index) => (
                          <p key={index} className="mb-4 text-gray-300">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      <div className="mt-6">
                        <button className="px-6 py-3 bg-gradient-to-r from-[#6CD123] to-[#B5FF4D] hover:bg-green-600 text-black font-bold rounded-full transition duration-300 transform hover:-translate-y-1">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          
          {/* Custom arrow styles */}
          <style jsx global>{`
            .slick-prev:before, .slick-next:before {
              color: #6CD123;
              font-size: 30px;
            }
            .slick-dots li button:before {
              color: #6CD123;
              font-size: 12px;
            }
            .slick-dots li.slick-active button:before {
              color: #B5FF4D;
            }
            .slick-slide {
              padding: 0 5px;
            }
            .slick-list {
              margin: 0 -5px;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;