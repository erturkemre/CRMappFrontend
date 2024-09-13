import React, { useState, useEffect } from "react";

const AddCustomerForm = ({ onAddCustomer, customer }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    region: "",
    registrationDate: "",
  });

  useEffect(() => {
    if (customer) {
      setFormData({
        firstName: customer.firstName || "",
        lastName: customer.lastName || "",
        email: customer.email || "",
        region: customer.region || "",
        
      });
    } else {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        region: "",
        
      });
    }
  }, [customer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCustomer(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700">First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label className="block text-gray-700">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label className="block text-gray-700">Region</label>
        <input
          type="text"
          name="region"
          value={formData.region}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        {customer ? "Update Customer" : "Add Customer"}
      </button>
    </form>
  );
};

export default AddCustomerForm;
