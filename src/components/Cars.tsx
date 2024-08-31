import React, { useState, useEffect } from "react";
import { Container, Grid, Paper, Typography, Button } from "@mui/material";
import Link from "next/link";


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
      <Typography variant="subtitle2" style={{ fontSize: "15px"}}>{car.bodyType}</Typography>
      <Typography variant="h6" component="span" style={{ fontWeight: "bold" }}>
        {car.modelName}
      </Typography>
      <Typography
        variant="body1"
        component="span"
        style={{ fontSize: "15px", marginLeft: "8px" }}
      >
        {car.modelType}
      </Typography>
      <img src={car.imageUrl} alt={car.model} style={{ width: "100%" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
         <Link href={`/cars/${car.id}/learn`} passHref>
          <Button variant="text">LEARN</Button>
        </Link>
        <Link href={`/cars/${car.id}/shop`} passHref>
          <Button variant="text">SHOP</Button>
        </Link>
              </div>
    </Paper>
  </Grid>
);

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("/api/cars.json")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching data:", error));
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
