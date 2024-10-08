import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper, Typography, Button } from '@mui/material';
import { useSearch } from './context/SearchContext';  
import Link from 'next/link';
import styles from "./css/Car.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

/*
 import { Grid} from 'vcc-ui';                              
 Tried to use from vcc-ui but including many other componenets are depricated as mentioned in doc 
 hope I dont' lose my bonus point because of this !
 */

const CarCard: React.FC<{ car: any }> = ({ car }) => (
  <Grid item xs={12} sm={6} md={3}>
    <Paper
      elevation={3}
      style={{
        overflow: 'hidden',
        transition: 'transform 0.3s ease',
      }}
      sx={{
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <Typography variant="subtitle2" style={{ fontSize: '18px' }}>{car.bodyType}</Typography>
      <Typography variant="h6" component="span" style={{ fontWeight: 'bold' }}>
        {car.modelName}
      </Typography>
      <Typography
        variant="body1"
        component="span"
        style={{ fontSize: '15px', marginLeft: '8px' }}
      >
        {car.modelType}
      </Typography>
      <img src={car.imageUrl} alt={car.model} style={{ width: '100%' }} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px',
        }}
      >
        <div className={styles.learnAndShop}>
                  <Link href={`/cars/${car.id}/learn`} passHref>
                  <Button variant="text" className={styles.learnCar}>
                          LEARN  &nbsp; <FontAwesomeIcon icon={faAngleRight} />
                  </Button>
                  </Link>

                  <Link href={`/cars/${car.id}/shop`} passHref>
                    <Button variant="text" className={styles.shopCar}>
                      SHOP &nbsp; <FontAwesomeIcon icon={faAngleRight} />
                    </Button>
                  </Link>
        </div>

      </div>
    </Paper>
  </Grid>
);

const Cars: React.FC = () => {
  const [cars, setCars] = useState<any[]>([]);
  const { searchTerm } = useSearch();

  useEffect(() => {
    fetch('/api/cars.json')
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Filter cars by bodyType
  const filteredCars = cars.filter((car) =>
    car.bodyType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className={styles.carBody} maxWidth="lg" >
      <Grid container spacing={4}>
        {filteredCars.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </Grid>
    </Container>
  );
};

export default Cars;
