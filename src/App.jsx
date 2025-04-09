import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CarDetails from './pages/CarDetails';

function App() {
  const [selectedCar, setSelectedCar] = useState(null);

  const viewDetails = (car) => {
    setSelectedCar(car);
  };

  return (
    <>
      <Navbar />
      {!selectedCar ? (
        <Home viewDetails={viewDetails} />
      ) : (
        <CarDetails car={selectedCar} />
      )}
    </>
  );
}

export default App;
