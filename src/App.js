import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import routes from "./routes";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
         <Navbar/>
        {routes}
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
