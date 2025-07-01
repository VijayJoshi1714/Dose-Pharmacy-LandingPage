import React from "react";
import { Button } from "../../components/ui/button";

export const Frame = (): JSX.Element => {
  // Navigation items
  const navItems = [
    { text: "Home", width: "w-[72px]" },
    { text: "Research areas", width: "w-[246px]" },
    { text: "Pipeline", width: "w-[93px]" },
    { text: "Technolgy", width: "w-[131px]" },
  ];

  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="overflow-x-hidden w-[1539px] h-[3841px] relative">
        {/* Hero Section */}
        <section className="absolute w-[1550px] h-[1044px] top-0 left-px">
          <div className="relative w-[1536px] h-[1044px]">
            {/* Hero Background Image */}
            <img
              className="absolute w-[1536px] h-[1024px] top-5 left-0 object-cover"
              alt="Scientist in laboratory"
              src="/chatgpt-image-jun-29--2025--10-52-48-pm-1.png"
            />

            {/* Dark Overlay */}
            <div className="absolute w-[1536px] h-[1026px] top-[18px] left-0 bg-[#00000040]" />

            {/* Main Heading */}
            <h1 className="absolute w-[1027px] top-[412px] left-[274px] [-webkit-text-stroke:1.5px_#ffffff] [font-family:'Inter',Helvetica] font-normal text-white text-7xl text-center tracking-[0] leading-[normal]">
              Accelerating Breakthroughs
              <br /> in Drug Discovery
            </h1>

            {/* Navigation Bar */}
            <header className="absolute w-[1536px] h-[150px] top-[18px] left-0 bg-white flex items-center">
              {/* Logo */}
              <img
                className="w-[197px] h-[197px] ml-[84px] object-cover"
                alt="Company Logo"
                src="/chatgpt-image-jun-26--2025--01-25-31-pm--1--removebg-preview-2.png"
              />

              {/* Navigation Items */}
              <nav className="flex ml-[161px]">
                {navItems.map((item, index) => (
                  <div
                    key={index}
                    className={`${item.width} [font-family:'Poppins',Helvetica] font-normal text-black text-2xl text-center tracking-[0] leading-[normal] ${
                      index > 0 ? "ml-[25px]" : ""
                    }`}
                  >
                    {item.text}
                  </div>
                ))}
              </nav>

              {/* Contact Button */}
              <Button className="absolute w-[257px] h-[72px] top-[63px] left-[1197px] bg-amber-500 rounded-[5px] hover:bg-amber-600">
                <span className="[-webkit-text-stroke:0.5px_#ffffff] [font-family:'Poppins',Helvetica] font-normal text-white text-2xl text-center tracking-[0] leading-[normal]">
                  Contact us
                </span>
              </Button>
            </header>

            {/* Subtitle */}
            <p className="absolute w-[1117px] top-[587px] left-[230px] [font-family:'Inter',Helvetica] font-normal text-white text-2xl text-center tracking-[0] leading-[normal]">
              Transforming how new medicines are discovered through deep
              science, advanced technology, and artificial intelligence
            </p>

            {/* CTA Buttons */}
            <div className="absolute flex gap-[61px] top-[697px] left-[499px]">
              <Button
                variant="outline"
                className="w-[257px] h-[72px] bg-white rounded-[5px] hover:bg-gray-100"
              >
                <span className="w-[143px] [font-family:'Poppins',Helvetica] text-black text-2xl font-normal text-center tracking-[0] leading-[normal]">
                  Our Pipeline
                </span>
              </Button>

              <Button className="w-[257px] h-[72px] bg-amber-500 rounded-[5px] hover:bg-amber-600">
                <span className="[-webkit-text-stroke:1px_#ffffff] [font-family:'Poppins',Helvetica] font-normal text-white text-2xl text-center tracking-[0] leading-[normal]">
                  Contact us
                </span>
              </Button>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="absolute top-[1044px] left-0 w-[1538px] h-[282px] flex flex-col items-center justify-center">
          <h2 className="absolute top-[130px] left-[49px] [font-family:'Inter',Helvetica] text-white text-4xl font-normal text-center tracking-[0] leading-[normal]">
            Our Mission
          </h2>

          <p className="absolute w-[951px] top-[52px] left-[577px] [font-family:'Inter',Helvetica] font-normal text-white text-4xl text-center tracking-[0] leading-[normal]">
            To revolutionize the drug discovery process by integrating biology,
            chemistry, and artificial intelligence, delivering novel
            therapeutics to patients with speed, precision, and purpose
          </p>
        </section>

        {/* Features Section */}
        <img
          className="w-[1538px] h-[809px] top-[1326px] absolute left-px object-cover"
          alt="Features section background"
          src="/image-3.png"
        />

        {/* Pipeline Section */}
        <img
          className="w-[1536px] h-[900px] top-[2152px] absolute left-px object-cover"
          alt="Pipeline section background"
          src="/image-4.png"
        />

        {/* Services Section */}
        <img
          className="absolute w-[1537px] h-[789px] top-[3052px] left-0 object-cover"
          alt="Services section background"
          src="/screenshot-2025-06-30-160256-2.png"
        />
      </div>
    </div>
  );
};
