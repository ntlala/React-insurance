// src/pages/Contact.tsx
import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ContactForm from "../components/ContactForm";

const Contact: React.FC = () => {
  return (
    <Container>
      <Typography variant="h1" sx={{ mt: 4 }}>
        Contact Us
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Get in touch with us for any inquiries or support.
      </Typography>
      {/* Contact Form */}
      <ContactForm />
      {/* Placeholder for map or additional contact information */}
      <div
        style={{
          minHeight: "400px",
          backgroundColor: "#f0f0f0",
          marginTop: "2rem",
          borderRadius: "8px",
          padding: "1rem",
        }}
      >
        {/* Replace this with an actual map component or detailed contact information */}
        <Typography variant="h2" sx={{ mb: 2 }}>
          Our Location
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Maseru, Lithabaneng, Hamatal
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Contact Number: +123456789
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Email: info@insurancecompany.com
        </Typography>
      </div>
    </Container>
  );
};

export default Contact;
