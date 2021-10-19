import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";
import useFirebase from "../../../hooks/useFirebase";

const SignUp = () => {
  // const { signInWithGoogle } = useAuth();
  return (
    <Box>
      <NavLink to="/viaemail">
        <Button variant="contained">Email</Button>
      </NavLink>
      {/* <Button onClick={signInWithGoogle} variant="contained">
        Google
      </Button> */}
    </Box>
  );
};

export default SignUp;
