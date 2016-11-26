import React, {PropTypes} from 'react';

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

const STYLE_TEXT_DIV = {
  clear: 'left'
};

const STYLE_OPERATIONS_DIV = {
  marginTop: '15px'
};



export default class FormData extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: ""};
    this.Input = null;
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  handleSubmit(event) {
    let number = parseInt(this.state.text);
    if (Number.isInteger(number)) {
      this.props.doOperation(number);
      this.setState({text: ""});
    }
    event.preventDefault();
  }
    
  changeOperation(event, operation) {
    this.props.changeOperation(operation);
    event.preventDefault();
    this.Input.focus();
  }
  
  componentDidMount() {
    this.Input.focus();
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div style={STYLE_TEXT_DIV}>
          <input type="text"
            onChange={event => this.handleChange(event)}
            value={this.state.text}
            ref={input => this.Input = input}
            style={STYLE_INPUT}/>
                 
          <button type="submit" style={STYLE_BUTTON}>=</button>
        </div>
        <div style={STYLE_OPERATIONS_DIV}>
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
  doOperation: PropTypes.func.isRequired,
  changeOperation: PropTypes.func.isRequired
};
