import React from 'react';

function WizardContentResultItem( {url, imgUrl, title, price, description} ) {
  return (    
    <div className="WizardContentResultItem"> 
      <table>
        <tr> 
          <td className="wizardItem11C"> 
            <div className="wizardItemImg"> <a href={url} target="_blank"><img className="" src={imgUrl} /></a> </div>            
          </td>
          <td className="wizardItem12C">  
            <div className="wizardItemTitle"> <a href={url} target="_blank">{title}</a> </div>
            <div className="wizardItemPrice"> <span>{price} €</span> (precio apróximado)</div>
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