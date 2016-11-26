import React, {PropTypes} from 'react';

const STYLE = {color: "black", fontSize: "28px"};

export default function OperationLabel({operation}) {
  return (
    <span style={STYLE}>{operation}</span>
  )
};

OperationLabel.propTypes = {
  operation: PropTypes.string.isRequired
};
