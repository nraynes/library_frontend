import logo from './logo.svg';
import './App.css';
import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import InputBase from '@material-ui/core/InputBase'

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <ToolBar>
          <Button color="inherit">Books Dashboard</Button>
          <Button color="inherit">Check In</Button>
          <Button color="inherit">Check Out</Button>
          <InputBase placeholder="Enter ISBN" />
        </ToolBar>
      </AppBar>
    </div>
  );
}

export default App;
