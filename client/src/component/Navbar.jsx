import React from "react";
import "./Navbar.css";
import Button from "@mui/material/Button";

import { Navigate, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigater = useNavigate();

  return (
    <>
      <nav>
        <div className="nav-logo">Buisness Alive</div>
        <div className="content">Option</div>
        <div className="content">Option</div>
        <div className="content">Option</div>
        <div className="content">Option</div>
        <div className="content">Option</div>
        <div className="buttonGroup">
          <Button
            color="error"
            className="primary"
            variant="outlined"
            onClick={() => navigater("/signin")}
          >
            Sign in
          </Button>
          <Button
            color="error"
            className=""
            variant="contained"
            onClick={() => navigater("/signup")}
          >
            Sign up
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
