import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../actions'

class AdditionalFeature extends React.Component {

  addFeature = e => {
    e.preventDefault();
    this.props.addFeature(this.state.feature);
  };

  render() {
    return (
      <li>
        {/* Add an onClick that will let you add a feature to your car */}
        <button onClick={this.addFeature} className="button">Add</button>
        {this.state.feature.name} (+{this.state.feature.price})
      </li>
    );
  };
}

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures.name
  };
};

export default connect(
  mapStateToProps,
  { addFeature }
)(AdditionalFeature);