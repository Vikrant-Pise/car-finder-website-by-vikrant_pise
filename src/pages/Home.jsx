import React, { useEffect, useState } from 'react';
import carsData from '../data/cars';
import Filters from '../components/Filters';
import CarList from '../components/CarList';
import Wishlist from '../components/Wishlist';

const Home = ({ viewDetails }) => {
  const [filters, setFilters] = useState({ search: '', brand: '', fuel: '' });
  const [wishlist, setWishlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(data);
  }, []);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (car) => {
    if (!wishlist.find(item => item.id === car.id)) {
      setWishlist([...wishlist, car]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  const filteredCars = carsData.filter(car =>
    car.name.toLowerCase().includes(filters.search.toLowerCase()) &&
    (filters.brand ? car.brand === filters.brand : true) &&
    (filters.fuel ? car.fuel === filters.fuel : true)
  );

  const indexOfLast = currentPage * carsPerPage;
  const indexOfFirst = indexOfLast - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  return (
    <div className="container">
      <Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} />
      <Filters filters={filters} setFilters={setFilters} brands={['Maruti', 'Hyundai']} fuels={['Petrol', 'Diesel']} />
      <CarList cars={currentCars} addToWishlist={addToWishlist} viewDetails={viewDetails} />

      {/* Pagination */}
      <div className="d-flex justify-content-center mt-4">
        {[...Array(totalPages).keys()].map(num => (
          <button key={num} onClick={() => setCurrentPage(num + 1)} className={`btn mx-1 ${currentPage === num + 1 ? 'btn-dark' : 'btn btn-outline-dark text-white'}`}>
            {num + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
