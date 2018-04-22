import React from "react";

class EditProduct extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      title: props.title,
      quantity: props.quantity,
      price: props.price,
      productImage: ''
    }
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
    let file = e.target.files[0];
    this.setState({ productImage: e.target.files[0] });
  }

  submitHandler = (e) => {
    this.props.updateProduct(this.state);
    e.stopPropagation();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type="text" placeholder="title" onChange={this.titleChange} value={this.state.title} required/>
          <input type="number" placeholder="price" onChange={this.priceChange} value={this.state.price} required />
          <input type="number" placeholder="quantity" onChange={this.quantityChange} value={this.state.quantity} required />
          <input type="file" onChange={this.imageChange} required/>
          <input type="submit" value="Edit" />
        </form>
      </div>
    );
  }
}


export default EditProduct;