import React from 'react';
import { H2 } from 'glamorous';

class TabHeader extends React.Component {
    render() {
        return (
            <H2
                display="inline-block"
                width="300px"
                onClick={this.props.selected}
            >{this.props.label}</H2>
        )
    }
}

export default TabHeader;