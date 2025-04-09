import React from 'react';

const Wishlist = ({ wishlist, removeFromWishlist }) => {
  return (
    <div className="mb-4">
      <h4 className="text-white">Wishlist</h4>
      {wishlist.length ? wishlist.map(car => (
        <div key={car.id} className="border p-2 mb-2 d-flex justify-content-between">
          <span className="text-white">{car.name}</span>
          <button className="btn btn-danger btn-sm" onClick={() => removeFromWishlist(car.id)}>
            Remove
          </button>
        </div>
      )) : <p className="text-white">No cars in Wishlist ❤</p>}
    </div>
  );
};

export default Wishlist;
