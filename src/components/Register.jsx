import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    mobile: false,
  });

  const [errorMessages, setErrorMessages] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: false });
    setErrorMessages({ ...errorMessages, [id]: '' });
  };

  const handleSubmit = async () => {
    const newErrors = {
      firstName: !formData.firstName,
      lastName: !formData.lastName,
      email: !formData.email,
      mobile: !formData.mobile,
    };

    const newErrorMessages = {
      firstName: !formData.firstName ? 'First Name is mandatory' : '',
      lastName: !formData.lastName ? 'Last Name is mandatory' : '',
      email: !formData.email ? 'Email Address is mandatory' : '',
      mobile: !formData.mobile ? 'Mobile Number is mandatory' : '',
    };

    setErrors(newErrors);
    setErrorMessages(newErrorMessages);

    const hasErrors = Object.values(newErrors).some((error) => error);
    if (!hasErrors) {
      setLoading(true); // Start loading
      try {
        const { data } = await axios.post('https://reliance-digital-backend-1.onrender.com/api/v1/users/register', formData);
        console.log(data.msg);
        if (data.success) {
          toast.success('Account created successfully');
          navigate('/login');
        } else if (data.msg == 'Email already exists') {
          navigate('/login');
          toast.error('Email already exists');
        } else {
          toast.error('Account creation failed');
        }
      } catch (error) {
        toast.error('Account creation failed');
      } finally {
        setLoading(false); // Stop loading
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h2 className="mb-4 text-2xl font-bold text-gray-700 text-center">Register New Account</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              Enter First Name*
            </label>
            <input
              className={`shadow appearance-none border ${errors.firstName ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id="firstName"
              type="text"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p className="text-red-500 text-xs italic">{errorMessages.firstName}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Enter Last Name*
            </label>
            <input
              className={`shadow appearance-none border ${errors.lastName ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id="lastName"
              type="text"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p className="text-red-500 text-xs italic">{errorMessages.lastName}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Enter Email Address*
            </label>
            <input
              className={`shadow appearance-none border ${errors.email ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
              id="email"
              type="email"
              placeholder="Enter Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-xs italic">{errorMessages.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-blue-500 text-sm font-bold mb-2" htmlFor="mobile">
              Enter Mobile Number*
            </label>
            <input
              className={`shadow appearance-none border ${errors.mobile ? 'border-red-500' : 'border-blue-500'} rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
              id="mobile"
              type="text"
              placeholder="Enter Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
            />
            {errors.mobile && <p className="text-red-500 text-xs italic">{errorMessages.mobile}</p>}
            <p className="text-gray-600 text-xs italic">
              Your mobile number will be used to avail benefits such as Jio Mart Cashback and ROne Loyalty Points and receive quick notifications.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
              type="button"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Registering...' : 'REGISTER'}
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-gray-500 text-xs">
          Already Registered? <a href="/login" className="text-red-500 hover:text-red-700">LOGIN</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
