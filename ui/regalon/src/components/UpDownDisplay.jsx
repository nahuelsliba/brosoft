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
        <div> {label} </div>
        <Button variant="secondary" onClick={ () => handleOnClick(-1) } >-</Button>
        <div>  {display.value} </div>
        <Button variant="secondary" onClick={ () => handleOnClick(1) } >+</Button>
      </ButtonGroup>
    </div>
  );
}

export default UpDownDisplay;