import { connect } from 'react-redux';
import { fetchProducts, updateProduct, deleteProduct } from '../action';
import DisplayProduct from './DisplayProduct.jsx';

const mapDispatchToProps = (dispatch) => ({
  deleteProduct: (id) => dispatch(deleteProduct(id)),
});

const DisplayProductContainer = connect(undefined, mapDispatchToProps)(DisplayProduct);

export default DisplayProductContainer;