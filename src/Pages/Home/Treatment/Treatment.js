import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Treatment = (props) => {
  const { id, name, shortDescription, img } = props.treatment;
  return (
    <Box>
      <Card
        sx={{
          display: "flex",
          maxWidth: 550,
          backgroundColor: "#6db8bb",
          p: 2,
          textAlign: "center",
        }}
        className="home-card"
      >
        <CardMedia sx={{ width: "40%" }} component="img" image={img} alt="" />
        <CardContent>
          <h1 className="card-title">{name}</h1>
          <p style={{ textAlign: "justify", fontSize: "17px" }}>
            {shortDescription}
          </p>
          <Link to={`/detail/${id}`}>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                size="small"
                sx={{
                  backgroundColor: "#e0e2d5",
                  color: "#10375d",
                  fontWeight: "600",
                  p: 0.8,
                }}
              >
                Learn More
              </Button>
            </CardActions>
          </Link>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Treatment;
