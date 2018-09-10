import React from 'react';

class Talk extends React.Component {
    render() {
        let talk = this.props.talk;
        return (
            <div className="talk">
                <h4><a href={talk.link} alt={`${talk.title} by ${talk.speaker}`}>{talk.title} by {talk.speaker}</a></h4>
                <h5>{talk.location}</h5>
                <p>{talk.tags.join(', ')}</p>
            </div>
        )
    }
}

export default Talk;