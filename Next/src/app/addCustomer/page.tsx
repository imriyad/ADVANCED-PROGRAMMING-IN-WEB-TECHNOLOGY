'use client';
import React, { useState } from 'react';
import axios from 'axios';

export default function AddCustomer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/customers', {
        name,
        email,
        phone,
        password,
      });
      alert('Customer added successfully');
      setName('');
      setEmail('');
      setPhone('');
      setPassword('');
    } catch (error) {
      alert('Error adding customer');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '30px auto', padding: '20px', border: '1px solid gray' }}>
      <h2 style={{ textAlign: 'center' }}>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>Name</label><br />
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Email</label><br />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Phone</label><br />
          <input
            type="text"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Password</label><br />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc' }}
          />
        </div>

        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none' }}>
          Submit
        </button>
      </form>
    </div>
  );
}
