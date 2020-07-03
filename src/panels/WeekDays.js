import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, PanelHeaderBack, Group, Header, CellButton } from '@vkontakte/vkui';

{/*
const Day = ({name, id, onBackClick}) => (
    // //const [contextOpened, toggleContext] = useState(true);
    // const [day, selectDay] = useState('Понедельник');

    <Panel id = {id}>
        <PanelHeader left={<PanelHeaderBack onClick={onBackClick} data-to='home'/>}>
            {name}
        </PanelHeader>
        <Group header={<Header mode="secondary">Дни недели</Header>}>
            <CellButton >
                Понедельник
            </CellButton>
            <CellButton >
                Вторник
            </CellButton>
            <CellButton >
                Среда
            </CellButton>
            <CellButton>
                Четверг
            </CellButton>
            <CellButton>
                Пятница
            </CellButton>
            <CellButton>
                Суббота
            </CellButton>
        </Group>
    </Panel>
);*/}

const selectDay = (props) => {
    return 0
}

const Day = (props) => {
    return (
        <Panel id={props.id}>
            <PanelHeader left={<PanelHeaderBack onClick={props.onBackClick} data-to='home'/>}>
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
            Если судить по заголовку, сегодня {props.day}!
        </Group>
        </Panel>
    )
}

Day.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired
}

export default Day;