import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

function UpDownDisplay( {id, label, display, handleOnClickFunction} ) {

  const handleOnClick = (direction) => {
    console.log('handleOnClick');
    handleOnClickFunction(id, direction);
  }
  
  return (    
    <div className="UpDownDisplay">
      <ButtonGroup aria-label="Basic example">
        <div className="displayLabel"> {label} </div>
        <Button variant="rgln-display" onClick={ () => handleOnClick(-1) } >-</Button>
        <div className="displayValue"> {display.value} </div>
        <Button variant="rgln-display" onClick={ () => handleOnClick(1) } >+</Button>
      </ButtonGroup>
    </div>
  );
}

export default UpDownDisplay;