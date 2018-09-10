import React from 'react';
import TabHeader from './TabHeader';

class TabControl extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedTab: { header: '', talks: [] }
        };
    }

    render() {
        const selectedTab = this.props.tabs.filter(t => t.header.toLowerCase() === this.props.day.toLowerCase())[0] || this.props.tabs[0];

        return (
            <div className="tab-control">
                <div>
                    {this.props.tabs.map(tab =>
                        <TabHeader
                            key={tab.header}
                            label={tab.header}/>
                        )}
                </div>
                <div className="body">
                    {this.props.children(selectedTab)}
                </div>
            </div>
        );
    }
}

export default TabControl;