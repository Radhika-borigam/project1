import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Digital Marketing",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormStatus("Thank you for reaching out! We will get back to you shortly.");
    setFormData({
      name: "",
      email: "",
      service: "Digital Marketing",
      message: "",
    });
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-black to-gray-800 py-16 overflow-hidden">
      {/* Background Moving Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 blur-lg rounded-tr-lg animate-move-shape-1" />
        <div className="absolute top-8 right-12 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 opacity-50 blur-lg rounded-full animate-move-shape-2" />
        <div className="absolute bottom-12 left-10 w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 opacity-50 blur-lg rounded-full animate-move-shape-3" />
        <div className="absolute bottom-8 right-20 w-18 h-18 bg-gradient-to-r from-yellow-500 to-red-500 opacity-50 blur-lg rounded-tr-lg animate-move-shape-4" />
        <div className="absolute top-1/3 left-1/4 w-14 h-14 bg-gradient-to-r from-teal-400 to-purple-700 opacity-50 blur-lg rounded-full animate-move-shape-5" />
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-gradient-to-r from-indigo-400 to-green-500 opacity-50 blur-lg rounded-bl-lg animate-move-shape-6" />
      </div>

      {/* Section Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-wrap lg:flex-nowrap items-center relative z-10 gap-10">
        {/* Left Side: Contact Form */}
        <motion.div
          className="lg:w-1/2 w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Updated Contact Us Header */}
          <h3 className="text-3xl font-bold text-blue-500 text-center tracking-wider mb-6">
            CONTACT US...!
          </h3>

          <form onSubmit={handleSubmit} className="bg-[#1A1A1A] p-8 rounded-xl shadow-lg">
            <div className="mb-6">
              <label className="block text-gray-300 text-lg mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 rounded-lg text-white bg-[#1C1C1C] border-2 border-transparent focus:ring-2 focus:ring-[#4776E6]"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 text-lg mb-2" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-lg text-white bg-[#1C1C1C] border-2 border-transparent focus:ring-2 focus:ring-[#4776E6]"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 text-lg mb-2" htmlFor="service">
                Choose Service
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full p-4 rounded-lg text-white bg-[#1C1C1C] border-2 border-transparent focus:ring-2 focus:ring-[#4776E6]"
                required
              >
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Cloud Services">Cloud Services</option>
                <option value="IT Services">IT Services</option>
                <option value="DevOps Solutions">DevOps Solutions</option>
                <option value="Custom Software Development">Custom Software Development</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 text-lg mb-2" htmlFor="message">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 rounded-lg text-white bg-[#1C1C1C] border-2 border-transparent focus:ring-2 focus:ring-[#4776E6]"
                placeholder="Tell us about your needs"
                rows={6}
                required
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="text-white bg-gradient-to-r from-[#4776E6] to-[#8E54E9] py-2 px-6 rounded-lg text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </form>

          {formStatus && (
            <div className="mt-8 text-center text-green-400">
              <p>{formStatus}</p>
            </div>
          )}
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          className="lg:w-1/2 w-full flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/contact22.webp"
            alt="Contact Illustration"
            width={500}
            height={500}
            className="rounded-full shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
