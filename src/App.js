import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { getSuggestedQuery } from "@testing-library/react";
function App() {
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const API = "https://fakestoreapi.com/users";
  console.log(API);

  const getUser = async () => {
    axios.get(API).then((response) => {
      setUser(response.data);
      console.log("API Success Fetch",response.data);
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userLogin = user.filter((item) => {
      if (item.email === email && item.password === password) {
        return item;
      }
      else{
        return false;
      }
    });
    setEmail("");
    setPassword("");
    console.log("Email", email);
    console.log("Password", password);
    console.log("userLogin", userLogin);
  };

  return (
    // login form goes here
    <div className="App" onSubmit={submitHandler}>
      <form className="login-form">
        <label htmlFor="username" >Username</label>
        <input type="text" name="username" onChange={emailHandler} value={email}  />
        <label htmlFor="password" >Password</label>
        <input type="password" name="password"  onChange={passwordHandler} value={password} />
        <button type="submit">
          Login
        </button>
      </form>

    </div>
  );
}

export default App;
