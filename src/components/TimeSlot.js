import React from 'react';
import Talk from './Talk';

class TimeSlot extends React.Component {
    render() {
        return (
            <div className="timeSlot">
                <h3>{this.props.timeSlot}</h3>
                {this.props.talks.map(t =>
                    <Talk key={t.title}
                          talk={t}
                          addToSchedule={this.props.addToSchedule}
                          removeFromSchedule={this.props.removeFromSchedule} />)}
            </div>
        );
    }
}

export default TimeSlot;