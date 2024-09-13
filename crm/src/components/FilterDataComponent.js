import React, { useState } from "react";

const FilterDataComponent = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    firstName: "",
    lastName: "",
    email: "",
    region: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };
  const handleReset = () => {
    setFilters({
      firstName: "",
      lastName: "",
      email: "",
      region: ""
    });
    onFilter({
      firstName: "",
      lastName: "",
      email: "",
      region: ""
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Filter Data</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            value={filters.firstName}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={filters.lastName}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={filters.email}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block text-gray-700">Region</label>
          <input
            type="text"
            name="region"
            value={filters.region}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Apply Filters
        </button>
        <button
            type="button"
            onClick={handleReset}
            className="bg-gray-500 text-white ml-5 py-2 px-4 rounded"
          >
            Reset Filters
          </button>
      </form>
    </div>
  );
};

export default FilterDataComponent;
