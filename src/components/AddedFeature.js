import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions'

class AddedFeature extends React.Component {

  removeFeature = e => {
    e.preventDefault();
    this.props.removeFeature(this.state.feature);
  };

  render() {
    return (
      <li>
        {/* Add an onClick to run a function to remove a feature */}
        <button onClick={this.removeFeature} className="button">X</button>
        {this.state.feature}
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
