import React, {Component} from 'react';

class DisplayComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <h4>Enter message!</h4>
          <p>{this.props.sayWhat}</p>
        </div>
      </div>
    );
  }
}
export default DisplayComponent;
