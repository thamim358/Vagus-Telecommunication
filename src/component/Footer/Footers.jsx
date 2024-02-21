import React, { useEffect } from "react";
import footerImage from "../img/logo.png";
import WOW from "wow.js";
import "./Footer.scss";
import { Link } from "react-scroll";
import { Link as Links } from "react-router-dom";
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconBrandX,
} from "@tabler/icons-react";

function Footers() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <>
      <div className="mx-8">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      </div>

      <footer className="py-8">
        <div className="container mx-auto items-center justify-between px-4">
          <div className="mx-auto w-full max-w-screen-xl py-6 lg:py-8">
            <div className="md:justify-between">
              <div className="mb-6 md:mb-0 p-14 text-center md:text-left">
                <Link to="/" className="flex justify-center items-center wow fadeInUp">
                  <img
                    src={footerImage}
                    alt="Footer Logo"
                    className="h-44 "
                  />
                </Link>
              </div>
<div className="flex justify-center">
              <div className="sm:p-10 p-6">
                <ul className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-8">
                  <li>
                    <Link
                      className="text-black hover:text-[#ff6131] font-semibold font-sans cursor-pointer"
                      activeClass="active"
                      to="home"
                      spy={true}
                      smooth={true}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-black hover:text-[#ff6131] font-semibold font-sans cursor-pointer"
                      to="aboutsection"
                      spy={true}
                      smooth={true}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Links
                      className="text-black hover:text-[#ff6131] font-semibold font-sans cursor-pointer"
                      to="/services"
                    >
                      Services
                    </Links>
                  </li>
                  <li>
                    <Link
                      className="text-black hover:text-[#ff6131] font-semibold font-sans cursor-pointer"
                      to="partners"
                      spy={true}
                      smooth={true}
                    >
                      Partners
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-black hover:text-[#ff6131] font-semibold font-sans cursor-pointer"
                      to="contactme"
                      spy={true}
                      smooth={true}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
            <div className="sm:p-6 p-4 text-center sm:text-left">
              <ul className="wow fadeInUp flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-8">
                <li>
                  <Links
                    className="text-gray-500 hover:text-[#ff6131] mb-3 font-semibold font-sans cursor-pointer"
                    to="/privacypolicy"
                  >
                    Privacy Policy
                  </Links>
                </li>
                <li>
                  <Links
                    className="text-gray-500 hover:text-[#ff6131] mb-3 font-semibold font-sans cursor-pointer"
                    to="/terms&conditions"
                  >
                    Terms & Conditions
                  </Links>
                </li>
                <li>
                  <Links
                    className="text-gray-500 hover:text-[#ff6131] mb-3 font-semibold font-sans cursor-pointer"
                    to="/license"
                  >
                    Licensing
                  </Links>
                </li>
                <li>
                  <Links
                    className="text-gray-500 hover:text-[#ff6131] mb-3 font-semibold font-sans cursor-pointer"
                    to="/cookiespolicy"
                  >
                    Cookies Policy
                  </Links>
                </li>
              </ul>
            </div>
            </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-lg text-black sm:text-center block sm:inline">
                &copy; {new Date().getFullYear()}
                <span className="hover:underline text-[#ff6131]"> Vagus Telecommunications</span>. All Rights Reserved.
              </span>
              <div className="flex mt-4 sm:justify-center sm:mt-0">
                <a href="#" className="text-gray-500 hover:text-[#ff6131] mx-2">
                  <IconBrandFacebook size={30} />
                  <span className="sr-only">Facebook page</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-[#ff6131] mx-2">
                  <IconBrandInstagram size={30} />
                  <span className="sr-only">Instagram page</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-[#ff6131] mx-2">
                  <IconBrandX size={30} />
                  <span className="sr-only">Twitter page</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-[#ff6131] mx-2">
                  <IconBrandLinkedin size={30} />
                  <span className="sr-only">LinkedIn account</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-[#ff6131] mx-2">
                  <IconBrandYoutube size={30} />
                  <span className="sr-only">YouTube account</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footers;
