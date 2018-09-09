import React, { Component } from 'react';
import './App.css';
import { fetchAgenda } from './agenda';
import AgendaDay from './AgendaDay';

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
    function createTalks(talks) {
      const talksByDay = {
        wednesday: talks.filter(t => t.day === "wednesday"),
        thursday: talks.filter(t => t.day === "thursday"),
        friday: talks.filter(t => t.day === "friday")
      };

      return (
        <div class="App-intro">
          <AgendaDay talks={talksByDay.wednesday} dayLabel="Wednesday" />
          <AgendaDay talks={talksByDay.thursday} dayLabel="Thursday" />
          <AgendaDay talks={talksByDay.friday} dayLabel="Friday" />
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">NDC Sydney Agenda</h1>
        </header>
          {
            this.state.loading ?
              <p className="App-intro">Loading...</p> :
              createTalks(this.state.talks)
          }
      </div>
    );
  }
}

export default App;
