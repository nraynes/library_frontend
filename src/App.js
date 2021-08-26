import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import BookList from './components/BookList'
import Checkin from './components/Checkin'
import Checkout from './components/Checkout'
function App() {

  const [userId, setUserId] = useState("");
  const [books, setBooks] = useState([]);

  return (
    <div className="App">
      <AppBar position="static">
        <ToolBar>
          <Button component={Link} to="/dashboard" color="inherit">Books Dashboard</Button>
          <Button component={Link} to="/checkin" color="inherit">Check In</Button>
          <Button component={Link} to="/checkout" color="inherit">Check Out</Button>
        </ToolBar>
      </AppBar>
      <Switch>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/checkin">
          <Checkin />
        </Route>
        <Route path="/dashboard">
          <BookList books={books} />
        </Route>
        <Route path="/">
          Please log in.
        </Route>
      </Switch>
      <a onClick={() => {setBooks([{title: "Hello world!", author: "Deez nutz"}, {title: "Goodbye cruel world!", author: "Michael Pingleton"}])}}>Add titles</a>
    </div>
  );
}

export default App;
