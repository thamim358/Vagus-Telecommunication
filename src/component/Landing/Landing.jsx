import React, { useEffect } from "react";
import WOW from "wow.js";
import "./Landing.scss";
import { Link } from "react-scroll";


function Landing() {

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  const text = "Vagus Realty";
  return (
    <>
      <section id="home">
        <section className="bg-center bg-no-repeat dashboard  bg-blend-darken relative ">
          <header className="flex items-center justify-between px-4 py-3">
           
            <div className="hidden lg:block">
            
            </div>
          </header>
          <div className="px-4 py-20 lg:p-20 lg:py-40 ">
            <h1 className="mb-4 text-4xl font-bold tracking-tight wow zoomIn leading-none text-white md:text-5xl lg:text-6xl"  data-wow-duration="2s">
            Welcome to <span className="text-[#ff6131]">Vagus Telecommunications </span> 
            </h1>
            <h1 className="mb-4 text-2xl font-extrabold tracking-tight wow flipInX leading-none text-white md:text-xl sm:text-sm lg:text-2xl" data-wow-duration="4s">
            We are a leading telecommunications company providing cutting-edge solutions to connect people
        and businesses globally. Our mission is to deliver high-quality services and ensure seamless
        communication for our customers.
            </h1>
            <Link
                       to="contactme"
                       spy={true}
                       smooth={true}
                        className="inline-flex items-center px-3 py-3 text-sm font-medium text-center text-white bg-[#ff6131] rounded-lg hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300  transform transition duration-500 hover:scale-125"
                      >
                        Get In Touch
                        <svg
                          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </Link>
          </div>
          {/* Column of circles */}
    
        </section>
      </section>
    </>
  );
}

export default Landing;
