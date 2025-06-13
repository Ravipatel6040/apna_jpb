import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1B0829] text-white py-10 px-4 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Left Section */}
        <div className="mb-10 md:mb-0">
          <div className="flex items-center mb-4">
            <img
              src="/Images/apna-time-icon.png"
              alt="apna logo"
              className="w-14 h-14 rounded-xl mr-4"
            />
            <div>
              <h2 className="text-lg font-semibold">Follow us on social media</h2>
             <div className="flex space-x-4 mt-2 text-2xl">

                <a href="#" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
                <a href="#" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="#" aria-label="YouTube">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
          <hr/>
          <br/>
          <div className="text-sm white-400 flex flex-wrap gap-9">
            <span>© 2025 Apna | All rights reserved</span>
            <a href="#" className="hover:underline">
              
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>

        {/* Right Section */}
      <div className="bg-white text-black rounded-xl p-4 w-full md:w-[420px] lg:w-[460px]">
  <h3 className="font-semibold text-lg mb-1">Apply on the go</h3>
  <p className="text-sm mb-3 leading-normal">
    Get real time job updates on our App
  </p>
  <div className="flex justify-between items-center gap-4">
    <a
      href="https://play.google.com/store/apps/details?id=co.apna.app"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
        alt="Google Play"
        className="w-28"
      />
    </a>
    <img
      src="https://api.qrserver.com/v1/create-qr-code/?data=https://play.google.com/store/apps/details?id=co.apna.app&size=120x120"
      alt="QR Code"
      className="w-20 h-20 -mt-2"
    />
  </div>
</div>


      </div>
    </footer>
  );
};

export default Footer;
