import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState, useRef} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import BookList from './components/BookList'
import Checkin from './components/Checkin'
import Checkout from './components/Checkout'
import Sha256 from "./Sha256.js";

function App() {

  const [userId, setUserId] = useState({});
  const [books, setBooks] = useState([]);
  const history = useHistory();
  const user = useRef();
  const pass = useRef();
  useEffect(() => {
    if (Object.keys(userId) === 0) {
      history.push('/')
    }
    if(books.length === 0) {
      fetch('http://localhost:1000/api/books')
        .then(response => response.json())
        .then(data => setBooks(data));
    }
  });

  function login (username, password) {
    let hash = Sha256.hash(password);
    console.log(username, hash)
    fetch(`http://localhost:1000/users/${username}/${hash}`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(Object.keys(data) > 0){
        setUserId(data)
        history.push('/dashboard')
      } else {
        alert('username and password combination not found')
      }
    })
  }

  function create (username, password) {
    let hash = Sha256.hash(password);
    fetch(`http://localhost:1000/users/create/${username}/${hash}`)
    .then(res=>res.json())
    .then(data=>{
      alert('successfully created account, trying logging in')
    })
    .catch(err=>alert('error creating account, try again'))
  }
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
          <Checkout/>
        </Route>
        <Route path="/checkin">
          <Checkin />
        </Route>
        <Route path="/dashboard">
          <BookList books={books} />
        </Route>
        <Route path="/">
          <p>Username: </p>
          <input ref={user}></input><br></br>
          <p>Password: </p>
          <input ref={pass}></input><br></br><br></br>
          <button onClick={()=>{login(user.current.value, pass.current.value)}}>Login</button><button onClick={()=>{create(user.current.value, pass.current.value)}}>Create Account</button>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
