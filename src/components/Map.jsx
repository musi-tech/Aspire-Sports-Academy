import React from 'react';

const ContactUs = () => {
  return (
    <section className="bg-black py-12 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-20">
        {/* Right Side - Contact Form (Show First on Small Screens) */}
        <div className="order-1 md:order-1 bg-gradient-to-r from-[#1F1F1F] to-[#333333] p-8 rounded-lg shadow-lg py-20">
          <h2 className="text-5xl text-center font-extrabold text-white mb-4">
            Contact <span className="text-[#6CD123]">Us</span>
          </h2>
          <form>
            {/* Name Input */}
            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6CD123] focus:border-transparent"
                placeholder="Your Name"
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6CD123] focus:border-transparent"
                placeholder="Your Email"
              />
            </div>

            {/* Subject Input */}
            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6CD123] focus:border-transparent"
                placeholder="Subject"
              />
            </div>

            {/* Message Textarea */}
            <div className="mb-6">
              <label className="block text-gray-400 text-sm mb-2" htmlFor="message">
                Write Something
              </label>
              <textarea
                id="message"
                className="w-full h-32 px-4 py-2 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6CD123] focus:border-transparent"
                placeholder="Your Message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#6CD123] to-[#32CD32] text-black font-bold py-2 px-6 rounded-full hover:shadow-lg transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Left Side - Google Map (Show Second on Small Screens) */}
        <div className="order-2 md:order-2 w-full h-[300px] md:h-full">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d118401.5624283538!2d73.8919631649906!3d18.492493376114417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x4e584abdf0795b93%3A0x909fef5d3c6be300!2sManjari%20Farm%20Rd%2C%20behind%20Grand%20Bay%20Society%2C%20Pune%2C%20Maharashtra%20412307!3m2!1d18.4925112!2d73.9743649!5e1!3m2!1sen!2sin!4v1728539955853!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            title="Aspire Sports Club Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
