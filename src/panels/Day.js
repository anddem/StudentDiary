import React from 'react'
import {Panel, PanelHeader, PanelHeaderBack, Group, CellButton} from '@vkontakte/vkui'

import CheckShedule from './GeneralList'

const daysID = ['sunday' ,'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

export const Days = ({go}) => {
    const weekDays = days.map((day, index) => 
    <CellButton
        key={daysID[index+1]}
        onClick={go}
        data-to={daysID[index+1]}>
        {day}
    </CellButton>
    );

    return (
        <Group>
            {weekDays}
        </Group>
    );
}
export const Day = ({id, day, go, db}) => {

    return (
        <Panel id={id}>
            <PanelHeader left={<PanelHeaderBack onClick={go} data-to='main'/>}>
                {day}
            </PanelHeader>
            <CheckShedule db={db} day={day}/>
        </Panel>
    )
}