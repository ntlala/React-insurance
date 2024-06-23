// src/pages/Services.tsx
import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ServiceCard from "../components/ServiceCard";

// Import images for each service (example paths, adjust as per your project structure or use URLs)
import lifeInsuranceImage from "../images/life-insurance.png";
import healthInsuranceImage from "../images/health-insurance.png";
import autoInsuranceImage from "../images/auto-insurance.png";

const Services: React.FC = () => {
  return (
    <Container>
      <Typography variant="h1" sx={{ mt: 4 }}>
        Our Services
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <ServiceCard
            title="Life Insurance"
            description="Protect your family's future with our comprehensive life insurance plans."
            image={lifeInsuranceImage}
            buttonText="Subscribe"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ServiceCard
            title="Health Insurance"
            description="Affordable health insurance plans to cover all your medical needs."
            image={healthInsuranceImage}
            buttonText="Subscribe"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ServiceCard
            title="Auto Insurance"
            description="Reliable auto insurance to keep you and your vehicle safe on the road."
            image={autoInsuranceImage}
            buttonText="Subscribe"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Services;
