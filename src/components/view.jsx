import React, {PropTypes} from 'react';
import FormData from './form-data';
import Count from './count';
import OperationLabel from './operationLabel';

const STYLE = {
  margin: "20px"
};

export default function View({state, doOperation, changeOperation}) {
  return (
    <div style={STYLE}>
      <Count value={state.count}/>
      <OperationLabel operation={state.operation}/>
      <FormData doOperation={doOperation} changeOperation={changeOperation}/>
    </div>
  )
}

View.propTypes = {
  state: PropTypes.object.isRequired,
  doOperation: PropTypes.func.isRequired,
  changeOperation: PropTypes.func.isRequired
};


