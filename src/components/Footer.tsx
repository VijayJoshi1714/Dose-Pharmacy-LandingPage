import React from 'react';

export const Footer: React.FC = () => (
  <footer className="bg-white border-t border-[#E5E7EB] py-10 pl-14 mt-16">
    <div className="max-w-8xl lg:mx-[100px] mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div className="flex flex-col items-center md:items-start">
          {/* Logo at top */}
          <img src="/logo.png" alt="Vasi Pharma Logo" className="mb-3 mt-[-25px] w-32 h-auto" />
          <h3 className="text-xl font-bold text-[#1464B9] font-inter mb-2">Vasi Pharma LLC</h3>
          <p className="text-[#6B7280] font-poppins text-sm mb-4 max-w-xs">
            Transforming how new medicines <br />are discovered through deep <br />science, advanced technology,<br /> and artificial intelligence
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold text-[#1464B9] font-inter mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2 items-center md:items-start">
            <li><a href="#hero" className="text-[#6B7280] hover:text-[#1464B9] font-poppins transition">Home</a></li>
            <li><a href="#therapeutic-areas" className="text-[#6B7280] hover:text-[#1464B9] font-poppins transition">Research Areas</a></li>
            <li><a href="#pipeline" className="text-[#6B7280] hover:text-[#1464B9] font-poppins transition">Pipeline</a></li>
            <li><a href="#technology" className="text-[#6B7280] hover:text-[#1464B9] font-poppins transition">Technology</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold text-[#1464B9] font-inter mb-4">Contact</h4>
          <div className="text-[#6B7280] font-poppins text-base space-y-2">
            <p>150 N Research Campus Dr.<br />Suite 4109</p>
            <p>Kannapolis, NC 28081, USA</p>
            <p className="mt-4">
              <a href="mailto:info@vasipharma.com" className="hover:text-[#1464B9] transition">
                info@vasipharma.com
              </a>
            </p>
            <p>
              <a href="tel:+1234567890" className="hover:text-[#1464B9] transition">
                +1 (234) 567-8900
              </a>
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold text-[#1464B9] font-inter mb-4">Follow Us</h4>
          <div className="flex gap-4 justify-center md:justify-start">
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="text-[#6B7280] hover:text-[#1464B9] transition">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="2" />
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M7 10v4M7 7v.01M12 10v4m0 0v-2a2 2 0 1 1 4 0v2" />
              </svg>
            </a>
            {/* Twitter */}
            <a href="#" aria-label="Twitter" className="text-[#6B7280] hover:text-[#1464B9] transition">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M22 5.92a8.38 8.38 0 0 1-2.36.65A4.13 4.13 0 0 0 21.4 4.1a8.19 8.19 0 0 1-2.6 1A4.1 4.1 0 0 0 12 8.09c0 .32.04.64.1.94A11.65 11.65 0 0 1 3 4.89a4.07 4.07 0 0 0-.55 2.06c0 1.42.72 2.68 1.82 3.42a4.07 4.07 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.29 4.02c-.18.05-.37.08-.57.08-.14 0-.27-.01-.4-.04a4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 19.54a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22 5.92Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-[#6B7280] text-sm mt-8 font-poppins border-t border-[#E5E7EB] pt-8">
        &copy; 2025 Vasi Pharma LLC. All rights reserved.
      </div>
    </div>
  </footer>
);