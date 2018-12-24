import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import NoteDetails from './components/notes/NoteDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AddNote from './components/notes/AddNote';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/note/:id' component={NoteDetails} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/addnote' component={AddNote} />
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
