import {createStore} from 'redux';
import {Record} from 'immutable';

const State = Record({
  count: 0,
  operation: '+'
}, 'State');


function doOperation(state, number) {
  var result = 0;
  
  switch (state.operation) {
    case '+':
      result = state.count + number;
      break;
    case '-':
      result = state.count - number;
      break;
    case '*':
      result = state.count * number;
      break;
    case '/':
      result = state.count / number;
      break;
      
    default:
      result = state.count
  }
  
  return state.set('count', result);
}

function changeOperation(state, newOp) {
  return state.set('operation', newOp);
}

function resetState(){
  return new State(); 
 }

function reducer(state, action) {
  state = state || new State();

  switch (action.type) {
    case "DO_OPERATION":
      return doOperation(state, action.number);
    case "CHANGE_OPERATION":
      return changeOperation(state, action.newOp);
    case "RESET_STATE":
       return resetState(); 
    default:
      return state;
  }
}

export function initStore() {
  let middlewares = window.devToolsExtension ? window.devToolsExtension() : f => f;
  return createStore(reducer, null, middlewares);
}
