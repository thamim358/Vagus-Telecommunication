import React, { useEffect } from "react";
import WOW from "wow.js";
import {
  IconCash,
  IconCast,
  IconChartInfographic,
  IconFileAnalytics,
  IconHexagon,
  IconSignal5g,
  IconUsers,
  IconWorld,
} from "@tabler/icons-react";

export const Diffrence = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  const cardsData = [
    {
      logo: <IconCast size={60} />,
      title: "Fast",
      description: "Speeds from 100Mbps up to 1Gbps for quick browsing.",
    },
    {
      logo: <IconSignal5g size={60} />,
      title: "Dedicated Fiber",
      description: "No slowdowns, even with multiple concurrent users online.",
    },
    {
      logo: <IconHexagon size={60} />,
      title: "Symmetric",
      description: "Equal download and upload speeds, essential for business use.",
    },
    {
      logo: <IconChartInfographic size={60} />,
      title: "Widely available",
      description: "Available at 1.5 sites in India, including metro locations.",
    },
    {
      logo: <IconWorld size={60} />,
      title: "Reliable",
      description: "Designed for 99.5% network availability, with 4G backup option.",
    },
    {
      logo: <IconUsers size={60} />,
      title: "Expert Support",
      description: "100% Indian team providing 24x7 expert support services.",
    },
    {
      logo: <IconFileAnalytics size={60} />,
      title: "No upfront build cost",
      description: "In 90% of cases on a standard 3-year contract with savings.",
    },
    {
      logo: <IconCash size={60} />,
      title: "Affordable",
      description: "Starting at $x per month, providing cost-effective internet solutions.",
    },
  ];
  

  return (
    <>
      <div className="section pb-10 mt-4" id="why" style={{ textAlign: "justify", textJustify: "auto" }}>
        <div className="">
          <p className="text-4xl sm:text-2xl lg:text-5xl text-[#ff6131] font-bold text-center wow fadeInUp pt-4">
            Why Choose Vagus Telecommunications
          </p>
          <p className="text-xl text-center text-gray-500 mt-8 sm:p-5 p-5">
            At Vagus Telecommunications, we believe in building lasting connections. Our focus on
            cutting-edge technology and unwavering commitment ensures that you experience seamless
            communication and stay ahead in this digital age.
          </p>
          <div className="flex flex-wrap justify-center mt-24 wow fadeInUp mx-10 lg:mx-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">
              {cardsData.map((card, index) => (
                <div className="flex" key={index}>
                  <div
                    className="group bg-white bg-opacity-5 rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-500"
                    style={{ borderRadius: "10px" }}
                  >
                    <div className="flex justify-center p-3 wow fadeInUp self-center">
                      {card.logo}
                    </div>
                    <div className="px-4 py-2">
                      <h3 className="text-base text-center text-[#ff6131] uppercase font-bold mb-1 wow fadeInUp">
                        {card.title}
                      </h3>
                      <p className="text-[#737070] text-center font-semibold text-base p-3 wow fadeInUp">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Diffrence;
