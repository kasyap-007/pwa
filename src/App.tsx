import React from "react";
import Layout from "./components/shared/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mars from "./pages/Mars";
import Exoplanets from "./pages/Exoplanets";
import FourOFour from "./pages/FourOFour";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mars" element={<Mars />} />
            <Route path="/exoplanets" element={<Exoplanets />} />
            ,<Route path="*" element={<FourOFour />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
