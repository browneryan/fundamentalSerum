import React from 'react';

class Spacer extends React.Component {

  spacerType() {
    return "spacer-" + this.props.type;
  }

  render() {
    return (
      <div className={this.spacerType()}></div>
    )
  }


}

 Spacer.propTypes = {
  type : React.PropTypes.string.isRequired
 }

export default Spacer;
