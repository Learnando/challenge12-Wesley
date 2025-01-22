import React from "react";
import Navigation from "./Navigation";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="name">Louis Wesley</div>
      <Navigation />
    </header>
  );
}

export default Header;
