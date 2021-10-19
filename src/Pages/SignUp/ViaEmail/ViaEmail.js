import { Box } from "@mui/system";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";
import PasswordSharpIcon from "@mui/icons-material/PasswordSharp";
import AccountBoxSharpIcon from "@mui/icons-material/AccountBoxSharp";
import { Button, Input, Typography } from "@mui/material";
import useAuth from "../../../hooks/useAuth";
import useFirebase from "../../../hooks/useFirebase";
import { useState } from "react";

const ViaEmail = () => {
  const {
    email,
    password,
    error,
    handleNameInput,
    handleEmailInput,
    handlePasswordInput,
    handleSignUpWithEmail,
  } = useFirebase();
  
  const [isSignin, setIsSignin] = useState(false);
  return (
    <Box>
      {!isSignin && <Box sx={{ display: "flex", alignItems: "center" }}>
        <AccountBoxSharpIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <Input
          placeholder="Enter Your Name"
          variant="standard"
          type="text"
          onBlur={handleNameInput}
        />
      </Box>}

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <EmailSharpIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <Input
          placeholder="Enter Your Email"
          variant="standard"
          type="email"
          onBlur={handleEmailInput}
        />
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <PasswordSharpIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <Input
          placeholder="Set Password"
          variant="standard"
          type="password"
          onBlur={handlePasswordInput}
        />
      </Box>
      <Typography variant="p">{error}</Typography>
      <Button
        variant="contained"
        onClick={() => {
          handleSignUpWithEmail(email, password);
        }}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default ViaEmail;
