import React from "react";
import logo from "./img/logo.png";

function Footer() {
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  }
  return (
    <div className="block bg-blue-700 py-12 items-center justify-center">
          <div className="w-full flex items-center justify-center -mt-3 mb-3">
              <img src={logo} alt="" className="h-16 w-16" />
          </div>
          <p className="text-md text-center text-white">
              Company Name: Metabot Inc <br/>

              Company Registration # : 340-88-02113 <br/>

              App development & Service <br/> <br/>

              Copyrights © {getYear()} Metabot Inc. <br/>
              </p>
    </div>
  );
}

export default Footer;
