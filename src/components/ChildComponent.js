import React, {Component} from 'react';

class ChildComponent extends Component {
  render() {
    return (
      <button type="submit" onClick={this.props.onClick}>Enter</button>
    );
  }
}
export default ChildComponent;
