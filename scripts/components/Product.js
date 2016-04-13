import React from 'react';

class Product extends React.Component {

  render() {
    var details = this.props.details;
    return (
      <ul>
        <li>{details.name}</li>
        <li>{details.desc}</li>
        <li><img src={details.img} /></li>
        <li>{details.price}</li>
        <li>{details.strength}</li>
        <li>{details.size}</li>
        <li>{details.flavors}</li>
      </ul>
    )
  }

}

export default Product;
