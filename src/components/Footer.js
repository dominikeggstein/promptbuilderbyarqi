import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <Box className ="footer" sx={{ py: 3, color: "primary.contrastText" }}>
      <Typography variant="body2" align="center">
        made with ♥ by arqi
      </Typography>
    </Box>
  );
}

export default Footer;
