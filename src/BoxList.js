import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

// BoxList - container for Box components and NewBoxForm
const BoxList = () => {
  //state
  const [boxes, setBoxes] = useState([
    { color: 'black', width: 100, height: 100 },
    { color: 'purple', width: 50, height: 50 },
    { color: 'orange', width: 400, height: 400 },
    { color: 'green', width: 10, height: 10 },
    { color: 'pink', width: 120, height: 55 },
  ]);

  //state handlers
  const removeBox = (index) => {
    const newBoxes = boxes.filter((b, i) => i !== index);
    setBoxes(newBoxes);
  };

  const addBox = (box) => {
    console.log('adding box maybe');
    console.log(box.color, box.height, box.width)
    const newBoxes = [...boxes, box];
    setBoxes(newBoxes);
  };

  //return render Box components using boxes array from state
  //and NewBoxForm
  return (
    <div>
      <NewBoxForm addBox={addBox}/>
      {boxes.map((box, idx) => (
        <Box key={idx} index={idx} box={box} removeBox={removeBox} />
      ))}
    </div>
  );
};

export default BoxList;
