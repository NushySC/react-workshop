import React, { Component } from 'react';

import RadioGroup from './RadioGroup'
import './App.css';

class App extends Component {
  state = {
    value: 'Second'
  }

  onChange = (value) => {
    this.setState({
      value
    })
  }

  render() {
    return (
      <div className="App">
        <h5>Value: {this.state.value}</h5>
        <RadioGroup onChange={this.onChange} value={this.state.value}>
          <RadioGroup.Option value="First" />
          <RadioGroup.Option value="Second" />
          <RadioGroup.Option value="Third" />
        </RadioGroup>
      </div>
    );
  }
}

export default App;
