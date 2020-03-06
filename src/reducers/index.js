import {combineReducers} from 'redux';
import shop from './shop.reducer';
import {tagFilterReducer} from "./tag.filter.reducer";
import {orderByPriceReducer} from "./orderByPrice.filter.reducer";
import {paginationReducer} from "./pagination.reducer";

export default combineReducers({
    shop,
    tagFilter: tagFilterReducer,
    orderBy: orderByPriceReducer,
    pagination: paginationReducer
});
