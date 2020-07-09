import React from 'react'
import {Panel, PanelHeader, PanelHeaderBack, Group, CellButton} from '@vkontakte/vkui'

import Form from './Form'

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
export const Day = ({id, day, go, week}) => {

    return (
        <Panel id={id}>
            <PanelHeader left={<PanelHeaderBack onClick={go} data-to='main'/>}>
                {day}
            </PanelHeader>
            <Form day={id} go={go}/>
        </Panel>
    )
}