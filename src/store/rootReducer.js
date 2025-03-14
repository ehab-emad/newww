import sellerProductsReducer from './reducers/sellerProductsReducer'; // Fixed the typo
import sellerOrdersReducer from './reducers/sellerOrdersReducer';
import sellerStuffReducer  from './reducers/sellerStuffReducer';

const rootReducer = {
    seller_products: sellerProductsReducer,
    seller_orders: sellerOrdersReducer,
    seller_stuff: sellerStuffReducer,
    // members:
};

export default rootReducer;