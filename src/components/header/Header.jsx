import React from "react";
import NavBar from "./../NavBar/NavBar";
import Hero from "../Hero/Hero";

const Header = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100">
      <NavBar></NavBar>
      <Hero></Hero>
    </div>
  );
};

export default Header;
