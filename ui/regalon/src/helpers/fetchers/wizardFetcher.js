import { postFetch } from './apiFetcher';
import { searchProductsRequestAction, searchProductsSuccessAction, searchProductsFailureAction } from '../../redux/actions/wizard';

const SEARCH_PRODUCTS_URL = 'search';

const searchProducts = (filters, dispatch) => {
    dispatch(searchProductsRequestAction());
    postFetch(SEARCH_PRODUCTS_URL, filters)
        .then((response) => {
            console.log(response);
            dispatch(searchProductsSuccessAction(response));
        })
        .catch((error) => {
            console.log(error);
            dispatch(searchProductsFailureAction(error));
        });    
}

export { searchProducts };
