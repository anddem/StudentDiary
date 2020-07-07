import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Root from '@vkontakte/vkui/dist/components/Root/Root'
import Week from './Week'

const Shedule = ({id}) => {
    const [activeView, setActiveView] = useState('week')

    const go = e => {
        setActiveView(e.currentTarget.dataset.to)
    }

    return (
        <Root id={id} activeView={activeView}>
            <Week id='week'/>
        </Root>
    )
}

Shedule.propTypes = {
    id: PropTypes.string.isRequired
}

export default Shedule;