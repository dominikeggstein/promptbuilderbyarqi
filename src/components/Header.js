import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "./images/logo.png";
import "./PromptBuilder.css";

function Header() {
  return (
    <AppBar position="static" className="appbar">
      <Toolbar className="appbar">
        <Link to="/">
          <img
            src={logo}
            alt="PromptBuilder logo"
            style={{ width: "8rem", marginRight: "1rem" }}
          />
        </Link>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Prompt Builder
        </Typography>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
