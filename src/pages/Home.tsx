// src/pages/Services.tsx
import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";

interface Service {
  title: string;
  description: string;
  scenario: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: "Life Insurance",
      description:
        "Protect your family's future with our comprehensive life insurance plans.",
      scenario:
        "Ensure your loved ones are financially secure in case of unforeseen events.",
    },
    {
      title: "Health Insurance",
      description:
        "Affordable health insurance plans to cover all your medical needs.",
      scenario:
        "Access quality healthcare without financial worry, ensuring your well-being.",
    },
    {
      title: "Auto Insurance",
      description:
        "Reliable auto insurance to keep you and your vehicle safe on the road.",
      scenario:
        "Drive with peace of mind knowing your vehicle and passengers are protected.",
    },
  ];

  return (
    <Container>
      <Typography variant="h1" sx={{ mt: 4 }}>
        Our Services
      </Typography>
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ mb: 2 }}
                >
                  {service.description}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ fontStyle: "italic" }}
                >
                  {service.scenario}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  component={RouterLink}
                  to="/contact"
                  sx={{ mt: 2 }}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
