import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
//imported files
import Header from "./Header/Header";
import routes from "./routes";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {routes}
      </div>
    </BrowserRouter>
    /* <div id="testing">
        <div
          colors={["#00e4d0", "#5983e8"]}
          style={{ borderBottomLeftRadius: 100, borderBottomRightRadius: 100 }}
        />
      </div> */
  );
}

export default App;
