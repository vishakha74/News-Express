import { useState } from "react";
import "./Login.css";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    setIsLoggedIn(true);
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-header">Login</h2>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label className="login-label">Email</label>
            <input type="email" name="email" className="login-input" required />
          </div>

          <div className="form-group">
            <label className="login-label">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              required
            />
          </div>

          <button className="login-btn">Login</button>
        </form>

        {isLoggedIn && <div className="success-msg">Login Successful!</div>}
      </div>
    </div>
  );
}

export default Login;
