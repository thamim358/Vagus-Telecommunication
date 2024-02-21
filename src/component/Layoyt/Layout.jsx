import React,{useEffect} from "react";
import Header from "../Header/Header";
import AboutUs from "../About Us/About Us";
import Diffrence from "../Diffrence/Diffence";
import  Partners  from "../Partners/Partners";
import ContactUs from "../Contact us/Contact";
import Landing from "../Landing/Landing";
import Footers from "../Footer/Footers";
import Top from "../Header/top";

function Layout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    
    <>
    <div className="">
      <Top/>
      <Header/>
      <Landing/>
      <AboutUs/>
      <Diffrence/>
      <Partners/>
      <ContactUs/> 
      <Footers/>
      </div>
    </>
  );
}

export default Layout;
