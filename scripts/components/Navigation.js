import React from 'react';

class Navigation extends React.Component {

  render() {
    return (
      <header>
        <nav className="navBar">
            <ul>
                <li><a href="/about">About</a></li>
                <li>Shop</li>
                <li>Contact</li>
            </ul>
        </nav>
        <div className="home">
        <a href="/"><i className="fa fa-home fa-lg"></i></a>
        </div>
        <div className="cart-icon">
        <i className="fa fa-shopping-cart fa-lg"></i>
        </div>
    </header>
    )
  }

}

export default Navigation;
