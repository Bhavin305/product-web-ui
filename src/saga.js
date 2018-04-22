import { take, put, actionChannel, call, fork } from 'redux-saga/effects';
import {
  FETCH_PRODUCTS,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  CREATE_PRODUCT,
  FETCH_PRODUCTS_FULFILLED,
  UPDATE_PRODUCT_FULFILLED,
  DELETE_PRODUCT_FULFILLED,
  CREATE_PRODUCT_FULFILLED
} from './action';

import { fetchProducts, createProduct, updateProduct, deleteProduct } from './controller';


function* fetchProductsSaga() {
  const products = yield call(fetchProducts);
  yield put({ type: FETCH_PRODUCTS_FULFILLED, payload: products });
}

function* deleteProductSaga(id) {
  const product = yield call(deleteProduct, id);
  yield put({ type: DELETE_PRODUCT_FULFILLED, payload: product });
}

function* updateProductSaga(newProduct) {
  const product = yield call(updateProduct, newProduct);
  yield put({ type: UPDATE_PRODUCT_FULFILLED, payload: product });
}

function* createProductSaga(productData) {
  const product = yield call(createProduct, productData);
  yield put({ type: CREATE_PRODUCT_FULFILLED, payload: product });
}

function* invokeAPI(action) {
  const { operation, payload } = action;
  try {
    switch (operation) {

      case FETCH_PRODUCTS:
        yield call(fetchProductsSaga);
        break;

      case UPDATE_PRODUCT:
        yield call(updateProductSaga, payload);
        break;

      case DELETE_PRODUCT:
        yield call(deleteProductSaga, payload);
        break;

      case CREATE_PRODUCT:
        yield call(createProductSaga, payload);
        break;

      default:
        throw new Error('API method is not found!');
    }

  } catch (error) {
    // TBD: handle error 
  }
}

function* apiSaga() {
  const actionQueue = yield actionChannel('API');
  while (true) {
    const action = yield take(actionQueue);
    yield fork(invokeAPI, action);
  }
}

export default apiSaga;