import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FailureLogin, StartingLogin, SuccessLogin } from "../../Features/Users";
import "./style.css";

import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();
  const { isAuth, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const admin = {
    email: "adminKelf06@hactiv.com",
    password: "admin06",
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    dispatch(StartingLogin());
    if (email === admin.email && password === admin.password) {
      dispatch(SuccessLogin(admin));
      navigate("/admin");
    } else  {
      axios
        .post(`${process.env.REACT_APP_BASE_API}auth/login`, {
          email: email,
          password: password,
        })
        .then((res) => {
          dispatch(SuccessLogin(res.data));
          navigate("/home");
        })
        .catch((err) => {
          dispatch(FailureLogin(
            err.response.data.message
          ));
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
            onChange={(e) => setEmail(e.target.value)}
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
            {
              isAuth ? "Loading..." : "Login"
            }
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
