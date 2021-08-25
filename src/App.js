import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <ToolBar>
          <Button component={Link} to="/" color="inherit">Books Dashboard</Button>
          <Button component={Link} to="/checkin" color="inherit">Check In</Button>
          <Button component={Link} to="/checkout" color="inherit">Check Out</Button>
        </ToolBar>
      </AppBar>
      <Switch>
        <Route path="/checkout">Hello check out!</Route>
        <Route path="/checkin">Hello check in!</Route>
        <Route path="/">Hello dashboard.</Route>
      </Switch>
    </div>
  );
}

export default App;
