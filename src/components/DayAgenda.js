import React from 'react';
import TimeSlot from './TimeSlot';

const DayAgenda = ({ talks }) => {
    let timeSlots = {};
    for(let i = 0; i < talks.length; i++) {
        let talk = talks[i];
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
                            talks={timeSlots[ts]} />)}
        </div>
    );
}

export default DayAgenda;