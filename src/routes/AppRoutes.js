import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import AppLayout from "../layout/AppLayout";

import About from "../pages/About";
import Home from "../pages/Home";
import Media from "../pages/Media";

const AppRoutes = (props) => {
  return (
    <BrowserRouter> 
        <Routes>
            <Route path="/" element={
                <AppLayout >
                  <Home/>
                </AppLayout>
            }/> 
            <Route path="/about" element={
                <AppLayout >
                  <About/>
                </AppLayout>
            }/> 
            <Route path="/media" element={
                <AppLayout >
                  <Media/>
                </AppLayout>
            }/> 
            
        </Routes> 
    </BrowserRouter>
  );
}

export default AppRoutes;
