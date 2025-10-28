"use client";
import React from "react";
import { motion } from "framer-motion";
import { StarIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

// Google Fonts
const FontsStyle = () => (
  <style jsx global>{`
    @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Roboto:wght@300;400;500;600;700&display=swap");

    .font-roboto {
      font-family: "Roboto", sans-serif;
    }
    .font-playfair {
      font-family: "Playfair Display", serif;
    }
  `}</style>
);

const testimonials = [
  {
    id: 1,
    name: "Bhoj Raj G",
    title: "Restaurant Owner",
    message:
      "SSN Builders delivered our restaurant project in under five months with professionalism, great communication, and quality work. Their 3D design matched the final build perfectly. Highly recommended for construction excellence.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 2,
    name: "Parshu A",
    title: "Project Manager",
    message:
      "A true professional and enthusiast, delivering the best quality work all under one roof. Always on time and exceeding expectations — an absolute dream to work with!",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=120&h=120&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Lee",
    title: "Architect, Modern Spaces",
    message:
      "Their team transformed our vision into reality. Exceptional service and expertise at every step of the project.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <>
      <FontsStyle />
      <div className="overflow-x-hidden text-gray-800 relative">
        {/* Full-width testimonials section */}
        <section className="relative py-10 md:py-14 bg-white">
          <div className="relative z-10 w-full px-8 md:px-12 lg:px-16">
            {/* Simple Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-3 bg-orange-500 rounded-xl shadow-lg">
                  <ChatBubbleLeftRightIcon className="w-7 h-7 text-white" />
                </div>
                <h2 className="ml-4 text-5xl sm:text-6xl md:text-7xl font-playfair font-bold text-gray-900">
                  What Our Clients Say
                </h2>
              </div>

              <p className="text-xl sm:text-2xl text-gray-600 font-roboto max-w-3xl mx-auto">
                Real feedback from our satisfied clients
              </p>
            </motion.div>

            {/* Clean Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl border border-gray-100"
                >
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-orange-500" />
                    ))}
                  </div>

                  {/* Message */}
                  <p className="text-gray-700 font-roboto mb-8 text-lg leading-relaxed">
                    &quot;{testimonial.message}&quot;
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-playfair font-bold text-gray-900 text-lg">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Simple Stats Section */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mt-20"
            >
              <div className="bg-gray-50 rounded-2xl p-12 max-w-4xl mx-auto">
                <h3 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mb-8">
                  Trusted by 100+ Happy Clients
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-orange-500 mb-2">
                      150+
                    </p>
                    <p className="text-gray-600">Projects Completed</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-orange-500 mb-2">
                      4.9
                    </p>
                    <p className="text-gray-600">Average Rating</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-orange-500 mb-2">
                      100%
                    </p>
                    <p className="text-gray-600">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </motion.div> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default Testimonials;
