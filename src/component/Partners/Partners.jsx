import React, { useEffect } from "react";
import "../Header/Header.scss";

import vodofonr from "../img/vodofone.png"
import WOW from "wow.js"
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from "react-router-dom";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";


export const Partners = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  const partnerImages = [
    vodofonr,
   
  ];


  const scrollRight = () => {
    const container = document.getElementById("cardsContainer");
    if (container) {
      container.scrollBy({
        left: 300, // Adjust this value to suit your scroll distance
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    const container = document.getElementById("cardsContainer");
    if (container) {
      container.scrollBy({
        left: -300, // Adjust this value to suit your scroll distance
        behavior: "smooth",
      });
    }
  };

  return (
    <>

      <div className="section bg-[#F7F7F7] " id="partners"  style={{ textAlign: "justify", textJustify: "auto" }}>
      <p className="text-4xl sm:text-4xl lg:text-5xl  text-[#ff6131] font-bold text-center wow fadeInUp pt-4">
          Our Partners
          </p>

        <div className=" sm:px-2 ">
        <div
              class="flex justify-center relative"
              style={{ overflowX: "hidden" }}
            >
              <button
                onClick={scrollLeft}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#ff6131] rounded-full p-2  transition duration-500 hover:scale-125 "
              >
                <IconArrowLeft className="text-white" />
              </button>
              <div
                className="flex flex-row overflow-x-auto space-x-32 no-scrollbar p-8 max-w-screen-xl mx-auto"
                id="cardsContainer"
              >
             
             <div
                  // key={index}
                  className="flex "
                  style={{
                    flex: "0 0 auto",
                    width: "calc(100% / 4)", // Adjust this value for the number of partners you want to show on desktop
                    minWidth: "300px",
                    maxWidth: "200%",
                    borderRadius: "30px",
                  }}
                >
                    
                      <img
                        className=" w-full h-40 object-cover"
                        src={vodofonr}
                        alt=""
                      />
                  <img
                        className=" w-full h-40 object-cover"
                        src={vodofonr}
                        alt=""
                      />
                          <img
                        className=" w-full h-40 object-cover"
                        src={vodofonr}
                        alt=""
                      />
                         <img
                        className=" w-full h-40 object-cover"
                        src={vodofonr}
                        alt=""
                      />
                         <img
                        className=" w-full h-40 object-cover"
                        src={vodofonr}
                        alt=""
                      />
                         <img
                        className=" w-full h-40 object-cover"
                        src={vodofonr}
                        alt=""
                      />
                  
                  </div>
              
                <button
                  onClick={scrollRight}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#ff6131] rounded-full p-2   transition duration-500 hover:scale-125"
                >
                  <IconArrowRight className="text-white" />
                </button>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
