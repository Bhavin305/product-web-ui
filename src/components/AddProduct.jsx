import React from "react";

class AddProduct extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      create: true,
      title: '',
      quantity: '',
      price: '',
      productImage: ''
    }
  }

  addProduct = () => {
    this.setState({ create: false })
  }

  cancelAddProduct = (e) => {
    this.setState({ create: true });
    e.preventDefault();
  }

  priceChange = (e) => {
    this.setState({ price: e.target.value })
  }

  titleChange = (e) => {
    this.setState({ title: e.target.value })
  }

  quantityChange = (e) => {
    this.setState({ quantity: e.target.value })
  }

  imageChange = (e) => {
    this.setState({ productImage: e.target.files[0] });
  }

  submitHandler = (e) => {
    this.props.createProduct(this.state);
  }

  render() {
    return (
      <div>
        {this.state.create ?
          <div>
            <button onClick={this.addProduct}>CREATE PRODUCT</button>
          </div>
          :
          <form onSubmit={this.submitHandler}>
            <input type="text" placeholder="title" onChange={this.titleChange} required />
            <input type="number" placeholder="price" onChange={this.priceChange} required />
            <input type="number" placeholder="quantity" onChange={this.quantityChange} required />
            <input type="file" placeholder="productImage" onChange={this.imageChange} required />
            <input type="submit" value="Add" />
            <button onClick={this.cancelAddProduct}>Cancel</button>
          </form>
          
        }
      </div>
    );
  }
}

export default AddProduct;