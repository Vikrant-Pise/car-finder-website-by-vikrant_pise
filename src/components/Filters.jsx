import React from 'react';

const Filters = ({ filters, setFilters, brands, fuels }) => {
  return (
    <div className="mb-4">
      <div className="row g-2">
        <div className="col-md-3">
          <input
            type="text"
            placeholder="Search by Name"
            className="form-control"
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          />
        </div>

        <div className="col-md-3">
          <select
            className="form-select"
            value={filters.brand}
            onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
          >
            <option value="">All Brands</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>

        <div className="col-md-3">
          <select
            className="form-select"
            value={filters.fuel}
            onChange={(e) => setFilters({ ...filters, fuel: e.target.value })}
          >
            <option value="">All Fuels</option>
            {fuels.map((fuel) => (
              <option key={fuel} value={fuel}>{fuel}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
