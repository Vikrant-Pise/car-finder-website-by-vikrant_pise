import React from 'react';
import "./CarCard.css"; 


const CarCard = ({ car, addToWishlist, viewDetails }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={car.image} className="card-img-top" alt={car.name} />
        <div className="card-body">
          <h5 className="card-title">{car.name}</h5>
          <p className="card-text">Price🏷️: ₹{car.price}</p>
          <p className="card-text">Fuel⛽: {car.fuel}</p>
          <p className="card-text">Seats👥: {car.seats}</p>

          <button onClick={() => viewDetails(car)} className="btn btn-primary me-2">
            View Details
          </button>

          <button onClick={() => addToWishlist(car)} className="btn btn-outline-success">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
