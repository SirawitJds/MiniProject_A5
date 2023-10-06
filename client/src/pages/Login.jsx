import React, { useState } from "react";
import Navbar from "../component/Navbar";
import "./Login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  const [seePassword, setSeePassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      setemailError("email-error");
    } else {
      setemailError("");
    }

    if (!password.match(/^[a-zA-Z0-9]{2,15}$/)) {
      setpasswordError("password-error");
    } else {
      setpasswordError("");
    }
  };

  return (
    <>
      <Navbar />

      <div className="login-container">
        <div className="login-form">
          <div className="login-content">
            <form onSubmit={handleSubmit}>
              <div className="form-content">
                <h1 className="content">Sign in</h1>
                {emailError === "" ? (
                  <TextField
                    className="content"
                    fullWidth
                    required
                    onChange={(prev) => setEmail(prev.target.value)}
                    margin="normal"
                    id="email"
                    label="Email"
                    placeholder="email@example.com"
                  />
                ) : (
                  <TextField
                    className="content"
                    error
                    fullWidth
                    required
                    onChange={(prev) => setEmail(prev.target.value)}
                    margin="normal"
                    id="email"
                    label="Email"
                    placeholder="email@example.com"
                  />
                )}
                {passwordError === "" ? (
                  <div className="passwordBox">
                    <i
                      className="eye"
                      onClick={(prev) => setSeePassword(!seePassword)}
                    >
                      {seePassword ? <FaEye /> : <FaEyeSlash />}
                    </i>
                    <TextField
                      className="content"
                      type={seePassword ? "text" : "password"}
                      onChange={(prev) => setPassword(prev.target.value)}
                      fullWidth
                      margin="normal"
                      required
                      id="password"
                      label="Password"
                      placeholder="password"
                    />
                  </div>
                ) : (
                  <div className="passwordBox">
                    <i
                      className="eye"
                      onClick={(prev) => setSeePassword(!seePassword)}
                    >
                      {seePassword ? <FaEye /> : <FaEyeSlash />}
                    </i>
                    <TextField
                      error
                      className="content"
                      type="password"
                      onChange={(prev) => setPassword(prev.target.value)}
                      fullWidth
                      margin="normal"
                      required
                      id="password"
                      label="Password"
                      placeholder="password"
                    />
                  </div>
                )}

                <Button
                  color="error"
                  className="primary signin-button"
                  variant="contained"
                  type="submit"
                  fullWidth
                >
                  Sign in
                </Button>
                <p>
                  Don't have an account? <Link to="/signup">Sign up!</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
