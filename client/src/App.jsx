import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Survey from './Survey';
import './App.css';

class App extends Component {
  render() {
      return (
          <MuiThemeProvider>
            <div className="App">
              <Survey id="1"/>
            </div>
          </MuiThemeProvider>
      );
  }
}

export default App;
