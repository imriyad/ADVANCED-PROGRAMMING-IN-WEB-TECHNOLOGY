'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export default function CustomerList() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/customers')
      .then(res => setCustomers(res.data))
      .catch(err => console.error('Error fetching customers:', err));
  }, []);

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto' }}>
      <h2>Customer List</h2>
      <ul style={{ padding: 0, listStyle: 'none' }}>
        {customers.map(c => (
          <li key={c.id} style={{ marginBottom: '10px', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>
            <strong>{c.name}</strong><br />
            {c.email}
          </li>
        ))}
      </ul>
      <Link href="/addCustomer">
        <button style={{ marginTop: '10px', padding: '8px 12px' }}>Add New Customer</button>
      </Link>
    </div>
  );
}
