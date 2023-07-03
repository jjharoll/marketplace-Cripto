import React from "react";
import logo2 from "../../assets/Logo2.png";
import { FaPaperPlane, FaTwitter, FaFacebook, FaYoutube, FaTiktok,FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-[1410px] mx-auto px-5 py-12">
      <div className="md:grid grid-cols-5 gap-5">
        <div>
          <img src={logo2} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            expedita.
          </p>
        </div>
        <div>
          <ul>
            <li className="font-bold mb-3">My Account</li>
            <li className="text-gray-500 mb-1">Authors</li>
            <li className="text-gray-500 mb-1">Collection</li>
            <li className="text-gray-500 mb-1">Author Profile</li>
            <li className="text-gray-500 mb-1">Create Collection</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="font-bold mb-3">Resources</li>
            <li className="text-gray-500 mb-1">Help & Support</li>
            <li className="text-gray-500 mb-1">Live Auctions</li>
            <li className="text-gray-500 mb-1">Item Details</li>
            <li className="text-gray-500 mb-1">Activity</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="font-bold mb-3">Company</li>
            <li className="text-gray-500 mb-1">About Us</li>
            <li className="text-gray-500 mb-1">Contact Us</li>
            <li className="text-gray-500 mb-1">Our Blog</li>
            <li className="text-gray-500 mb-1">Discover</li>
          </ul>
        </div>
        <div>
          <li className="font-bold mb-3 list-none">Subscribe Us</li>
          <div className="flex">
            <input
              type="email"
              className="bg-gray-200 outline-none p-1"
              name=""
              placeholder="info@yourgmail.com"
              id=""
            />
            <div className="bg-[#5228e2] inline-block text-white text-2xl px-2 py-1 rounded-e-lg ">
              <FaPaperPlane />
            </div>
          </div>
          <div className="flex gap-4 mt-5 ">
            <FaTwitter/>
            <FaFacebook/>
            <FaPaperPlane/>
            <FaYoutube/>
            <FaTiktok/>
            <FaDiscord/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
