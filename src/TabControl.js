import React from 'react';
import TabHeader from './TabHeader';
import DayAgenda from './DayAgenda';

class TabControl extends React.Component {
    render() {
        const wednesday = this.props.talks.filter(t => t.day === "wednesday");
        const thursday = this.props.talks.filter(t => t.day === "thursday");
        const friday = this.props.talks.filter(t => t.day === "friday");

        return (
            <div className="tab-control">
                <div>
                    <TabHeader label="Wednesday" />
                    <TabHeader label="Thursday" />
                    <TabHeader label="Friday" />
                </div>
                <div className="body">
                    <div className="tab-item wednesday">
                        <DayAgenda key="wed" talks={wednesday} />
                    </div>
                    <div className="tab-item thursday">
                        <DayAgenda key="thurs" talks={thursday} />
                    </div>
                    <div className="tab-item friday">
                        <DayAgenda key="fri" talks={friday} />
                    </div>
                </div>
            </div>
        );
    }
}

export default TabControl;