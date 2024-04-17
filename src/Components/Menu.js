import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
import { AllMenus } from "./AllMenuContext";
import Navbr from "./Navbr";
import Checkout from "./Checkout";
import { Statewhereweshare } from "../Context/Statewhereweshare";
import Footerfud from "./Footerfud";
import Signupvalid from "./Signupvald";

function Menu() {
  return (
    <div>
      <AllMenus>
        <Router>
          <Statewhereweshare>
            <Navbr />
            <Hero />  
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <SpecialDishes />
                    <FilteredDishes />
                  </>
                }
              />

              <Route path="/Checkout" element={<Checkout />} />
              <Route path="/Signupvalid" element={<Signupvalid />} />
            </Routes>
          </Statewhereweshare>
        </Router>
      </AllMenus>
      <Footerfud />
    </div>
  );
}

export default Menu;
