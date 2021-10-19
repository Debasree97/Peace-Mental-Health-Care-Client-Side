import { Box } from "@mui/system";
import React from "react";
import banner from "../../../images/banner.png";

const Banner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        m: 0,
      }}
      className="banner-container"
    >
      <Box className="banner-container-img">
        <img src={banner} width="100%" alt="" />
      </Box>
      <Box className="banner-container-text">
        <h1 style={{ color: "#05647a" }} className="banner-title">
          We are here to{" "}
          <span style={{ fontSize: "120%", color: "#6db8bb" }}>Help</span>
        </h1>
        <h3
          style={{
            lineHeight: "30px",
            fontWeight: "600",
            textAlign: "justify",
          }}
        >
          At Peace Mental HealthCare, we understand the challenges you and your
          family face when you are struggling with your mental health. That’s
          why we put people first in everything that we do.
        </h3>
      </Box>
    </Box>
  );
};

export default Banner;
