import React, {PropTypes} from 'react';
import FormData from './form-data';
import Count from './count';

const STYLE = {
  margin: "20px"
};

export default function View({state, addNumber, subtractNumber, multiplyNumber}) {
  return (
    <div style={STYLE}>
      <Count value={state.count}/>
      <FormData addNumber={addNumber} subtractNumber={subtractNumber} multiplyNumber={multiplyNumber}/>
    </div>
  )
}

View.propTypes = {
  state: PropTypes.object.isRequired,
  addNumber: PropTypes.func.isRequired,
  subtractNumber: PropTypes.func.isRequired,
  multiplyNumber: PropTypes.func.isRequired
};


