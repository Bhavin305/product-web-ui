import React from "react";
import EditProduct from './editContainer';

class DisplayProduct extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      edit: false
    }
  }

  updateProduct = () => {
    this.setState({ edit: true })
  }

  cancelEdit = () => {
    this.setState({ edit: false })
  }

  render() {
    return (
      <div className="product-item">
        {
          this.state.edit ?
            <div>
              <EditProduct {...this.props} />
              <button onClick={this.cancelEdit}>Cancel</button>
            </div>
            :
            <div key={this.props.id}>
              <div className="title">Title - {this.props.title}</div>
              <hr />
              <div>
                Price - <span>{this.props.price}</span><br />
                Qty- <span>{this.props.quantity}</span>
              </div>
              <div><img src={this.props.productImage} /></div>
              <button onClick={this.updateProduct}>Update</button>
              <button onClick={() => this.props.deleteProduct(this.props.id)}>Delete</button>
            </div>
        }
      </div>
    );
  }
}


export default DisplayProduct;