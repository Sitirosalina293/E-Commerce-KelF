import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import routes from "./routes";
import Footer from '../components/footer';
function Router() {
  return (
    <div className="main-container">
      <NavBar />
      <div className="main-content mt-5" style={{ minHeight:'90vh' }}>
        <Routes>
          {
            routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={route.element}
                />
              )
            })
          }
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default Router;
