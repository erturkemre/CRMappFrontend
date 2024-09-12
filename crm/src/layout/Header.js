import React from "react";
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="hidden sm:flex  justify-between items-center p-4 bg-[#252B42] text-white">
      <div className="flex px-4 ">
        <p>
          <Phone className="inline-block" /> (541)863-7254
        </p>
      </div>
      <div>
        <Mail className="inline-block" /> emre.ertrk.3455@gmail.com
      </div>
      <div>
        <p>Follow Us and get a chance to win 80% off</p>
      </div>
      <div className="">
        <p>
          Follow Us :
          <NavLink to="https://www.instagram.com/" className="px-1">
            <Instagram className="inline-block" />
          </NavLink>
          <NavLink to="https://www.youtube.com/" className="px-1">
            <Youtube className="inline-block" />
          </NavLink>
          <NavLink to="https://www.facebook.com/" className="px-1">
            <Facebook className="inline-block" />
          </NavLink>
          <NavLink to="https://www.x.com/" className="px-1">
            <Twitter className="inline-block" />
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Header;
