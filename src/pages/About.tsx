// src/pages/About.tsx
import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const About: React.FC = () => {
  return (
    <Container>
      <Typography variant="h1" sx={{ mt: 4 }}>
        About Us
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        At Insurance Company, we are committed to safeguarding your future with
        comprehensive insurance solutions tailored to meet your needs. With over
        20 years of experience in the industry, we pride ourselves on providing
        reliable and affordable insurance plans that protect what matters most
        to you.
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Our mission is to deliver peace of mind through personalized insurance
        coverage that ensures financial security for you and your loved ones. We
        believe in transparency, integrity, and exceptional customer service to
        build long-lasting relationships with our clients.
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Whether you are looking for life insurance, health insurance, or auto
        insurance, our dedicated team of experts is here to guide you every step
        of the way. Contact us today to discover how we can help protect your
        future.
      </Typography>
    </Container>
  );
};

export default About;
