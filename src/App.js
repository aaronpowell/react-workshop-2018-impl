import React, { Component } from 'react';
import './App.css';
import { fetchAgenda } from './agenda';
import TabControl from './TabControl';
import DayAgenda from './DayAgenda';

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

  renderTalks(talks) {
    const wednesday = talks.filter(t => t.day === "wednesday");
    const thursday = talks.filter(t => t.day === "thursday");
    const friday = talks.filter(t => t.day === "friday");

    return (
      <TabControl tabs={[
        { header: 'Wednesday', talks: wednesday },
        { header: 'Thursday', talks: thursday },
        { header: 'Friday', talks: friday }
      ]}>
        {tab => (
          <div className="tab-item wednesday">
            <DayAgenda talks={tab.talks} />
          </div>
        )}
      </TabControl>
    );
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
              this.renderTalks(this.state.talks)
          }
      </div>
    );
  }
}

export default App;
