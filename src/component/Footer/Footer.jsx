import React, { useEffect } from "react";
import footerImage from "../img/logo.png";
import WOW from "wow.js";
import "./Footer.scss";
import { Link  } from "react-router-dom";
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconBrandX,
} from "@tabler/icons-react";

function Footer() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  const imageStyle = {
    filter: "grayscale(100%) ",
  };
  return (
    <>
      <div className="mx-8">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      </div>

      <footer className=" py-8">
        <div className="container mx-auto items-center justify-between px-4">
          <div className="mx-auto w-full max-w-screen-xl  py-6 lg:py-8">
            <div className=" md:justify-between">
              <div className="mb-6 md:mb-0 p-14">
                <a href="" className="flex justify-center items-center wow fadeInUp">
                  <img
                    src={footerImage}
                    alt="Footer Logo"
                    className="h-44 "
                  />
                </a>
              </div>

              <div className="sm:p-10 p-10">
              <ul
              className="flex justify-center items-center gap-24 gap-y-8 sm:gap-24 "
            >
              <li>
                <Link
                  className="text-black  hover:text-[#ff6131] font-semibold font-sans cursor-pointer"
                  activeClass="active"
                  to="/"
                
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-black  hover:text-[#ff6131] font-semibold font-sans cursor-pointer"
                  to="/"
                 
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-black  hover:text-[#ff6131] font-semibold font-sans cursor-pointer"
                  to="/services"
                 
                >
                 Services
                </Link>
              </li>
              <li>
                <Link
                  className="text-black  hover:text-[#ff6131] font-semibold font-sans cursor-pointer"
                  to="/"
                 
                >
                  Partners
                </Link>
              </li>

              <li className="">
                <Link
                  className="text-black hover:text-[#ff6131] font-semibold font-sans cursor-pointer"
                  to="/"
                
                >
                  Contact Us
                </Link>
              </li>
            </ul >
               
              </div>
              
            </div>
            <div className="">
                 
                  <ul className="wow fadeInUp flex justify-center items-center gap-24 gap-y-8 sm:gap-24">
                    <li>
                      <Link
                        className="  font-semibold font-sans cursor-pointer"
                        to="/privacypolicy"
                      >
                        <div className="text-gray-500 hover:text-[#ff6131] mb-3 ">
                          Privacy Policy
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-semibold font-sans cursor-pointer"
                        to="/terms&conditions"
                      >
                        <div className="text-gray-500 hover:text-[#ff6131] mb-3 ">
                          Terms & Conditions
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className=" font-semibold font-sans cursor-pointer"
                        to="/license"
                      >
                        <div className="text-gray-500 hover:text-[#ff6131] mb-3">
                          {" "}
                          Licensing
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className=" font-semibold font-sans cursor-pointer"
                        to="/cookiespolicy"
                      >
                        <div className="text-gray-500 hover:text-[#ff6131] mb-3 ">
                          {" "}
                          Cookies Policy
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-lg text-black sm:text-center">
              &copy; {new Date().getFullYear()}
                <span className="hover:underline text-[#ff6131]">{" "}Vagus Telecommunications</span>.
                All Rights Reserved.
              </span>
              <div className="flex mt-4 sm:justify-center sm:mt-0">
                <a href="#" className="text-gray-500 hover:text-[#ff6131] ">
                  <IconBrandFacebook size={30} />
                  <span className="sr-only">Facebook page</span>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-[#ff6131]  ms-5"
                >
                  <IconBrandInstagram size={30} />
                  <span className="sr-only">Instgram page</span>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-[#ff6131]  ms-5"
                >
                  <IconBrandX size={30} />

                  <span className="sr-only">Twitter page</span>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-[#ff6131]  ms-5"
                >
                  <IconBrandLinkedin size={30} />
                  <span className="sr-only">limkdin account</span>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-[#ff6131]  ms-5"
                >
                  <IconBrandYoutube size={30} />
                  <span className="sr-only">youtube account</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
