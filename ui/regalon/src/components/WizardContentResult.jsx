import React from 'react';
import { connect } from 'react-redux';
import WizardContentResultItem from './WizardContentResultItem';
import { resetWizardAction } from '../redux/actions/wizard'; 

function WizardContentResult( {searchProudctsJson, _resetWizardAction} ) {

  const handleOnClickReset = () => {
    console.log('handleOnClickReset');
    _resetWizardAction();
  }

  const products = searchProudctsJson.products;

  return (    
    <div className="WizardContentResult">
      {products.map((product) =>
        <WizardContentResultItem 
          key={product.url} 
          imgUrl={product.imgUrl} 
          title={product.title} 
          price={product.price} 
          description={product.description} 
        />
      )}
      <div> 
        <div className="elInlineBlock elFloatL"> <a href="#"> Ver mas </a> </div>
        <div className="elInlineBlock elFloatR"> <a href="#" onClick={handleOnClickReset}> Nueva busqueda </a> </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {  
  return { searchProudctsJson : state.wizard.searchProudctsJson };
}

const mapDispatchToProps = (dispatch) => {
  return {
      _resetWizardAction: () => dispatch(resetWizardAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WizardContentResult);