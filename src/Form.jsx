import React, { useState } from 'react';
import Swal from 'sweetalert2';  // Import SweetAlert2

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const { name, email, phone } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Transform formData into a 2D array
    const dataToSend = [
      [name, email, phone, new Date().toLocaleString()]  // Adding current date and time
    ];

    try {
      const response = await fetch("https://v1.nocodeapi.com/sundramj_fullstack/google_sheets/XnFwwglgcfQBENiE?tabId=Sheet1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();
      console.log("Form data successfully submitted:", result);

      // Show success message
      Swal.fire({
        title: 'Success!',
        text: 'Form data successfully submitted.',
        icon: 'success',
        confirmButtonText: 'OK'
      });

      // Reset form data after successful submission
      setFormData({
        name: '',
        email: '',
        phone: ''
      });

    } catch (error) {
      console.error("Error submitting form:", error);

      // Show error message
      Swal.fire({
        title: 'Error!',
        text: 'There was an error submitting the form.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-md">
      <h1 className="text-2xl font-bold text-center mb-6">Contact Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 text-gray-700 font-semibold">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={name} 
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 text-gray-700 font-semibold">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={email} 
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="mb-1 text-gray-700 font-semibold">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={phone} 
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your phone number"
            required
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
