import React, { useState } from "react";
import Button from 'React'
 
const ButtonGroup = ({ buttons }) => {
  const [clickedId, setClickedId] = useState(-1);

  return (
    <>
      {buttons.map((buttonLabel, i) => (
        <Button
          key={i}
          name={buttonLabel}
          onClick={() => setClickedId(i)}
          className={i === clickedId ? "customButton active" : "customButton"}
        >
          {buttonLabel}
        </Button>
      ))}
    </>
  );
};

export default ButtonGroup