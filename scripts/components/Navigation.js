import React from 'react';

class Navigation extends React.Component {

  render() {
    return (
      <header>
        <nav className="navBar">
            <ul>
                <li>About</li>
                <li>Shop</li>
                <li>Contact</li>
            </ul>
        </nav>
        <div className="cart-icon">
        <i className="fa fa-shopping-cart fa-lg"></i>
        </div>
        <div className="home">
        <i className="fa fa-home fa-lg"></i>
        </div>
    </header>
    )
  }

}

export default Navigation;
