import React from "react";
import { Container, Grid, Paper, Typography, Button } from "@mui/material";

const cars = [
  {
    type: "SUV",
    model: "XC60 Recharge",
    description: "plug-in hybrid",
    imageUrl: "/public/images/s60_recharge.jpg",
  },
  {
    type: "SUV",
    model: "XC40 Recharge",
    description: "plug-in hybrid",
    imageUrl: "/path/to/xc40-hybrid.jpg",
  },
  {
    type: "SUV",
    model: "XC40 Recharge",
    description: "pure electric",
    imageUrl: "/path/to/xc40-electric.jpg",
  },
  {
    type: "ESTATE",
    model: "V90 Recharge",
    description: "plug-in hybrid",
    imageUrl: "/path/to/v90.jpg",
  },
];

const CarCard = ({ car }) => (
  <Grid item xs={12} sm={6} md={3}>
    <Paper
      elevation={3}
      style={{
        overflow: "hidden",
        transition: "transform 0.3s ease",
      }}
      sx={{
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <img src={car.imageUrl} alt={car.model} style={{ width: "100%" }} />
      <Typography variant="subtitle2">{car.type}</Typography>
      <Typography variant="h6">{car.model}</Typography>
      <Typography variant="body2">{car.description}</Typography>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
        <Button variant="text">LEARN</Button>
        <Button variant="text">SHOP</Button>
      </div>
    </Paper>
  </Grid>
);

const Cars = () => (
  <Container maxWidth="lg">
    <Grid container spacing={3}>
      {cars.map((car, index) => (
        <CarCard key={index} car={car} />
      ))}
    </Grid>
  </Container>
);

export default Cars;

