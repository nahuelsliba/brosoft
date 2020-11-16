import React from 'react';

function WizardContentResultItem( {url, imgUrl, title, price, description} ) {
  return (    
    <div className="WizardContentResultItem"> 
      <table>
        <tbody>
          <tr> 
            <td className="wizardItem11C"> 
              <div className="wizardItemImg"> <a href={url} target="_blank"><img className="" src={imgUrl} /></a> </div>            
            </td>
            <td className="wizardItem12C">  
              <div className="wizardItemTitle"> <a href={url} target="_blank">{title}</a> </div>
              <div className="wizardItemPrice"> 
                <span className="wizardItemPriceValue">{price} €</span> 
                <span className="wizardItemPriceLabel">(precio apróximado en amazon.es)</span>
              </div>
            </td>
          </tr>
          <tr>
            <td className="wizardItem22C" colSpan="2">  
              <div className="wizardItemDesc"> {description} </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default WizardContentResultItem;