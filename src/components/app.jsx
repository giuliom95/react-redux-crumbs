import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import View from './view';
import {doOperationAction, changeOperationAction, resetStateAction} from '../actions';


function mapStateToProps(reduxState) {
  return {
    state: reduxState
  }
}

function mapDispatchToProps(dispatch) {
  return {
    doOperation: bindActionCreators(doOperationAction, dispatch),
    changeOperation: bindActionCreators(changeOperationAction, dispatch),
    resetState: bindActionCreators(resetStateAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
