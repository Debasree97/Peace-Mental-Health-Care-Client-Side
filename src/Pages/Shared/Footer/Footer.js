import { Box } from "@mui/system";
import React from "react";
import logo2 from "../../../images/logo2.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#05647a",
        mt: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
      }}
    >
      <Box
        className="flex-direction"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{ height: "80px", paddingRight: "5px" }}
          src={logo2}
          alt=""
        />
        <h1 className="navbar-title" style={{ color: "#e0e2d5" }}>
          Peace Mental HealthCare
        </h1>
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <h3 class="title-size" style={{ color: "#e0e2d5" }}>
          Follow Us:{" "}
        </h3>
        <Box sx={{ color: "#6db8bb" }}>
          <FacebookIcon sx={{ px: 1 }} />
          <InstagramIcon sx={{ pr: 1 }} />
          <TwitterIcon />
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <CopyrightIcon sx={{ color: "#6db8bb", pr: 1 }} />
        <span style={{ color: "#e0e2d5" }}>
          All Copyright Reserved by Peach Mental Healthcare,2021
        </span>
      </Box>
    </Box>
  );
};

export default Footer;
