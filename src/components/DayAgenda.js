import React from 'react';
import TimeSlot from './TimeSlot';

class DayAgenda extends React.Component {
    render() {
        let timeSlots = {};
        for(let i = 0; i < this.props.talks.length; i++) {
            let talk = this.props.talks[i];
            let timeSlot = `${talk.startTime.hour}:${talk.startTime.minutes} - ${talk.endTime.hour}:${talk.endTime.minutes}`
            if (!timeSlots[timeSlot]) {
                timeSlots[timeSlot] = [];
            }
            timeSlots[timeSlot].push(talk);
        }

        return (
            <div>
                {Object.keys(timeSlots).map(ts => 
                    <TimeSlot key={ts}
                              timeSlot={ts}
                              talks={timeSlots[ts]}
                              addToSchedule={this.props.addToSchedule} />)}
            </div>
        );
    }
}

export default DayAgenda;