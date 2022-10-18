import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../../bootstrap.min.css";
import { LogOut } from "../../FeaturesN/Users";

const NavBar = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(LogOut());
    navigate("/home");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <a className="navbar-brand" href="#">
            KELF STORE
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="" to="/home">
                <a className="nav-link active" href="#">
                  Home
                  {/* <span className="visually-hidden">(current)</span> */}
                </a>
              </Link>
            </li>
            {user?.email === "adminKelf06@hactiv.com" ? (
              <>
                <li className="nav-item">
                  <Link className="" to="/admin">
                    <a className="nav-link active" href="#">
                      Admin
                      {/* <span className="visually-hidden">(current)</span> */}
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="" to="/admin">
                    <a className="nav-link active" href="#">
                      Sales Report
                      {/* <span className="visually-hidden">(current)</span> */}
                    </a>
                  </Link>
                </li>
              </>
            ) : null}
          </ul>
          <Link to="/login">
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
