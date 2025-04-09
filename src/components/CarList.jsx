import React from 'react';
import CarCard from './carCard.jsx';

const CarList = ({ cars, addToWishlist, viewDetails }) => {
  return (
    <div className="row">
      {cars.length ? (
        cars.map((car) => (
          <CarCard key={car.id} car={car} addToWishlist={addToWishlist} viewDetails={viewDetails} />
        ))
      ) : (
        <p>No Cars Found!</p>
      )}
    </div>
  );
};

export default CarList;
