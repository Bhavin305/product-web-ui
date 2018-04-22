export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const FETCH_PRODUCTS_FULFILLED = 'FETCH_PRODUCTS_FULFILLED';
export const CREATE_PRODUCT_FULFILLED = 'CREATE_PRODUCT_FULFILLED';
export const UPDATE_PRODUCT_FULFILLED = 'UPDATE_PRODUCT_FULFILLED';
export const DELETE_PRODUCT_FULFILLED = 'DELETE_PRODUCT_FULFILLED';

const fetchProducts = (() => {
  return {
    type: 'API',
    operation: FETCH_PRODUCTS
  }
});

const createProduct = ((product) => {
  return {
    type: 'API',
    operation: CREATE_PRODUCT,
    payload: product
  }
})

const updateProduct = ((product) => {
  return {
    type: 'API',
    operation: UPDATE_PRODUCT,
    payload: product
  }
});

const deleteProduct = ((productId) => {
  return {
    type: 'API',
    operation: DELETE_PRODUCT,
    payload: productId
  }
});


export { fetchProducts, createProduct, updateProduct, deleteProduct };