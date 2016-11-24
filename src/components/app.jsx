import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import View from './view';
import {addNumberAction, subtractNumberAction, multiplyNumberAction} from '../actions';


function mapStateToProps(reduxState) {
  return {
    state: reduxState
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNumber: bindActionCreators(addNumberAction, dispatch),
    subtractNumber: bindActionCreators(subtractNumberAction, dispatch),
    multiplyNumber: bindActionCreators(multiplyNumberAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
