import React from "react";
import Header from "../Header/Header";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Licensing() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen p-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-md">
          <h1 className="text-3xl font-semibold mb-6 text-[#ff6131]">
            Licensing
          </h1>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">
              1. Licensing Information
            </h2>
            <p>
              At Vagus Telecommunications, we operate under various licenses and
              certifications to ensure compliance with industry standards and
              regulations. Our licenses include:
            </p>
            <ul className="list-disc pl-6">
              <li>[Telecommunication License 1]</li>
              <li>[Telecommunication License 2]</li>
            </ul>
            <p>
              These licenses and certifications validate our commitment to
              quality, professionalism, and adherence to regulatory requirements
              in the telecommunications industry.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">
              2. Licensing Compliance
            </h2>
            <p>
              We strictly adhere to the guidelines and standards set forth by
              the regulatory bodies governing the telecommunications field.
              Compliance with licensing requirements is a fundamental aspect of
              our operations, ensuring that we maintain the highest level of
              professionalism and ethical conduct.
            </p>
            {/* Add more content */}
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p>
              For any inquiries or further information regarding our licensing
              and certifications, please contact us at{" "}
              <a
                href="mailto:info@vagustelecommunication.ind.in"
                className="text-blue-500"
              >
                info@vagustelecommunications.ind.in
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Licensing;
