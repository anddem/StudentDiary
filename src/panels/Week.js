import React from 'react';
import Day from './WeekDays';
import PropTypes from 'prop-types';

const Week = ({id, go}) => (
        <Day id='Monday' name='Понедельник' onBackClick={go} data-to='home'/>
);

Week.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired
}

export default Week;