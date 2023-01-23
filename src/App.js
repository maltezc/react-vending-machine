import "./App.css";
import VendingMachine from "./VendingMachine";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Food from "./Food";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/food/:food" element={<Food />} />
          <Route path="/" element={<VendingMachine />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
