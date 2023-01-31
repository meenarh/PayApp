import React from "react";
import twitter from "../assets/images/twitter.png";
import insta from "../assets/images/insta.png";
import whatsapp from "../assets/images/whatsapp.png";

const Footer = () => {
  return (
    <div className="footer flex gap-10 bg-black text-white h-[100px] md:justify-center">
        <ul className="flex flex-row m-5 p-5 gap-10">
          <li>About</li>
          <li>FAQ</li>
          <li>Terms & Conditions</li>
        </ul>
    </div>
  );
};

export default Footer;
