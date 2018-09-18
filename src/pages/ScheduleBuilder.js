import React from 'react';
import Talk from '../components/Talk'

const ScheduleBuilder = ({ schedule }) => (
    <div>
        <h1>Schedule Builder!</h1>
        {schedule.map(talk => <Talk talk={talk} key={talk.title} />)}
    </div>

);

export default ScheduleBuilder;