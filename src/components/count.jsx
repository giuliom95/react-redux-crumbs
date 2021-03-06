import React, {PropTypes} from 'react';

const STYLE = {
    color: "black", 
    fontSize: "28px",
    float: "left"
};

export default function Count({value}) {
  return (
    <div style={STYLE}>{value}</div>
  )
};

Count.propTypes = {
  value: PropTypes.number.isRequired
};
