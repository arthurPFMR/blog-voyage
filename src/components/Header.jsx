import React from "react";
import Navigation from "./Navigation";
import Login from "./Login";

const Header = () => {
  return (
    <div className="header">
      <div className="first-line">
        <h1>Alexander Kram, voyageur particulier</h1>
        <Login />
      </div>

      <Navigation />

      {/* <img className="header-img" src={Travel} alt="" /> */}
    </div>
  );
};

export default Header;
