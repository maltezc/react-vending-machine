import React from "react";
import { Link } from 'react-router-dom'

function VendingMachine() {
  return (
    <div>
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
    </div>
  );
}

export default VendingMachine;
