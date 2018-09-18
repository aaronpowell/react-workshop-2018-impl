import React from 'react';
import Talk from './Talk';

const TimeSlot = ({ timeSlot, talks }) =>(
    <div className="timeSlot">
        <h3>{timeSlot}</h3>
        {talks.map(t =>
            <Talk key={t.title}
                  talk={t} />)}
    </div>
);

export default TimeSlot;