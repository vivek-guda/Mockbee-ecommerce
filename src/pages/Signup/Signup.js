import "./Signup.css";
import "../Login/Login.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <main className="login-main">
      <div className="login-container">
        <h1 className="login-title">Signup</h1>
        <label className="login-label">Email</label>
        <input className="login-input" type="text" placeholder="Enter email" />
        <label className="login-label">Password</label>
        <input
          className="login-input"
          type="password"
          placeholder="Enter password"
        />
        <label className="login-label">Confirm Password</label>
        <input
          className="login-input"
          type="password"
          placeholder="Confirm password"
        />
        <Link className="login-btn" to="/">
          Fake Sign Up
        </Link>
        <p className="alternate-msg">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </main>
  );
};

export default Signup;
