import React from 'react';
import TabHeader from './TabHeader';

class TabControl extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedTab: { header: '', talks: [] }
        };
    }

    componentDidMount() {
        this.setState({
            selectedTab: this.props.tabs[0]
        });
    }

    selectTab = tab => {
        this.setState({
            selectedTab: tab
        })
    }

    render() {
        return (
            <div className="tab-control">
                <div>
                    {this.props.tabs.map(tab =>
                        <TabHeader
                            key={tab.header}
                            selected={() => this.selectTab(tab)}
                            label={tab.header}/>
                        )}
                </div>
                <div className="body">
                    {this.props.children(this.state.selectedTab)}
                </div>
            </div>
        );
    }
}

export default TabControl;