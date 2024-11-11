import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="relative">
      <Navbar />

      {/* Hero Section */}
      <div className="container mx-auto grid lg:grid-cols-2 items-center h-screen px-4 lg:px-0">
        {/* Image Section */}
        <div className="flex justify-center  lg:justify-center " data-aos="zoom-in-up">
          <div
            id="hero-section"
            className="bg-no-repeat bg-cover"
            style={{
              backgroundImage: "url(/profile.png)",
              backgroundPosition: "left 20px top 0px",
              backgroundColor: "#bc87f1",
              borderWidth: "5px",
              borderColor: "#2C3E50",
              borderRadius: "50%",
              width: "350px",
              height: "350px",
            }}
          ></div>
        </div>

        {/* Text Section */}
        <div className="text-center  lg:text-left lg:pl-10">
          <h3 className="text-[25px] sm:text-[60px] leading-tight" data-aos="zoom-in-up">
            Hey , I AM FAIZA SIDDIQUI
          </h3>
          <p className="text-base font-medium  sm:text-lg mt-4"  data-aos="zoom-in-up">
            I am a passionate web developer with a love for creating dynamic and
            user-friendly websites My expertise lies in HTML, CSS, JavaScript
            and frameworks like Nextjs and Tailwind CSS. I strive to bring
            innovative ideas to life while ensuring a seamless user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
