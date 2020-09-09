import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions'

const AddedFeature = props => {

  // removeFeature = e => {
  //   e.preventDefault();
  //   this.props.removeFeature(this.state.feature);
  // };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => props.removeFeature(props.feature)} className="button">X</button>
      {props.feature.name}
    </li >
  );
};

// const mapStateToProps = state => {
//   return {
//     additionalFeatures: state.additionalFeatures.name,
//   };
// };

export default connect(() => { }, { removeFeature })(AddedFeature);
