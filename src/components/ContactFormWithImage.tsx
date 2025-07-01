import React from 'react';

export const ContactFormWithImage: React.FC = () => (
  <div className="flex flex-col md:flex-row items-stretch justify-center min-h-[500px] bg-black py-10 px-2 md:px-0">
    {/* Form Section */}
    <div className="bg-white border-2 border-black rounded-md p-8 md:p-12 flex-1 max-w-md flex flex-col justify-center mx-auto md:mx-0">
      <h2 className="text-2xl font-bold mb-6">We welcome your<br />questions and ideas</h2>
      <form className="flex flex-col gap-4">
        <div>
          <label className="block font-semibold mb-1">Name</label>
          <input type="text" placeholder="Enter your name" className="w-full border-b-2 border-gray-300 focus:border-black outline-none py-2" />
        </div>
        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input type="email" placeholder="Enter your email" className="w-full border-b-2 border-gray-300 focus:border-black outline-none py-2" />
        </div>
        <div>
          <label className="block font-semibold mb-1">Message</label>
          <textarea placeholder="Enter your message" className="w-full border-b-2 border-gray-300 focus:border-black outline-none py-2 resize-none" rows={3} />
        </div>
        <button type="submit" className="mt-4 border-2 border-black py-2 font-semibold hover:bg-black hover:text-white transition-colors">SUBMIT</button>
      </form>
    </div>
    {/* Image Section */}
    <div className="flex-1 flex items-center justify-center max-w-md mx-auto md:mx-0 bg-white rounded-md md:rounded-none md:rounded-r-md overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&q=80"
        alt="Contact reference"
        className="object-cover w-full h-full min-h-[400px]"
      />
    </div>
  </div>
);

export default ContactFormWithImage; 