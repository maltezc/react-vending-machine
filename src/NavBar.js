import React from "react";
import { Link } from "react-router-dom";
// import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/">
        VendingMachine
      </Link>
      <Link to="/chips">
        Chips
      </Link>
      <Link to="/coke">
        Coke
      </Link>
      <Link to="/reeses">
        Reeses
      </Link>
    </nav>
  );
}

export default NavBar;