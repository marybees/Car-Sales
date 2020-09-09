import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions'

class AddedFeature extends React.Component {

  state = {
    newFeature: ''
  };

  removeFeature = e => {
    e.preventDefault();
    this.props.removeFeature(this.state.newFeature);
  };

  render() {
    return (
      <li>
        {/* Add an onClick to run a function to remove a feature */}
        <button onClick={this.removeFeature} className="button">X</button>
        {this.state.newFeature}
      </li >
    );
  };
}

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures.name,
  };
};

export default connect(
  mapStateToProps,
  { removeFeature }
)(AddedFeature);
