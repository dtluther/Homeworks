import React from 'react';

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = { num1: "", num2:  "", result: 0 };
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);
  }

  setNum1(event) {
    event.preventDefault();
    this.setState({ num1: parseInt(event.target.value) });
  }

  setNum2(event) {
    event.preventDefault();
    this.setState({ num2: parseInt(event.target.value) });
  }

  add(event) {
    event.preventDefault();
    let result = this.state.result;
    result = this.state.num1 + this.state.num2;
    this.setState({ result });
  }

  subtract(event) {
    event.preventDefault();
    let result = this.state.result;
    result = this.state.num1 - this.state.num2;
    this.setState({ result });
  }

  multiply(event) {
    event.preventDefault();
    let result = this.state.result;
    result = this.state.num1 * this.state.num2;
    this.setState({ result });
  }

  divide(event) {
    event.preventDefault();
    let result = this.state.result;
    result = this.state.num1 / this.state.num2;
    this.setState({ result });
  }

  clear(event) {
    event.preventDefault();
    // let [num1, num2, result] = ["", "", 0];
    this.setState({ num1: "", num2: "", result: 0 });
  }



  render() {
    const { num1, num2, result } = this.state;
    return (
      <div>
        <h1>{result}</h1>
        <input onChange={this.setNum1} defaultValue={num1}/>
        <input onChange={this.setNum2} defaultValue={num2}/>
        <button onClick={this.clear}>Clear</button>
        <br/>
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>*</button>
        <button onClick={this.divide}>/</button>
      </div>
    );
  }
}

export default Calculator;
