import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Treatment from "../Treatment/Treatment";

const Treatments = () => {
  const [treatments, setTreatments] = useState([]);

  useEffect(() => {
    fetch("./mentalDisorderList.json")
      .then((res) => res.json())
      .then((data) => setTreatments(data));
  }, []);
  return (
    <Box>
      <Box sx={{ textAlign: "center", mt: 18, mb: 8 }} className="title-size">
        <h1 style={{ color: "#05647a" }}>
          CUSTOMIZED CARE,{" "}
          <span style={{ color: "#6db8bb" }}>JUST FOR YOU</span>
        </h1>
        <h1>Treatment Programs by Condition</h1>
      </Box>
      <Grid
        container
        spacing={{ lg: 0.5, xs: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {treatments.map((treatment) => (
          <Grid item key={treatment.id}>
            <Treatment key={treatment.id} treatment={treatment}></Treatment>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Treatments;
