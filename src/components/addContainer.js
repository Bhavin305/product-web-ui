import { connect } from 'react-redux';
import { createProduct } from '../action';
import AddProduct from './AddProduct.jsx';

const mapDispatchToProps = (dispatch) => ({
  createProduct: (product) => dispatch(createProduct(product))
});

const AddProductContainer = connect(undefined, mapDispatchToProps)(AddProduct);

export default AddProductContainer;