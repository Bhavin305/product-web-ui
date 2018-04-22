import React from "react";
import style from "./main.css";
import { AddProduct, DisplayProduct } from './components'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div>
        <AddProduct />
        <div className="flex-container">
          {
            this.props.productKeys.map((p) => {
              return (
                <DisplayProduct {...this.props.products[p]} />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default App;