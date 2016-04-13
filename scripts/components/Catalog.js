import React from 'react';
import autobind from 'autobind-decorator';

import Product from './Product';

@autobind
class Catalog extends React.Component {

  constructor() {
    super();

    this.state = {
      products : {}
    }
  }

  renderProduct(key) {
    return <Product key={key} index={key} details={this.state.products[key]} />
  }

  loadSamples() {
    this.setState({
      products : require('../sample-juices.js')
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.loadSamples}>Load Samples</button>
        {Object.keys(this.state.products).map(this.renderProduct)}
      </div>
    )
  }

}

export default Catalog;
