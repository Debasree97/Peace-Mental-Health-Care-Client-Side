import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const LatestNews = () => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#10375d",
        py: 5,
        mt: 15,
      }}
      noValidate
      autoComplete="off"
    >
      <h1 className="title-size" style={{ color: "#e0e2d5" }}>
        THE LATEST NEWS IN YOUR INBOX EACH MONTH
      </h1>
      <h1 className="custom-font" style={{ color: "#e0e2d5" }}>
        Keep up with Peace
      </h1>
      <Box
      >
        <div className="flex-direction" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <TextField
            defaultValue="Email Address"
            sx={{ backgroundColor: "#e0e2d5", color: "#10375d" }}
          />
          <TextField
            defaultValue="Interested Area"
            sx={{ backgroundColor: "#e0e2d5", color: "#10375d" }}
          />
        </div>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#e0e2d5",
            color: "#10375d",
            fontWeight: "600",
            px: 4,
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default LatestNews;
