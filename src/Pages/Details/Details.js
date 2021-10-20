import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import singleDisorderImg from "../../images/singleDisorderImg.png";

const Details = () => {
  let { disorderId } = useParams();

  const [disorderDetails, setDisorderDetails] = useState([]);

  const [disorder, setDisorder] = useState({});

  useEffect(() => {
    fetch(
      "https://debasree97.github.io/mentalDisorderList/mentalDisorderList.json"
    )
      .then((res) => res.json())
      .then((data) => setDisorderDetails(data));
  }, []);

  useEffect(() => {
    const foundDisorder = disorderDetails.find(
      (findDisorder) => findDisorder?.id === parseInt(disorderId)
    );
    setDisorder(foundDisorder);
  }, [disorderDetails, disorderId]);

  return (
    <Box>
      <h1
        className="banner-title"
        style={{ textAlign: "center", color: "#6db8bb" }}
      >
        {disorder?.name}
      </h1>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <img
            src={singleDisorderImg}
            alt=""
                      srcset=""
                      style={{width:"40vw"}}
          />
        </Box>
        <Box sx={{ p: 10 ,pt:0}}>
          <Paper
            square
            elevation={10}
            sx={{ backgroundColor: "#05647a", color: "#e0e2d5", p: 5 }}
          >
            <p
              style={{
                textAlign: "justify",
                fontSize: "18px",
                lineHeight: "28px",
              }}
            >
              {disorder?.description}
            </p>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Details;
