import React from 'react';
import { H2 } from 'glamorous';
import { Link } from 'react-router-dom';

class TabHeader extends React.Component {
    render() {
        return (
            <Link to={`/agenda/${this.props.label.toLowerCase()}`}>
                <H2
                    display="inline-block"
                    width="300px"
                    color="#000"
                >{this.props.label}</H2>
            </Link>
        )
    }
}

export default TabHeader;