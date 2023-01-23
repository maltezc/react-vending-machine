import React from "react";
import { Link } from 'react-router-dom'

function VendingMachine() {
  return (
    <div>
      <ul>
        <li><Link to="/food/:chips">chips</Link></li>
        <li><Link to="/food/:coke">coke</Link></li>
        <li><Link to="/food/:reeses">reeses</Link></li>
      </ul>
    </div>
  );
}

export default VendingMachine;
