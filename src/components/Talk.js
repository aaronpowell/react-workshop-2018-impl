import React from 'react';
import glamorous, { A } from 'glamorous';
import PropTypes from 'prop-types';
import { addToSchedule, removeFromSchedule } from '../actions/schedule';
import { connect } from 'react-redux';

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

const Talk = ({ talk, addToSchedule, removeFromSchedule }) => (
    <TalkStyles>
        <h5 style={{ margin: 0 }}>
            {talk.location}
            <button style={{float: 'right'}}
                    onClick={() => addToSchedule(talk)}>
                        Add to schedule
            </button>
            <button style={{float: 'right'}}
                    onClick={() => removeFromSchedule(talk)}>
                        Remove from schedule
            </button>
        </h5>
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
);

Talk.propTypes = {
    talk: PropTypes.shape({
        location: PropTypes.string,
        title: PropTypes.string,
        speaker: PropTypes.string,
        link: PropTypes.string,
    }),
    addToSchedule: PropTypes.func
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
    addToSchedule: (talk) => dispatch(addToSchedule(talk)),
    removeFromSchedule: talk => dispatch(removeFromSchedule(talk))
});

export default connect(mapStateToProps, mapDispatchToProps)(Talk);