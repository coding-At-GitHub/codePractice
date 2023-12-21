import React, { useState } from 'react';
import { Button } from '@mui/material';

const TurkisButton = ({ height, width, buttonName }) => {
  const [position, setPosition] = useState({ x: height, y: width });

  const handleMove = () => {
    const newX = Math.min(Math.max(Math.floor(Math.random() * 400), 50), 1250);
    const newY = Math.min(Math.max(Math.floor(Math.random() * 200), 50), 100);
    setPosition({ x: newX, y: newY });
  };
  const handleClick = () => {
    console.log("button is clicked")
    // setDoShow(!doShow);
};

  return (
    <Button
    variant='contained'
      onMouseEnter={handleMove}
      onMouseLeave={handleMove}
      // onClick={handleMove}
      // onClick={handleClick}
      onClick={handleClick}
      sx={{
        position: 'relative',
        top: position.y,
        left: position.x,
        transition: '0.3s ease-in-out',
        bgcolor:'grey'
      }}
    >
      {buttonName}
    </Button>
  );
};

export default TurkisButton;
