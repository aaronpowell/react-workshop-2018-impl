import React from 'react';
import TabControl from '../components/TabControl';
import DayAgenda from '../components/DayAgenda';
import { connect } from 'react-redux';
import { fetchTalks } from '../actions/talks';

class ScheduleBuilder extends React.Component {
    componentDidMount() {
        if (!this.props.loaded) {
          this.props.fetchAgenda();
        }
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

const mapStateToProps = (state) => ({
  schedule: state.schedule,
  loaded: state.loaded
});

const mapDispatchToProps = (dispatch) => ({
  fetchAgenda: fetchTalks(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleBuilder);