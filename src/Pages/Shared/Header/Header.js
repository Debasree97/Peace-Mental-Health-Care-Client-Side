import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/system";
import logo from "../../../images/logo.png";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
// import useAuth from "../../../hooks/useAuth";
import { Button, Divider, List, Typography } from "@mui/material";
//  import useFirebase from "../../../hooks/useFirebase";

const Header = () => {
  // const { user, handleSignOut } = useFirebase();\

  const navLinkStyle = {
    color: "#e0e2d5",
    textDecoration: "none",
    paddingRight: "15px",
    fontWeight: "600",
    fontSize: "18px",
  };
  const activeStyle = {
      color: "#6db8bb",
  };

  return (
    <Box
      sx={{
        backgroundColor: "#10375d",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingX: "3%",
        height: "86px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          style={{ height: "60px", paddingRight: "10px" }}
          alt=""
        />
        <h1 className="navbar-title" style={{ color: "#e0e2d5" }}>
          Peace Mental HealthCare
        </h1>
      </Box>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="toggle-btn">
        <MenuSharpIcon />
      </label>
      <ul
        style={{ listStyle: "none", display: "flex" }}
        className="navlink-toggle"
      >
        <li className="single-navlink">
          <NavLink style={navLinkStyle} activeStyle={activeStyle} to="/home">
            Home
          </NavLink>
        </li>
        <Divider sx={{ backgroundColor: "#e0e2d5", ml: 4 }} />
        <li className="single-navlink">
          <NavLink style={navLinkStyle} activeStyle={activeStyle} to="/about">
            About
          </NavLink>
        </li>
        <Divider sx={{ backgroundColor: "#e0e2d5", ml: 4 }} />
        <li className="single-navlink">
          <NavLink
            style={navLinkStyle}
            activeStyle={activeStyle}
            to="/research"
          >
            Research
          </NavLink>
        </li>
      </ul>

      {/* {user?.email ? (
        <Box>
          <Typography variant="p">Hello, {user?.displayName}</Typography>
          <Button variant="contained">SignOut</Button>
        </Box>
      ) : (
        <NavLink to="/signup">Sign Up</NavLink>
      )} */}
    </Box>
  );
};

export default Header;
