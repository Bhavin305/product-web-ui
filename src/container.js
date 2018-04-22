import { connect } from 'react-redux';
import { fetchProducts, updateProduct, deleteProduct } from './action';
import App from './App.jsx';

const mapStateToProps = (state) => ({
  products: state && state.products,
  productKeys: state && state.productKeys
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts())
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;