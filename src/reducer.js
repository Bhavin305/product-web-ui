import {
  FETCH_PRODUCTS_FULFILLED,
  UPDATE_PRODUCT_FULFILLED,
  DELETE_PRODUCT_FULFILLED
} from './action';

const reducer = (state, action) => {
  const currentState = state;

  switch (action.type) {
    case FETCH_PRODUCTS_FULFILLED: {
      const keys = [], values = {};
      action.payload.map((p) => {
        keys.push(p.id);
        values[p.id] = p;
        return;
      });

      return {
        ...currentState,
        productKeys: [
          ...keys
        ],
        products: {
          ...values
        }
      }
    }

    case DELETE_PRODUCT_FULFILLED: {
      const productKeys = currentState.productKeys.filter(item => item !== action.payload.id);
      delete currentState.products[action.payload];
      return {
        ...currentState,
        productKeys: [
          ...productKeys
        ]
      }
    }

    default:
      break;
  }

  return state;
}

export default reducer;