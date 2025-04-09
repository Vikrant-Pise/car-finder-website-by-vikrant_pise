import React from 'react';

const CarDetails = ({ car }) => {
  if (!car) return <p>Car not found!</p>;

  return (
    <div className="container">
      <h2>{car.name}</h2> run dev
      
      <img src={car.image} alt={car.name} className="img-fluid" />
      <p>Price: ₹{car.price}</p>
      <p>Fuel: {car.fuel}</p>
      <p>Seats: {car.seats}</p>
    </div>
  );
};

export default CarDetails;
