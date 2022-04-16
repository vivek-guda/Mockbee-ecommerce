import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <main className="login-main">
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <label className="login-label">Email</label>
        <input className="login-input" type="text" placeholder="Enter email" />
        <label className="login-label">Password</label>
        <input
          className="login-input"
          type="password"
          placeholder="Enter password"
        />
        <Link className="login-btn" to="/">
          Fake Login
        </Link>
        <p className="alternate-msg">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
