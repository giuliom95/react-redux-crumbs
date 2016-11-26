import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import View from './view';
import {doOperationAction, changeOperationAction} from '../actions';


function mapStateToProps(reduxState) {
  return {
    state: reduxState
  }
}

function mapDispatchToProps(dispatch) {
  return {
    doOperation: bindActionCreators(doOperationAction, dispatch),
    changeOperation: bindActionCreators(changeOperationAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
