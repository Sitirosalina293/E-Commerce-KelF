import "./bootstrap.min.css";
import NavBar from "./pages/Navbar";
import Router from "./routers";
// import AuthLoginForm from './features/auth/AuthLoginForm';

function App() {
  return (
    <div className="App">
      {/* <AuthLoginForm /> */}
      <NavBar />
      <Router />
    </div>
  );
}

export default App;
