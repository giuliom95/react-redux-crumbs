import React, {PropTypes} from 'react';
import FormData from './form-data';
import Count from './count';
import OperationLabel from './operationLabel';

const STYLE = {
  margin: "20px",
  width: "245px"
};

export default function View({state, doOperation, changeOperation, resetState}) {
  return (
    <div style={STYLE}>
      <div>
          <Count value={state.count}/>
          <OperationLabel operation={state.operation}/>
      </div>
      <FormData 
        doOperation={doOperation} 
        changeOperation={changeOperation} 
        resetState={resetState}/>
    </div>
  )
}

View.propTypes = {
  state: PropTypes.object.isRequired,
  doOperation: PropTypes.func.isRequired,
  changeOperation: PropTypes.func.isRequired,
  resetState: PropTypes.func.isRequired
};


