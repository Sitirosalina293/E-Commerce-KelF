import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../../features/userRedux";
import conAPI from "../../components/API/getAPI";
import { toast, ToastContainer } from "react-toastify";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const admin = {
    email: "admin@bukapedia.com",
    password: "admin123",
  };

  const handleLogin = () => {
    dispatch(loginStart());
    if (username === admin.email && password === admin.password) {
      dispatch(loginSuccess(admin));
      navigate("/admin");
    } else {
      axios
        .post(`${conAPI()}auth/login`, {
          username: username,
          password: password,
        })
        .then((res) => {
          dispatch(loginSuccess(res.data.token));
          navigate("/");
        })
        .catch((err) => {
          dispatch(loginFailure());
          toast.error("Wrong username or password!")
        });
    }
  };
  return (
    <div className="container min-vh-100">
      <div className="mx-auto">
        <div className="mx-auto" style={{ textAlign:'center' }}>
          <h4>User Login</h4>
        </div>
        <div className="my-3 mx-auto px-4 col-sm-5">
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label for="floatingInput">Username</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div class="mx-auto mt-5" style={{ width:'100px' }}>
            <button
              class="btn btn-primary"
              type="button"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "Loading..." : "LOGIN"}
            </button>
          </div>
          <ToastContainer
              position="top-center"
              autoClose={1500}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
