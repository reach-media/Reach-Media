import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from './Navbar/Navbar'
import routes from "./routes";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
         <Navbar/>
        {routes}
      </div>
    </BrowserRouter>
  );
}

export default App;
