import React, { useState } from 'react';
import './App.css';

// router
import { Link, Route } from 'react-router-dom';

// import home and form
import Home from './components/Home';
import Form from './components/Form';

// import yup and schema
import schema from './validation/formSchema';
import * as yup from 'yup';

// import axios
import axios from 'axios';

// initial states
const initialFormValues = {
  username: '',
  size: '',
  sauce: '',
  topping1: '',
  topping2: '',
  topping3: '',
  topping4: '',
  special: ''
}
const initialFormErrors = {
  username: '',
  size: '',
  sauce: '',
  topping1: '',
  topping2: '',
  topping3: '',
  topping4: '',
  special: ''
}

const App = () => {

  // states
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [orders, setOrders] = useState([]);

  const handleSubmit = () => {
    axios.post('https://reqres.in/api/orders', formValues)
      .then(res => {
        setOrders([res.data, ...orders]);
      })
      .catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues));
  }

  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value})
  }

  return (
    <div className="App">
      <h1>Lambda Eats</h1>
      <h2>The Website that Allows You to Build Your Own Pizza</h2>
      <div className="form-wrapper">
        
      </div>
      <div className='nav-links'>
        <Link to="/">Home</Link>
        <Link to="/pizza">Order</Link>
      </div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/pizza">
        <Form 
          values={formValues}
          errors={formErrors}
          change={handleChange}
          submit={handleSubmit}
        />
      </Route>
    </div>
  );
};

export default App;