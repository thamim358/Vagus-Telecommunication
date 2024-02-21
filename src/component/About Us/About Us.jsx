import React, { useEffect } from "react";
import "../Header/Header.scss";
import tele from "../img/4884152.jpg";
import WOW from "wow.js";
import { useNavigate } from "react-router-dom";


export const AboutUs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  const handleChange = (value) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/about");
  };
  return (
    <div className="section" id="aboutsection"          style={{ textAlign: "justify", textJustify: "auto" }}>
      <div className="py-10 sm:px-2">
        <div className="p-10 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div className="image">
            <img
              className=" mt-4 lg:mt-8 w-full mb-4 lg:mb-8  h-96 rounded-2xl wow fadeInUp"
              src={tele}
              alt="Logo Image"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-start items-start lg:items-end  ">
            <div className="text-5xl text-[#ff6131] font-bold mb-2 lg:mb-6 self-start  wow fadeInUp">
              About 
            </div>
            <div className="text-lg text-black font-normal leading-relaxed mb-2 lg:mb-6 wow fadeInUp">
            
            Vagus Telecommunications stands as a leading company dedicated to providing exceptional
        services since our inception. Our commitment to technological advancement and customer
        satisfaction sets us apart in the industry.
            </div>
            <div className="text-lg text-black font-normal leading-relaxed mb-2 lg:mb-6 wow fadeInUp">
            Our team comprises experts who continually innovate to meet the evolving needs of our
        customers. We prioritize reliability, speed, and efficiency to deliver the best
        telecommunications solutions.
            </div>
            {/* <button
              className="mt-3 flex gap-2 bg-[#ff6131] self-start text-white font-bold py-1 px-4 rounded-full  wow fadeInUp cursor-pointer text-lg transform transition duration-500 hover:scale-125"
              type="submit"
            >
              MORE <IconArrowElbowRight />
              
            </button> */}
          </div>
        
           
         
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
