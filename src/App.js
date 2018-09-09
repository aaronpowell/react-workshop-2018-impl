import React, { Component } from 'react';
import './App.css';
import { fetchAgenda } from './agenda';

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

      const wednesdayElement = (
        <div>
          <h2>Wednesday</h2>
          <ul>
            { talksByDay.wednesday.map(t => (
              <li>
                {`${t.startTime.hour}:${t.startTime.minutes} - ${t.endTime.hour}:${t.endTime.minutes}: ${t.title}`}
              </li>
            )) }
          </ul>
        </div>
      );

      const thursdayElement = (
        <div>
          <h2>Thursday</h2>
          <ul>
            { talksByDay.thursday.map(t => (
              <li>
                {`${t.startTime.hour}:${t.startTime.minutes} - ${t.endTime.hour}:${t.endTime.minutes}: ${t.title}`}
              </li>
            )) }
          </ul>
        </div>
      );

      const fridayElement = (
        <div>
          <h2>Friday</h2>
          <ul>
            { talksByDay.friday.map(t => (
              <li>
                {`${t.startTime.hour}:${t.startTime.minutes} - ${t.endTime.hour}:${t.endTime.minutes}: ${t.title}`}
              </li>
            )) }
          </ul>
        </div>
      );

      return (
        <div class="App-intro">
          {wednesdayElement}
          {thursdayElement}
          {fridayElement}
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
