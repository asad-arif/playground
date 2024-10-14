'use client';
import React, { useState } from 'react';
import custom from '@/styles/custom.module.css';

const page = () => {
  const [color, setColor] = useState('blue');
  const { blue, green } = custom;
  return (
    <div>
      <h1 className={color === 'blue' ? blue : green}>Heading 1</h1>
      <h2 style={{ color: color }}>Style tag</h2>
      <button onClick={() => setColor('green')}>Change Color</button>
    </div>
  );
};

export default page;
