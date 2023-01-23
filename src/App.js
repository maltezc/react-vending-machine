import VendingMachine from "./VendingMachine";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Food from "./Food";
import NavBar from "./NavBar";
import Chips from "./Chips";
import Coke from "./Coke";
import Reeses from "./Reeses";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/chips" element={<Chips />} />
          <Route path="/reeses" element={<Reeses />} />
          <Route path="/coke" element={<Coke />} />
          <Route path="/" element={<VendingMachine />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
