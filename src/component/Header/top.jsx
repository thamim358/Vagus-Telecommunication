import React, { useEffect } from "react";
import WOW from "wow.js";
import { IconBrandGmail, IconPhoneCall } from "@tabler/icons-react";

function Top() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <>
      <header className="w-full bg-[#ff6131] nav-bar">
        <div className="md:mx-10 lg:mx-20 flex flex-col sm:flex-row items-center justify-between sm:justify-around lg:justify-end sm:mx-4 mx-2 p-2">
          <div className="flex items-center text-white font-black font-mono text-lg p-3 sm:mb-0">
            <IconBrandGmail size={30} />
            <span className="ml-2 ">info@vagustelecommunications.ind.in</span>
          </div>
          <div className="flex items-center text-white font-black font-mono text-lg p-3">
            <IconPhoneCall size={30} />
            <span className="ml-2 ">9920617183/88</span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Top;
