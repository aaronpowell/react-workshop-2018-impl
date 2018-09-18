import React from 'react';
import TabControl from '../components/TabControl';
import DayAgenda from '../components/DayAgenda';

class ScheduleBuilder extends React.Component {
    async componentDidMount() {
        await this.props.fetchAgenda();
    }

    render() {
        if (!this.props.loaded) {
            return <p className="App-intro">Loading...</p>;
        }

        const wednesday = this.props.schedule.filter(t => t.day === "wednesday");
        const thursday = this.props.schedule.filter(t => t.day === "thursday");
        const friday = this.props.schedule.filter(t => t.day === "friday");
    
        return (
          <TabControl tabs={[
            { header: 'Wednesday', talks: wednesday },
            { header: 'Thursday', talks: thursday },
            { header: 'Friday', talks: friday }
          ]}
          headerPath="/schedule-builder"
          day={this.props.day || ''}>
            {tab => (
              <div>
                <DayAgenda talks={tab.talks} />
              </div>
            )}
          </TabControl>
        );
    }
}

export default ScheduleBuilder;