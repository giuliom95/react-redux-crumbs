import React, {PropTypes} from 'react';

const STYLE = {
    color: "black", 
    fontSize: "28px",
    float: "right"
};

export default function OperationLabel({operation}) {
  return (
    <div style={STYLE}>{operation}</div>
  )
};

OperationLabel.propTypes = {
  operation: PropTypes.string.isRequired
};
