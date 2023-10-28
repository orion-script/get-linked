import React from "react";
import Logo from "../assets/getlinked.svg";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-24 w-full px-10 flex justify-between items-center border-b border-[#ffffff2e]">
      <img src={Logo} alt="logo icon" />

      <div className="flex justify-between items-center h-full w-3/5">
        <ul className="w-3/5 flex justify-between">
          <li>
            <a href="#">Timeline</a>
          </li>
          <li>
            <a href="#">Overview</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <Button text="Register" />
      </div>
    </nav>
  );
};

export default Navbar;
