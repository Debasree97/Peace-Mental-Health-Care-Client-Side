import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";

const LogIn = () => {
    const { handleSignInWithEmail } = useFirebase();
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
        <h1 className="custom-font" style={{ color: "#e0e2d5" }}>
          Log In
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
              placeholder="Email Address"
              required
              sx={{ backgroundColor: "#e0e2d5", color: "#10375d" }}
            />
            <TextField
              placeholder="Password"
                          required
                          type="password"
              sx={{ backgroundColor: "#e0e2d5", color: "#10375d" }}
            />
          </div>
        </Box>
        <Box sx={{ mt: 2 }}>
          <NavLink style={{ textDecoration: "none" }} to="/signup">
                      <Button
                          onClick={handleSignInWithEmail}
              variant="contained"
              sx={{
                backgroundColor: "#e0e2d5",
                color: "#10375d",
                fontWeight: "600",
                px: 4,
                mb: 4,
              }}
            >
              Log In
            </Button>
          </NavLink>
        </Box>
        <Box>
          <NavLink
            to="/signup"
            style={{
              textDecoration: "none",
              color: "#e0e2d5",
              marginLeft: "5px",
              fontWeight: "500",
              px: 4,
            }}
          >
            Don't have an account?
            <span style={{ fontWeight: "600" }}>Sign Up</span>
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
};

export default LogIn;
