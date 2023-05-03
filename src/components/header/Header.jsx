import React from "react";
import NavBar from "./../NavBar/NavBar";
import Hero from "../Hero/Hero";

const Header = () => {
  return (
    <div className="bg-[url('https://res.cloudinary.com/ddez9nchs/image/upload/v1683138143/Thai-Chef/chef_hero.png')]">
      <NavBar></NavBar>
      <Hero></Hero>
    </div>
  );
};

export default Header;
