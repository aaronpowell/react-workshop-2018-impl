import React from 'react';
import TabControl from '../components/TabControl';
import DayAgenda from '../components/DayAgenda';

class Agenda extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            talks: []
        };
    }

    async componentDidMount() {
        const talks = await this.props.fetchAgenda();
        this.setState({
          loading: false,
          talks
        });
    }

    render() {
        if (this.state.loading) {
            return <p className="App-intro">Loading...</p>;
        }

        const wednesday = this.state.talks.filter(t => t.day === "wednesday");
        const thursday = this.state.talks.filter(t => t.day === "thursday");
        const friday = this.state.talks.filter(t => t.day === "friday");
    
        return (
          <TabControl tabs={[
            { header: 'Wednesday', talks: wednesday },
            { header: 'Thursday', talks: thursday },
            { header: 'Friday', talks: friday }
          ]}
          day={this.props.match.params.day || ''}>
            {tab => (
              <div>
                <DayAgenda talks={tab.talks} />
              </div>
            )}
          </TabControl>
        );
    }
}

export default Agenda;