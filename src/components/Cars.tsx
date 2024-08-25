import React, { useState, useEffect } from "react";
import { Container, Grid, Paper, Typography, Button } from "@mui/material";


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
      
      <Typography variant="subtitle2">{car.bodyType}</Typography>
      <Typography variant="h6">{car.modelName}</Typography>
      <p>{car.modelType}</p>
       <img src={car.imageUrl} alt={car.model} style={{ width: "100%" }} />
      <div style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
        <Button variant="text">LEARN</Button>
        <Button variant="text">SHOP</Button>
      </div>
    </Paper>
  </Grid>
);


const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('/api/cars.json')
      .then(response => response.json())
      .then(data => setCars(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {cars.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </Grid>
    </Container>
  );
};

export default Cars;
