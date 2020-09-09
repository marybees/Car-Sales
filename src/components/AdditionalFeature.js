import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../actions'

const AdditionalFeature = props => {

  // addFeature = e => {
  //   e.preventDefault();
  //   this.props.addFeature(this.state.feature);
  // };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.addFeature(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// const mapStateToProps = state => {
//   return {
//     additionalFeatures: state.additionalFeatures.name
//   };
// };

export default connect(() => { }, { addFeature })(AdditionalFeature);