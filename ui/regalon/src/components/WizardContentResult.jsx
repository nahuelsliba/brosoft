import React, { useState } from 'react';
import { connect } from 'react-redux';
import WizardContentResultItem from './WizardContentResultItem';
import { resetWizardAction } from '../redux/actions/wizard'; 
import { 
  msg_general_button_new_search
} from '../i18n/translation';

function WizardContentResult( {searchProudctsJson, _resetWizardAction} ) {

  const PAGE_ITEMS = 5;

  const [visibleProducts, setVisibleProducts] = useState(searchProudctsJson.products.slice(0, PAGE_ITEMS));
  const [page, setPage] = useState(1);

  const isThereMoreItems = (currentPage) => {
    return searchProudctsJson.products.length > currentPage * PAGE_ITEMS;
  }
  const [moreItems, setMoreItems] = useState(isThereMoreItems(1));

  const handleOnClickReset = () => {
    _resetWizardAction();
  }

  const loadMoreProducts = () => {
    let nextPage = page + 1;
    setVisibleProducts(searchProudctsJson.products.slice(0, nextPage * PAGE_ITEMS));
    setPage(nextPage);
    setMoreItems(isThereMoreItems(nextPage));    
  }

  return (    
    <div className="WizardContentResult">
      {visibleProducts.map((product) =>
        <WizardContentResultItem 
          key={product.id} 
          url={product.url} 
          imgUrl={product.imgUrl} 
          title={product.title} 
          price={product.price} 
          description={product.description} 
        />
      )}
      <div> 
        <div className="elInlineBlock elFloatL"> {moreItems && <a href="#" onClick={loadMoreProducts}> Ver mas </a>} </div>
        <div className="elInlineBlock elFloatR"> <a href="#" onClick={handleOnClickReset}> {msg_general_button_new_search} </a> </div>
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