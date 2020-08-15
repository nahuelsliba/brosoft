import React from 'react';
import { connect } from 'react-redux';
import WizardContentResultItem from './WizardContentResultItem';

function WizardContentResult( {searchProudctsJson} ) {
  const products = searchProudctsJson.products;

  return (    
    <div className="WizardContentResult">
      {products.map((product) =>
        <WizardContentResultItem 
          key={product.url} 
          title={product.title} 
          description={product.description} 
        />
      )}
      <div className="text-center"> <a href="#"> Ver mas... </a> </div>
    </div>
  );
}

const mapStateToProps = (state) => {  
  return { searchProudctsJson : state.wizard.searchProudctsJson };
}

export default connect(mapStateToProps, null)(WizardContentResult);