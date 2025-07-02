import React, { useState } from 'react';
import { User, Mail, Phone, MessageSquare } from 'lucide-react';

export const ContactUsSection: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Typically, form submission would be handled here
  };

  return (
    <section id="contact" className="py-8 md:py-16 bg-gray-100 min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row shadow-2xl overflow-hidden bg-white min-h-[400px] md:min-h-[600px] rounded-none md:rounded-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]">
        {/* Left Panel: Image */}
        <div className="relative w-full md:flex-1 md:min-w-[320px] md:max-w-[400px] min-h-[200px] md:min-h-[600px] flex flex-col justify-center items-center group">
          <img
            src="/ChatGPT Image Jun 29, 2025, 10_52_48 PM 2.png"
            alt="Scientist in laboratory"
            className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-blue-700 bg-opacity-60 z-10 transition-all duration-500 group-hover:bg-opacity-50" />
          {/* SVG Separator */}
          <svg
            className="hidden md:block absolute right-[-40px] top-0 h-full w-16 z-20 pointer-events-none transition-all duration-300"
            viewBox="0 0 100 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M100 0C60 200 60 500 100 700L0 700L0 0Z" fill="#fff" />
          </svg>
          <div className="relative z-30 flex flex-col items-center justify-center h-full w-full p-6 md:p-8 text-center transition-all duration-500 group-hover:transform group-hover:scale-105">
            <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2 tracking-wide text-white drop-shadow transition-all duration-300 group-hover:text-yellow-200">
              WELCOME TO
            </h3>
            <div className="text-lg md:text-2xl font-extrabold mb-1 md:mb-2 tracking-widest text-white drop-shadow transition-all duration-300 group-hover:text-yellow-100">
              DOSE PHARMACY
            </div>
            <p className="text-white text-opacity-90 max-w-xs text-sm md:text-base drop-shadow transition-all duration-300 group-hover:text-opacity-100">
              We welcome your questions and ideas. Reach out and our team will respond promptly.
            </p>
          </div>
        </div>

        {/* Right Panel: Form */}
        <div className="w-full md:flex-[1.3] bg-white p-6 md:p-8 flex flex-col justify-center min-h-[300px] md:min-h-[600px] z-40 md:max-w-md">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 font-inter text-[#1464B9] text-center md:text-left transition-all duration-300 hover:text-[#0f4c8c] hover:transform hover:scale-105">
            Get in touch
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6 items-stretch">
            <div className="relative group">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#6B7280] w-5 h-5 transition-all duration-300 group-hover:text-[#1464B9] group-hover:scale-110" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-2 md:p-3 pl-14 rounded-lg border border-[#E5E7EB] focus:border-[#1464B9] focus:ring-2 focus:ring-[#1464B9]/20 outline-none font-poppins text-sm md:text-base transition-all duration-300 hover:border-[#1464B9] hover:shadow-md focus:transform focus:scale-[1.02]"
              />
            </div>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#6B7280] w-5 h-5 transition-all duration-300 group-hover:text-[#1464B9] group-hover:scale-110" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-2 md:p-3 pl-14 rounded-lg border border-[#E5E7EB] focus:border-[#1464B9] focus:ring-2 focus:ring-[#1464B9]/20 outline-none font-poppins text-sm md:text-base transition-all duration-300 hover:border-[#1464B9] hover:shadow-md focus:transform focus:scale-[1.02]"
              />
            </div>
            <div className="relative group">
              <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#6B7280] w-5 h-5 transition-all duration-300 group-hover:text-[#1464B9] group-hover:scale-110" />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full p-2 md:p-3 pl-14 rounded-lg border border-[#E5E7EB] focus:border-[#1464B9] focus:ring-2 focus:ring-[#1464B9]/20 outline-none font-poppins text-sm md:text-base transition-all duration-300 hover:border-[#1464B9] hover:shadow-md focus:transform focus:scale-[1.02]"
              />
            </div>
            <div className="relative group">
              <MessageSquare className="absolute left-4 top-4 text-[#6B7280] w-5 h-5 transition-all duration-300 group-hover:text-[#1464B9] group-hover:scale-110" />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full p-2 md:p-3 pl-14 rounded-lg border border-[#E5E7EB] focus:border-[#1464B9] focus:ring-2 focus:ring-[#1464B9]/20 outline-none font-poppins text-sm md:text-base transition-all duration-300 resize-none hover:border-[#1464B9] hover:shadow-md focus:transform focus:scale-[1.02]"
              />
            </div>
            <button
              type="submit"
              className="bg-[#1464B9] text-white font-semibold py-2 md:py-3 rounded-lg mt-2 hover:bg-[#174ea6] transition-all duration-300 font-inter text-base md:text-lg transform hover:scale-105 hover:shadow-lg active:scale-95"
            >
              Send Message
            </button>
            {submitted && (
              <p className="text-green-600 font-poppins mt-2 text-sm md:text-base transition-all duration-500 ease-in-out opacity-100 transform translate-y-0 animate-pulse">
                Thank you for contacting us! We'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};