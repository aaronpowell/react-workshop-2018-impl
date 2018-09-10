import React, { Component } from 'react';
import './App.css';
import { fetchAgenda } from './agenda';
import TabControl from './TabControl';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      talks: []
    };
  }

  async componentDidMount() {
    const talks = await fetchAgenda();

    this.setState({
      loading: false,
      talks
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">NDC Sydney Agenda</h1>
        </header>
          {
            this.state.loading ?
              <p className="App-intro">Loading...</p> :
              <TabControl talks={this.state.talks} />
          }
      </div>
    );
  }
}

export default App;
