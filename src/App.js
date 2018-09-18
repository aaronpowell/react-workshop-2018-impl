import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Agenda from './pages/Agenda';
import ScheduleBuilder from './pages/ScheduleBuilder';
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
          <Route path="/agenda/:day?"
                 render={(props) =>
                    <Agenda day={props.match.params.day} />
                    } />
          <Route path="/schedule-builder/:day?"
                 render={(props) =>
                      <ScheduleBuilder
                          day={props.match.params.day} />
                      }
            />
        </div>

      </Router>
    );
  }
}

export default App;
