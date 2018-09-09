import React from 'react';

class AgendaDay extends React.Component {
    render() {
        return (
        <div>
          <h2>{this.props.dayLabel}</h2>
          <ul>
            { this.props.talks.map(t => (
              <li>
                {`${t.startTime.hour}:${t.startTime.minutes} - ${t.endTime.hour}:${t.endTime.minutes}: ${t.title}`}
              </li>
            )) }
          </ul>
        </div>
        );
    }
}

export default AgendaDay;