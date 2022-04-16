import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import AppLayout from "../layout/AppLayout";

import About from "../pages/About";
import Donate from "../pages/Donate";
import Home from "../pages/Home";
import Media from "../pages/Media";
import ZakatCalc from "../pages/ZakatCalc";

const AppRoutes = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout>
              <Home />
            </AppLayout>
          }
        />
        <Route
          path="/about"
          element={
            <AppLayout>
              <About />
            </AppLayout>
          }
        />
        <Route
          path="/media"
          element={
            <AppLayout>
              <Media />
            </AppLayout>
          }
        />

        <Route
          path="/zakat-calculator"
          element={
            <AppLayout>
              <ZakatCalc />
            </AppLayout>
          }
        />

        <Route
          path="/donate"
          element={
            <AppLayout>
              <Donate />
            </AppLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
