'use client';

import { useState } from 'react';
import { useInterval } from './hooks/useInterval';
import { useRouter } from 'next/navigation';

export const Comp3CC = () => {
  const router = useRouter();
  const [data, setData] = useState('');

  useInterval(() => {
    fetch('http://localhost:3000/api/source')
      .then(res => res.json())
      .then(res => setData(res));
  }, 2000);

  return (
    <div
      style={{
        width: '89%',
        height: '200px',
        border: '2px solid #f8eaea',
        marginTop: '50px'
      }}
    >
      Client Component
      <h1>{data}</h1>
      <button
        onClick={() => router.refresh()}
        style={{ padding: '10px', fontSize: '20px' }}
      >
        Refresh this route
      </button>
    </div>
  );
};
