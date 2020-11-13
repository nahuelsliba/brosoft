import React from 'react';

function WizardContentResultItem( {imgUrl, title, price, description} ) {
  return (    
    <div className="WizardContentResultItem"> 
      <table>
        <tr> 
          <td className="wizardItem11C"> 
            <div className="wizardItemImg"> <img className="" src={imgUrl} /> </div>            
          </td>
          <td className="wizardItem12C">  
            <div className="wizardItemTitle"> {title} </div>
            <div className="wizardItemPrice"> {price} € </div>
          </td>
        </tr>
        <tr>
          <td className="wizardItem22C" colSpan="2">  
            <div className="wizardItemDesc"> {description} </div>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default WizardContentResultItem;