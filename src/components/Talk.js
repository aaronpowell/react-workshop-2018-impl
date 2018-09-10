import React from 'react';
import glamorous, { A } from 'glamorous';

const TalkStyles = glamorous.div({
    display: 'inline-block',
    height: '160px',
    width: '260px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    margin: '5px',
    padding: '10px',
    textAlign: 'left',
    ':hover': {
        background: 'linear-gradient(to bottom right, #ff029a 0%, #00aeef 100%)',
        color: '#fff !important',
        border: '1px solid white'
    }
});

const TalkTitleStyles = glamorous.h4({
    height: '80px'
});

const TagStyles = glamorous.p({
    height: '80px',
    fontSize: '12px'
});

class Talk extends React.Component {
    render() {
        let talk = this.props.talk;
        return (
            <TalkStyles>
                <h5 style={{ margin: 0 }}>{talk.location}</h5>
                <TalkTitleStyles>
                    <A
                        color="#000"
                        textDecoration="none"
                        href={talk.link}
                        alt={`${talk.title} by ${talk.speaker}`}
                    >{talk.title}</A>
                </TalkTitleStyles>
                <TagStyles>{talk.speaker}</TagStyles>
            </TalkStyles>
        )
    }
}

export default Talk;