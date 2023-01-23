import React from 'react'
import { Link } from "react-router-dom";

function Coke() {
  return (
    <div><p>Coke</p>
      <Link to="/">
        Vending Machine
      </Link>
    </div>
  )
}

export default Coke