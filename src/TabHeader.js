import React from 'react';

class TabHeader extends React.Component {
    render() {
        return (
            <h2>{this.props.label}</h2>
        )
    }
}

export default TabHeader;