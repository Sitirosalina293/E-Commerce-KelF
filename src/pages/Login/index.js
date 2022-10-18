import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FailureLogin, StartingLogin, SuccessLogin } from "../../FeaturesN/Users";
import "./style.css";

import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();
  const { isAuth, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const admin = {
    username: "adminKelf06@hactiv.com",
    password: "admin06",
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    dispatch(StartingLogin());
    if (username === admin.username && password === admin.password) {
      dispatch(SuccessLogin(admin));
      navigate("/admin");
    } else {
      axios
        .post(`${process.env.REACT_APP_BASE_API}auth/login`, {
          username: username,
          password: password,
        })
        .then((res) => {
          dispatch(SuccessLogin(res.data));
          navigate("/home");
        })
        .catch((err) => {
          dispatch(FailureLogin());
        }
      );
    }
  };

  return (
    <div className="container">
      <form>
        <div className="form-outline mb-4">
          <label className="form-label" for="form2Example1">
            Email address
          </label>
          <input 
            type="email" 
            id="form2Example1" className="form-control" 
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" for="form2Example2">
            Password
          </label>
          <input 
            type="password" 
            id="form2Example2" className="form-control" 
            onChange={(e) => setPassword(e.target.value)}  
          />
        </div>

        <div className="row mb-4">
          <div className="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>
        <div className="d-grid mb-4">
          <button 
            type="button" 
            className="btn btn-primary btn-block mb-4"
            onClick={handleSubmitLogin}
            disabled={isAuth}
          >
            {isAuth ? "Loading..." : "Login"}
          </button>
        </div>
        {error && (
          <p className="text-center text-red-500">Wrong username or password</p>
        )}
        {/* <div className="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
          <p>or sign up with:</p>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-facebook-f"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-google"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-twitter"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-github"></i>
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default Login;
