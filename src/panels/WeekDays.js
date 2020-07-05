import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Group, CellButton } from '@vkontakte/vkui';
import Title from '@vkontakte/vkui/dist/components/Typography/Title/Title';

const Day = (props) => {
    return (
        <CellButton onClick={props.onClick} data-day={props.day}>
            {props.day}
        </CellButton>
    )
}

const LastPressed = day => {
    return (
        <Group>
            <Title level='1' weight='semibold'>
                {day ? day : ''}
            </Title>
        </Group>
    )
}

const WorkDays = onClick => {
    return (
        <Group>
            <Day onClick={onClick} day='Понедельник'/>
            <Day onClick={onClick} day='Вторник'/>
            <Day onClick={onClick} day='Среда'/>
            <Day onClick={onClick} day='Четверг'/>
            <Day onClick={onClick} day='Пятница'/>
            <Day onClick={onClick} day='Суббота'/>
        </Group>
    )
}

const Days = (props) => {
    return (
        <Panel id={props.id}>
            <PanelHeader>
                {props.day}
            </PanelHeader>
        <Group>
            <Day onClick={props.setLPD} day='Понедельник'/>
            <Day onClick={props.setLPD} day='Вторник'/>
            <Day onClick={props.setLPD} day='Среда'/>
            <Day onClick={props.setLPD} day='Четверг'/>
            <Day onClick={props.setLPD} day='Пятница'/>
            <Day onClick={props.setLPD} day='Суббота'/>
        </Group>
        <Group>
            <Title level='1' weight='semibold'>
                {props.lastPD ? `В прошлый раз выбрали ${props.lastPD}` : ''}
            </Title>
        </Group>
        </Panel>
    )
}

Days.propTypes = {
    id: PropTypes.string.isRequired,
    setLPD: PropTypes.func.isRequired
}

export default Days;