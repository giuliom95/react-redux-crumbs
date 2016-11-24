import React, {PropTypes} from 'react';

const STYLE_SIGN = {
  fontSize: '30px',
  marginRight: '5px'
};

const STYLE_INPUT = {
  width: '200px',
  height: '40px',
  color: 'black',
  fontSize: '30px',
  border: '1px solid black',
};

const STYLE_BUTTON = {
  width: '40px',
  height: '44px',
  border: '1px solid black',
  fontSize: '30px',
  color: 'black',
  padding: '3px',
  marginLeft: '3px',
  cursor: 'pointer',
  background: 'none'
};

const STYLE_OPERATIONS_BAR = {
  marginTop: '15px'
};


export default class FormData extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: ""};
    this.Input = null;
    this.OpField = null;
    this.currentOpFunc = null;
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  handleSubmit(event) {
    let number = parseInt(this.state.text);
    if (Number.isInteger(number)) {
      this.currentOpFunc(number);
      this.setState({text: ""});
    }
    event.preventDefault();
  }

  changeOperation(event, op) {
    //Changes the sign of the current operation.
    this.OpField.innerHTML = op;
    
    switch (op) {
      case '+':
        this.currentOpFunc = this.props.addNumber;
      break;
      case '-':
        this.currentOpFunc = this.props.subtractNumber;
      break;
      case '*': 
        this.currentOpFunc = this.props.multiplyNumber;
      break;
    }
  }

  componentDidMount() {
    this.Input.focus();
    this.changeOperation(null, '+');
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <span style={STYLE_SIGN} ref={opField => this.OpField = opField}>+</span>
          <input type="text"
            onChange={event => this.handleChange(event)}
            value={this.state.text}
            ref={input => this.Input = input}
            style={STYLE_INPUT}/>
                 
          <button type="submit" style={STYLE_BUTTON}>=</button>
        </div>
        <div style={STYLE_OPERATIONS_BAR}>
          <button 
            type="button" 
            style={STYLE_BUTTON}
            onClick={event => this.changeOperation(event, '+')}
          >+</button>
          <button 
            type="button" 
            style={STYLE_BUTTON}
            onClick={event => this.changeOperation(event, '-')}
          >-</button>
          <button 
            type="button"
            style={STYLE_BUTTON}
            onClick={event => this.changeOperation(event, '*')}
          >*</button>
        </div>
      </form>
    )
  }
}

FormData.propTypes = {
  addNumber: PropTypes.func.isRequired,
  subtractNumber: PropTypes.func.isRequired,
  multiplyNumber: PropTypes.func.isRequired
};
