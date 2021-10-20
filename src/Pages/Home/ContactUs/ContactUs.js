import { Box } from "@mui/system";
import React from "react";
import contactUs from "../../../images/contactUs.png";

const ContactUs = () => {
  return (
    <Box
      sx={{
        px: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 5,
        }}
        className="container"
      >
        <Box className="container-1">
          <img
            src={contactUs}
            alt=""
            srcset=""
            style={{ width: "100%", pr: 0 }}
          />
        </Box>
        <Box
          className="container-2"
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <h1 className="custom-font" style={{ color: "#05647a" }}>
            If you ever need to talk to someone,
          </h1>
          <h1 className="custom-font" style={{ color: "#6db8bb" }}>
            Give us a call
          </h1>
          <h1 className="custom-font">
            Hotline: <span style={{ color: "#10375d" }}>+880-1234-987654</span>
          </h1>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
