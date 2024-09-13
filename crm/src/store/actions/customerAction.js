import { axiosWithAuth } from '../../api/api';

export const SET_CUSTOMERS = 'SET_CUSTOMERS';
export const ADD_CUSTOMER = 'ADD_CUSTOMER';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER';
export const UPDATE_CUSTOMER = 'UPDATE_CUSTOMER';




export const getCustomers = () => async (dispatch) => {
    try {
      const api = axiosWithAuth(); 
      const response = await api.get('/customer');
      console.log('Customers Response:', response.data);
      dispatch({ type: SET_CUSTOMERS, payload: response.data });
    } catch (error) {
      console.error('Error fetching customers:', error);
      
    }
  };


export const addCustomer = (customerData) => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const api = axiosWithAuth(); 
    const response = await api.post(`/customer`, customerData);
    dispatch({ type: ADD_CUSTOMER, payload: response.data });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.message });
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const deleteCustomer = (customerId) => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const api = axiosWithAuth();
      await api.delete(`/customer/${customerId}`);
      dispatch({
          type: DELETE_CUSTOMER,
          payload: customerId,
      });
  } catch (error) {
      dispatch({ type: SET_ERROR, payload: error.message });
  } finally {
      dispatch({ type: SET_LOADING, payload: false });
  }
};

export const editCustomer =  (customer) => async (dispatch) => {
    dispatch({ type: SET_LOADING, payload: true });
    try {
      const api = axiosWithAuth();
      const response = await api.put(`/customer/${customer.id}`, customer);
      dispatch({ type: UPDATE_CUSTOMER, payload: response.data });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error.message });
    } finally {
      dispatch({ type: SET_LOADING, payload: false });
    }
    
}


