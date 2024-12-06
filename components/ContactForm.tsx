import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/ContactForm.module.css";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Digital Marketing",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here (like sending data to an API)
    console.log("Form submitted:", formData);
    setFormStatus("Thank you for reaching out! We will get back to you shortly.");
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      service: "Digital Marketing",
      message: "",
    });
  };

  return (
    <section className="bg-gradient-to-b from-gray-900 via-black to-gray-800 py-16">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4776E6] to-[#8E54E9] mb-8">
          Contact Us
        </h2>
        <p className="text-gray-300 text-lg mb-12">
          Have a question or need more information about our services? Get in touch with us below!
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.form
          onSubmit={handleSubmit}
          className="bg-[#1C1C1C] p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
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
              className="w-full p-4 rounded-lg text-white bg-gray-800 border-2 border-transparent focus:ring-2 focus:ring-[#4776E6]"
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
              className="w-full p-4 rounded-lg text-white bg-gray-800 border-2 border-transparent focus:ring-2 focus:ring-[#4776E6]"
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
              className="w-full p-4 rounded-lg text-white bg-gray-800 border-2 border-transparent focus:ring-2 focus:ring-[#4776E6]"
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
              className="w-full p-4 rounded-lg text-white bg-gray-800 border-2 border-transparent focus:ring-2 focus:ring-[#4776E6]"
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
        </motion.form>

        {formStatus && (
          <div className="mt-8 text-center text-green-400">
            <p>{formStatus}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
