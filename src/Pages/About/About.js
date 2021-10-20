import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const About = () => {
  function createData(name, paitents, extremeCase, successRate) {
    return { name, paitents, extremeCase, successRate,  };
  }

  const rows = [
    createData("Bipolar Disorder", 359, 24, 88),
    createData("Schizophrenia", 237, 37, 73),
    createData("Depression", 262, 24, 85),
    createData("Social Anxiety", 305, 67, 94),
    createData("Personality Disorder", 356, 49, 69),
    createData("Bulimia Nervosa", 156, 29, 98),
  ];
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#e0e2d5",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            width: "60vw",
            color: "#6db8bb",
          }}
        >
          <h1 className="banner-title" style={{ color: "#05647a" }}>
            <span style={{ color: "#6db8bb" }}>Peace:</span> The Gold Standard
          </h1>
          <h1
            style={{ color: "#10375d", paddingBottom: "30px" }}
            className="title-size"
          >
            We aims to set patients on the path to recovery in the clearest and
            simplest way to ensure continued success. Check our success rate
            over the past 3years and decide for yourself.
          </h1>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "70vw",
            mt: 10,
          }}
        >
          <TableContainer component={Paper} elevation={10}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    Dessert (100g serving)
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="right">
                    Number of Paitents
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="right">
                    Extreme Cases
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="right">
                    Successful Medication Rate&nbsp;(%)
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.paitents}</TableCell>
                    <TableCell align="right">{row.extremeCase}</TableCell>
                    <TableCell align="right">{row.successRate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
