import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function Row({ title, options, selectedOption, onButtonClick }) {
  return (
    <Box mb={2}>
      <Typography variant="h6">{title}</Typography>
      <Grid container spacing={1}>
        {options.map((option, optionIndex) => (
          <Grid item xs="auto" key={`option-${optionIndex}`}>
            <Button
              variant={selectedOption === option ? "contained" : "outlined"}
              onClick={() => onButtonClick(option)}
              className={
                selectedOption === option
                  ? "button-selected"
                  : "button-deselected"
              }
            >
              {option}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Row;
