import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ReactPlayer from "react-player";

const Research = () => {
  return (
    <Box>
      <Box>
        <h1 className="custom-font" style={{ textAlign: "center" }}>
          Let's See Our Reserach Progress!
        </h1>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 5,
          }}
        >
          <h2 className="title-size">
            {" "}
            Dr. Kevin on Mental Health Reseach Senimar:{" "}
          </h2>
          <ReactPlayer
            width="60vw"
            height="35vw"
            url="https://www.youtube.com/watch?v=4zhUwtVlg14"
            controls={true}
          ></ReactPlayer>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 10,
          }}
        >
          <h2 className="title-size">
            Dr. Karen Newbigging on Mental Health Research Webnier:{" "}
          </h2>
          <ReactPlayer
            width="60vw"
            height="35vw"
            url="https://www.youtube.com/watch?v=Y-Th6x0A4HA"
            controls={true}
          ></ReactPlayer>
        </Box>
      </Box>
    </Box>
  );
};

export default Research;
