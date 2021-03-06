import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
// import useAuth from "./../../../hooks/useAuth";
import useFirebase from "../../../hooks/useFirebase";

const SignUp = () => {
  const {
    signInWithGoogle,
    handleSignUpWithEmail,
    email,
    password,
    error,
    handleEmailInput,
    handleNameInput,
    handlePasswordInput,
  } = useFirebase();
  return (
    <Box sx={{ backgroundColor: "#10375d" }}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          py: 5,
          mt: 10,
        }}
        noValidate
        autoComplete="off"
      >
        <h1 className="custom-font" style={{ lineHeight: 0, color: "#e0e2d5" }}>
          KEEP UP WITH PEACE
        </h1>
        <h1
          onClick={handleSignUpWithEmail}
          className="custom-font"
          style={{ color: "#e0e2d5" }}
        >
          Sign Up Today
        </h1>
        <Box>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              onBlur={handleNameInput}
              placeholder="Your Name"
              required
              sx={{ backgroundColor: "#e0e2d5", color: "#10375d" }}
            />
            <TextField
              onBlur={handleEmailInput}
              placeholder="Email Address"
              required
              sx={{ backgroundColor: "#e0e2d5", color: "#10375d" }}
            />
            <TextField
              onBLur={handlePasswordInput}
              placeholder="Password"
              required
              sx={{ backgroundColor: "#e0e2d5", color: "#10375d" }}
            />
          </div>
        </Box>
        <Box sx={{ mt: 2 }}>
          <NavLink style={{ textDecoration: "none" }} to="/home">
            <Button
              variant="contained"
              onClick={() => {
                handleSignUpWithEmail(email, password);
              }}
              sx={{
                backgroundColor: "#e0e2d5",
                color: "#10375d",
                fontWeight: "600",
                px: 4,
                mb: 4,
              }}
            >
              Sign Up
            </Button>
          </NavLink>
        </Box>
        <p style={{ color: "red" }}>{error}</p>
        <Box>
          <NavLink
            to="/login"
            style={{
              textDecoration: "none",
              color: "#e0e2d5",
              marginLeft: "5px",
              fontWeight: "500",
              px: 4,
            }}
          >
            Already has an account?{" "}
            <span style={{ fontWeight: "600" }}>Log In</span>
          </NavLink>
        </Box>
        <Box>
          <h1
            className="title-size"
            style={{ color: "#e0e2d5", marginTop: "50px" }}
          >
            OR, Sign In with Google
          </h1>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Button
            onClick={signInWithGoogle}
            variant="contained"
            sx={{
              backgroundColor: "#e0e2d5",
              color: "#10375d",
              fontWeight: "600",
              px: 4,
              mb: 3,
            }}
          >
            Google Sign In
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
