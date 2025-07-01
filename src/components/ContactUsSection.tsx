import React, { useState } from 'react';

export const ContactUsSection: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
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
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row shadow-2xl overflow-hidden bg-white min-h-[400px] md:min-h-[600px] rounded-none md:rounded-2xl">
        {/* Left Panel: Image */}
        <div className="relative w-full md:flex-1 md:min-w-[320px] md:max-w-[400px] min-h-[200px] md:min-h-[600px] flex flex-col justify-center items-center">
          <img
            src="/ChatGPT Image Jun 29, 2025, 10_52_48 PM 2.png"
            alt="Scientist in laboratory"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-blue-700 bg-opacity-60 z-10" />
          {/* SVG Separator */}
          <svg
            className="hidden md:block absolute right-[-40px] top-0 h-full w-16 z-20 pointer-events-none"
            viewBox="0 0 100 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M100 0C60 200 60 500 100 700L0 700L0 0Z" fill="#fff" />
          </svg>
          <div className="relative z-30 flex flex-col items-center justify-center h-full w-full p-6 md:p-8 text-center">
            <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2 tracking-wide text-white drop-shadow">
              WELCOME TO
            </h3>
            <div className="text-lg md:text-2xl font-extrabold mb-1 md:mb-2 tracking-widest text-white drop-shadow">
              DOSE PHARMACY
            </div>
            <p className="text-white text-opacity-90 max-w-xs text-sm md:text-base drop-shadow">
              We welcome your questions and ideas. Reach out and our team will respond promptly.
            </p>
          </div>
        </div>

        {/* Right Panel: Form */}
        <div className="w-full md:flex-[1.3] bg-white p-6 md:p-8 flex flex-col justify-center min-h-[300px] md:min-h-[600px] z-40 md:max-w-md">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 font-inter text-[#1464B9] text-center md:text-left">
            Get in touch
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6 items-stretch">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="p-2 md:p-3 rounded-lg border border-[#E5E7EB] focus:border-[#1464B9] focus:ring-2 focus:ring-[#1464B9]/20 outline-none font-poppins text-sm md:text-base transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="p-2 md:p-3 rounded-lg border border-[#E5E7EB] focus:border-[#1464B9] focus:ring-2 focus:ring-[#1464B9]/20 outline-none font-poppins text-sm md:text-base transition"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className="p-2 md:p-3 rounded-lg border border-[#E5E7EB] focus:border-[#1464B9] focus:ring-2 focus:ring-[#1464B9]/20 outline-none font-poppins text-sm md:text-base transition resize-none"
            />
            <button
              type="submit"
              className="bg-[#1464B9] text-white font-semibold py-2 md:py-3 rounded-lg mt-2 hover:bg-[#174ea6] transition-colors font-inter text-base md:text-lg"
            >
              Send Message
            </button>
            {submitted && (
              <p className="text-green-600 font-poppins mt-2 text-sm md:text-base transition-opacity duration-300 ease-in-out">
                Thank you for contacting us! We'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};