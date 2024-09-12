import React, { useState } from "react";
import FilterDataComponent from "../components/FilterDataComponent";

const MainPage = () => {
    const [data, setData] = useState([
        { firstName: "John", lastName: "Doe", email: "john.doe@example.com", registrationDate: "2024-01-15", region: "North" },
        { firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com", registrationDate: "2024-02-20", region: "South" },
        
      ]);
    
      const [filteredData, setFilteredData] = useState(data);
    
      const handleFilter = (filters) => {
        const { firstName, lastName, email, region } = filters;
        const newFilteredData = data.filter(item =>
          (firstName ? item.firstName.toLowerCase().includes(firstName.toLowerCase()) : true) &&
          (lastName ? item.lastName.toLowerCase().includes(lastName.toLowerCase()) : true) &&
          (email ? item.email.toLowerCase().includes(email.toLowerCase()) : true) &&
          (region ? item.region.toLowerCase().includes(region.toLowerCase()) : true)
        );
        setFilteredData(newFilteredData);
      };
  
  
    return (
    <div className="p-6">
      <FilterDataComponent onFilter={handleFilter} />
      <table className="min-w-full bg-white border border-gray-300 mt-4">
        <thead>
          <tr>
            <th className="border-b py-2 px-4">First Name</th>
            <th className="border-b py-2 px-4">Last Name</th>
            <th className="border-b py-2 px-4">Email</th>
            <th className="border-b py-2 px-4">Registration Date</th>
            <th className="border-b py-2 px-4">Region</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td className="border-b py-2 px-4">{item.firstName}</td>
              <td className="border-b py-2 px-4">{item.lastName}</td>
              <td className="border-b py-2 px-4">{item.email}</td>
              <td className="border-b py-2 px-4">{item.registrationDate}</td>
              <td className="border-b py-2 px-4">{item.region}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainPage;
