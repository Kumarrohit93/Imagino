import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";
const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ repeat: true }}
      className="flex flex-col items-center justify-center my-20 py-12"
    >
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        Customer Testimonials
      </h1>
      <p className="text-gray-500 mb-12">Whats Our Users Are saying</p>
      <div className="flex flex-wrap gap-6 justify-center">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 w-72 flex flex-col items-center text-center 
                 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={testimonial.image}
              alt=""
              className="rounded-full w-20 h-20 mb-4 border-4 border-green-100 shadow-sm"
            />
            <h2 className="font-bold text-lg text-gray-800">
              {testimonial.name}
            </h2>
            <p className="text-green-600 font-medium text-sm mb-3">
              {testimonial.role}
            </p>

            <div className="flex mb-4 justify-center">
              {Array(testimonial.stars)
                .fill()
                .map((_, starIndex) => (
                  <img
                    key={starIndex}
                    src={assets.rating_star}
                    alt=""
                    className="w-5 h-5"
                  />
                ))}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
