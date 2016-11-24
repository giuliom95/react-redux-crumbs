import React, {PropTypes} from 'react';
import FormData from './form-data';
import Count from './count';

const STYLE = {
  margin: "20px"
};

export default function View({state, addNumber, subtractNumber}) {
  return (
    <div style={STYLE}>
      <Count value={state.count}/>
      <FormData addNumber={addNumber} subtractNumber={subtractNumber}/>
    </div>
  )
}

View.propTypes = {
  state: PropTypes.object.isRequired,
  addNumber: PropTypes.func.isRequired,
  subtractNumber: PropTypes.func.isRequired
};


