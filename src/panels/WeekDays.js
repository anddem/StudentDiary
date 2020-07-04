import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Group, Header, CellButton } from '@vkontakte/vkui';

const selectDay = (props) => {
    return 0
}

const Day = (props) => {
    return (
        <Panel id={props.id}>
            <PanelHeader>
                {props.day}
            </PanelHeader>
        <Group>
            <CellButton>
                Понедельник
            </CellButton>
            <CellButton onClick={selectDay('Вторник')}>
                Вторник
            </CellButton>
            <CellButton onClick={selectDay('Среда')}>
                Среда
            </CellButton>
            <CellButton onClick={selectDay('Четверг')}>
                Четверг
            </CellButton>
            <CellButton onClick={selectDay('Пятница')}>
                Пятница
            </CellButton>
            <CellButton onClick={selectDay('Суббота')}>
                Суббота
            </CellButton>
        </Group>
        <Group>
            <Header>
                Если судить по заголовку, сегодня {props.day}!
            </Header>
        </Group>
        <Group>
        <CellButton onClick={props.go} data-toview='today' data-topanel='home'>
            Перейти на View 1
        </CellButton>
        </Group>
        </Panel>
    )
}

Day.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired
}

export default Day;