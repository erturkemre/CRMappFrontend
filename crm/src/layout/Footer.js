import { FacebookIcon, Instagram, TwitterIcon } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";



const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col bg-[#FAFAFA]  w-full ">
      <div className="flex flex-col sm:flex-row sm:justify-between p-5 sm:min-w-full sm:px-40">
        <NavLink to="/" className="text-2xl font-bold text-black">
          CRM Dashboard
        </NavLink>
        <div className="text-blue-500">
          <NavLink to="https://www.instagram.com/" className="px-1">
            <Instagram className="inline-block" />
          </NavLink>
          <NavLink to="https://www.facebook.com/" className="px-1">
            <FacebookIcon className="inline-block" />
          </NavLink>
          <NavLink to="https://www.x.com/" className="px-1">
            <TwitterIcon className="inline-block" />
          </NavLink>
        </div>
      </div>
      <div className="bg-white sm:flex sm:justify-evenly p-10">
        <div className="text-gray-500 pb-5 sm:pb-0">
          <h4 className="font-bold text-black pb-4">Company Info</h4>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div className="text-gray-500 pb-5 sm:pb-0">
          <h4 className="font-bold text-black pb-4">Legal</h4>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div className="text-gray-500 pb-5 sm:pb-0">
          <h4 className="font-bold text-black pb-4">Features</h4>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div className="text-gray-500 pb-5 sm:pb-0">
          <h4 className="font-bold text-black pb-4">Resources</h4>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div className="text-gray-500 pb-5 sm:pb-0">
          <h4 className="font-bold text-black pb-4">Get In Touch</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={handleEmailChange}
              className="border border-gray-300  p-2"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4  mt-2 hover:bg-blue-600"
            >
              Subscribe
            </button>
          </form>
          <p>Lorem ip sum dolor armit</p>
        </div>
      </div>

      <div className="text-sm  sm:px-40 text-gray-500 p-5 ">
        <p>© Made With Love By Finland All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
