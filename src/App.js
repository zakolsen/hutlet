import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Base/Header";
import Footer from "./Base/Footer";
import Home from "./Home/Home";
import WOW from "wowjs";

export default function App() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <>
      <Header />
      <div className="wrapper">
        <Routes>
          <Route path="" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
