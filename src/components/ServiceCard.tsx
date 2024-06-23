// src/components/ServiceCard.tsx
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  buttonText: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  buttonText,
}) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={image} // Image URL or import path
        alt={title}
      />
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        <Button variant="contained" color="primary">
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
