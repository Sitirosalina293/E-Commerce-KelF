import { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from '../../features/userRedux';
import conAPI from '../../components/API/getAPI'

const LoginPage = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const admin = {
    email: 'admin@bukapedia.com',
    password: 'admin123',
  };

  const handleLogin = () => {
    dispatch(loginStart());
    if (username === admin.email && password === admin.password) {
      dispatch(loginSuccess(admin));
      navigate('/admin');
    } else {
      axios
        .post(`${conAPI()}auth/login`, {
          username: username,
          password: password,
        })
        .then((res) => {
          dispatch(loginSuccess(res.data.token));
          navigate('/');
        })
        .catch((err) => {
          dispatch(loginFailure());
        });
    }
  };

  return (
    <div className="flex justify-center items-center  md:mt-80">
      <div className="flex flex-col items-center justify-center p-4 rounded-md w-full md:w-1/2 shadow-md bg-blue-100">
        <div className="text-center flex items-center justify-center flex-col">
          <h4 className="w-full">
            User Login
          </h4>
          <p className="w-full">
            Please login to continue
          </p>
        </div>
        <input
          onChange={(e) => setUsername(e.target.value)}
          id="username"
          label="username"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          label="Password"
          type="password"
        />
        <div className="my-6 w-full">
          <button
            variant="contained"
            fullWidth
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'LOGIN'}
          </button>
        </div>
        {error && (
          <p className="text-center text-red-500">Wrong username or password</p>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
