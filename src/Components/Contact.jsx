// ContactPage.js

import React, { useRef, useState } from 'react';
import Nav from './Nav';

const ContactPage = ({cartCount, setCartCount}) => {

  const reff = useRef()
  const initData = {
    name: '',
    email: '',
    message: '',
  }

  // State to track form inputs
  const [formData, setFormData] = useState(initData);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your form submission logic here
    console.log('Form submitted:', formData);
    setFormData(initData)
    reff.current.focus()
    // You can add logic to send the form data to a server or handle it in other ways
  };

  return (
  <>
        <div className="pt-3 bg-light">
        <Nav  cartCount={cartCount} setCartCount={setCartCount} />
      </div>
    <div className='' style={{display:"flex", justifyContent:"center",height:"80vh", alignItems:"center"}}>
<div className=''>
<h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
          autoFocus
          className='form-control'
          ref={reff}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
          className='form-control'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
          className='form-control'
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>
        <button className='btn btn-success mt-3' type="submit">Submit</button>
      </form>
</div>
    </div>
  </>
  );
};

export default ContactPage;
