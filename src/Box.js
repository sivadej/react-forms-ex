import React from 'react';

// Box - to be used by BoxList
const Box = ({ index, box, removeBox }) => {
  return (
    <div>
      <div
        style={{
          backgroundColor: box.color,
          width: box.width,
          height: box.height,
        }}></div>
      <button onClick={() => removeBox(index)}>X</button>
    </div>
  );
};

export default Box;
