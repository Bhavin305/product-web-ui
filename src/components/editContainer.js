import { connect } from 'react-redux';
import { updateProduct } from '../action';
import EditProduct from './EditProduct.jsx';

const mapDispatchToProps = (dispatch) => ({
  updateProduct: (product) => dispatch(updateProduct(product))
});

const UpdateProductContainer = connect(undefined, mapDispatchToProps)(EditProduct);

export default UpdateProductContainer;