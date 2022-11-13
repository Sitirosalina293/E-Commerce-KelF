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
    <div className="container">
      <div className="flex flex-col items-center justify-center p-4">
        <div className="text-center flex items-center justify-center flex-col">
          <h4 className="w-full">
            User Login
          </h4>
        </div>
        <div className='my-3 mx-auto' style={{width:'50%'}}>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="username" onChange={(e) => setUsername(e.target.value)}/>
            <label for="floatingInput">Username</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <label for="floatingPassword">Password</label>
          </div>
          <div class="d-grid gap-2 col-2 mx-auto mt-5">
            <button class="btn btn-primary" 
              type="button" 
              onClick={handleLogin}
              disabled={loading}>
                {loading ? 'Loading...' : 'LOGIN'}
            </button>
          </div>
        </div>
        {error && (
          <p className="text-center text-red-500">Wrong username or password</p>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
