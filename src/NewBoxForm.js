import React, { useState } from 'react';

// New box form
// should contain only state related to own form
// should use submit logic passed from BoxList
const NewBoxForm = ({ addBox }) => {
  const [color, setColor] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = { color, width, height };
    addBox(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        color={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        type='number'
        width={width}
        onChange={(e) => setWidth(parseInt(e.target.value))}
      />
      <input
        type='number'
        height={height}
        onChange={(e) => setHeight(parseInt(e.target.value))}
      />
      <button action='submit'>do it</button>
    </form>
  );
};

export default NewBoxForm;
