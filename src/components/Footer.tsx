// src/components/Footer.tsx
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        p: 2,
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
      }}
    >
      <Typography variant="body1" align="center">
        © 2024 Insurance Company. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
