import fetch from 'node-fetch';
import co from 'co';
import FormData from 'form-data';

const url = 'http://127.0.0.1:3000/product/';

const fetchProducts = () => {
  return co(function* () {
    const response = yield fetch(url);
    const products = yield response.json();
    return products;
  });
}

const updateProduct = (product) => {
  return co(function* () {
    const form = new FormData();
    form.append('title', product.title);
    form.append('price', product.price);
    form.append('quantity', product.quantity);
    form.append('productImage', product.productImage);
    const response = yield fetch(url + product.id, { method: 'PUT', body: form });
    const products = yield response.json();
    return products;
  });
}

const deleteProduct = (id) => {
  return co(function* () {
    const response = yield fetch(url + id, { method: 'DELETE' });
    const products = yield response.json();
    products.id = id;
    return products;
  });
}


const createProduct = (product) => {
  return co(function* () {
    const form = new FormData();
    form.append('title', product.title);
    form.append('price', product.price);
    form.append('quantity', product.quantity);
    form.append('productImage', product.productImage);

    const response = yield fetch(url, { method: 'POST', body: form });
    const products = yield response.json();
    return products;
  });
}

export {
  fetchProducts,
  updateProduct,
  deleteProduct,
  createProduct
}