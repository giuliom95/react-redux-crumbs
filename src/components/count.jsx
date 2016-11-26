import React, {PropTypes} from 'react';

const STYLE = {color: "black", fontSize: "28px"};

export default function Count({value}) {
  return (
    <span style={STYLE}>{value}</span>
  )
};

Count.propTypes = {
  value: PropTypes.number.isRequired
};
