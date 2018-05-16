import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Survey from './Survey';
import SurveyConstructor from './SurveyConstructor';
import './App.css';

class App extends Component {
  render() {
      return (
          <MuiThemeProvider>
            <Paper zDepth={2} className="app" >
              {/* <Survey id="1"/>*/ }
              <SurveyConstructor/>
            </Paper>
          </MuiThemeProvider>
      );
  }
}

export default App;
