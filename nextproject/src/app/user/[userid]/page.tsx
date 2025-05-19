'use client';

import { useParams } from 'next/navigation';

export default function UserPage() {
  const params = useParams();
  const userid = params?.userid;

  console.log(userid); 

  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {userid}</p> 
    </div>
  );
}
