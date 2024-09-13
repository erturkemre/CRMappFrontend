import React, { useEffect, useState } from "react";
import FilterDataComponent from "../components/FilterDataComponent";
import { useDispatch, useSelector } from "react-redux";
import { addCustomer, deleteCustomer, getCustomers } from "../store/actions/customerAction";
import AddCustomerForm from "../components/AddCustomerForm";
import { Edit, Plus, Trash } from "lucide-react";
import { Modal } from "../components/Modal";



const MainPage = () => {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customerReducer.customers);
  const [filteredData, setFilteredData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editCustomer, setEditCustomer] = useState(null);

  useEffect(() => {
    console.log("Fetching customers...");
    dispatch(getCustomers());
  }, [dispatch]);

  useEffect(() => {
    setFilteredData(customers);
  }, [customers]);

  const handleFilter = (filters) => {
    const { firstName, lastName, email, region } = filters;
    const newFilteredData = customers.filter(
      (item) =>
        (firstName
          ? item.firstName.toLowerCase().includes(firstName.toLowerCase())
          : true) &&
        (lastName
          ? item.lastName.toLowerCase().includes(lastName.toLowerCase())
          : true) &&
        (email
          ? item.email.toLowerCase().includes(email.toLowerCase())
          : true) &&
        (region
          ? item.region.toLowerCase().includes(region.toLowerCase())
          : true)
    );
    setFilteredData(newFilteredData);
  };

  const handleEdit = (customer) => {
    console.log('Editing customer:', customer);
    setEditCustomer(customer);
    //dispatch(editCustomer(customer));
    setIsModalOpen(true);
  };

  const handleDelete = (customerId) => {
    console.log('Deleting customer with ID:', customerId);
    dispatch(deleteCustomer(customerId));
  };

  const handleAddCustomer = (customerData) => {
    dispatch(addCustomer(customerData));
    setIsModalOpen(false);
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="p-6">
      <FilterDataComponent onFilter={handleFilter} />

      <button
        className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
        onClick={toggleModal}
      >
        <Plus className="w-6 h-6" />
      </button>
      <table className="min-w-full bg-white border border-gray-300 mt-4">
        <thead>
          <tr>
            <th className="border-b py-2 px-4">First Name</th>
            <th className="border-b py-2 px-4">Last Name</th>
            <th className="border-b py-2 px-4">Email</th>
            <th className="border-b py-2 px-4">Registration Date</th>
            <th className="border-b py-2 px-4">Region</th>
            <th className="border-b py-2 px-4">Actions</th>
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
              <td className="border-b py-2 px-4 flex gap-2">
                <button
                  onClick={() => handleEdit(item)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <Edit className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <AddCustomerForm onAddCustomer={handleAddCustomer} />
        </Modal>
      )}
      
    </div>
  );
};

export default MainPage;
