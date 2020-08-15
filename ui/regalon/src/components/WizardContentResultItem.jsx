import React from 'react';

function WizardContentResultItem( {title, description} ) {
  return (    
    <div className="WizardContentResultItem"> 
      <div className="font-weight-bold"> {title} </div>
      <div> {description} </div>
    </div>
  );
}

export default WizardContentResultItem;