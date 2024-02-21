import React, { useEffect } from "react";
import WOW from "wow.js";
import {  IconPhoneCall } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/Navbar";

function Services() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  const projectData = [
    {
      title: "Internet Services",
      description:
        " Experience lightning-fast internet with our high-speed broadband and fiber optic connections.We offer reliable and secure internet services for both residential and business needs.",
     
    },
    {
      title: "Mobile Networks",
      description:
        " Stay connected on the go with our robust mobile network coverage. Enjoy seamless communication and superior connectivity wherever you are",
     
    },
    {
      title: "Enterprise Solutions",
      description:
        "Our tailored enterprise solutions cater to businesses of all sizes. From cloud-based communication systems to data management, we provide scalable solutions to drive your business forward.tes and aspirations, harmonizing modern amenities with timeless architectural elegance. ",
    
    },
    {
      title: "VoIP (Voice over Internet Protocol)",
      description:
        "  Embrace the future of communication with our VoIP solutions. Enhance communication efficiency and reduce costs using voice and video calling over the internet.",
  
    },

    {
      title: "VoIP (Voice over Internet Protocol)",
      description:
        "  Embrace the future of communication with our VoIP solutions. Enhance communication efficiency and reduce costs using voice and video calling over the internet.",
  
    },{
      title: "Cloud Computing",
      description:
        "     Harness the power of the cloud with our cutting-edge cloud computing services. Streamlineoperations, enhance collaboration, and ensure scalability for your business in the digital era.",

    },
  ];
  

  return (
    <>
    <NavBar/>
      <div className="section" id="project">
        <div className="Name  text-5xl text-[#ff6131] mt-5 font-Achi pt-5 font-bold text-center wow fadeInUp">
          Services
        </div>
        <div className="">
       
        <div className="flex flex-wrap justify-center mt-5 wow fadeInUp mx-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {projectData.map((project, index) => (
              <div className="flex" key={index}>
                <div
                  className="bg-white  rounded-xl drop-shadow-2xl p-2 "
                  style={{ borderRadius: "20px" }}
                >
                  <div className="p-3 ml-4">
                    <h3 className="text-lg font-semibold text-black wow fadeInUp">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mt-2 wow fadeInUp">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center mt-4 wow fadeInUp">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        <Link to="/contactus">
                        <IconPhoneCall
                          className="text-gray-400  transform transition duration-500 hover:scale-125"
                          size={30}
                          style={{ color: "#ff6131" }}
                        />
                        </Link>
                        
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
 
       
      
      </div>
      <Footer/>
    </>
  );
}

export default Services;
