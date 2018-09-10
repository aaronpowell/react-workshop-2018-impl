import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Agenda from './pages/Agenda';
import './App.css';
import glamorous from 'glamorous';

const plainLinkStyle = {
  color: '#fff',
  textDecoration: 'none'
};

const MenuLinkStyle = glamorous.h3({
  display: 'inline-block',
  width: '300px',
  fontSize: '12px',
  margin: '0'
});

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">NDC Sydney</h1>
            <nav>
              <MenuLinkStyle><Link style={plainLinkStyle} to="/">Home</Link></MenuLinkStyle>
              <MenuLinkStyle><Link style={plainLinkStyle} to="/agenda">Agenda</Link></MenuLinkStyle>
              <MenuLinkStyle><Link style={plainLinkStyle} to="/schedule-builder">Schedule Builder</Link></MenuLinkStyle>
            </nav>
          </header>
          <Route exact path="/" component={Home} />
          <Route path="/agenda/:day?" component={Agenda} />
        </div>

      </Router>
    );
  }
}

export default App;
