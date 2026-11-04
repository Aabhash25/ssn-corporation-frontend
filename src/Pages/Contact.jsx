import React from "react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

const offices = [
  {
    title: "Corporate Office",
    code: "NC",
    location: "5540 Centerview Dr, Ste 304 \n Raleigh, NC 27606",
    phone: "(919) 703-0222",
    email: "contact@ssncorporation.com",
  },
  {
    title: "Virginia Office",
    code: "VA",
    location: "8401 Mayland Dr, Ste A,\n Richmond, VA 23294",
    phone: "(919) 703-0222",
    email: "contact@ssncorporation.com",
  },
  {
    title: "Georgia Office",
    code: "GA",
    location: "6500 McDonough Dr, Ste E-04\nNorcross, GA 30093",
    phone: "(470) 504-5962",
    email: "contact@ssncorporation.com",
  },
  {
    title: "Florida Office",
    code: "FL",
    location: "7901 4th St N, Ste 300\nSt. Petersburg, FL 33702",
    phone: "(919) 703-0222",
    email: "contact@ssncorporation.com",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-12 py-18 pt-42">
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-4">
          Contact SSN Corporation
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-roboto text-gray-700 max-w-3xl mx-auto">
          Reach out for inquiries, collaborations, or project consultations. Our
          team is ready to provide the support and guidance you need.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <ContactForm />
        </motion.div>

        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          {offices.map((office) => (
            <div
              key={office.code}
              className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition transform duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-playfair font-bold text-gray-900 mb-4">
                {office.title}
              </h3>

              <p className="flex items-center text-gray-700 font-roboto text-lg mb-2">
                <MapPinIcon className="h-5 w-5 text-orange-400 mr-3" />
                <span className="whitespace-pre-line">{office.location}</span>
              </p>

              <p className="flex items-center text-gray-700 font-roboto text-lg mb-2">
                <PhoneIcon className="h-5 w-5 text-orange-400 mr-3" />
                {office.phone}
              </p>

              <p className="flex items-center text-gray-700 font-roboto text-lg">
                <EnvelopeIcon className="h-5 w-5 text-orange-400 mr-3" />
                {office.email}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
