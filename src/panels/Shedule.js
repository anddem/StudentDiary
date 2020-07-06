import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, PanelHeaderBack, Group, CellButton, View, Header } from '@vkontakte/vkui';
import Icon24Chevron from '@vkontakte/icons/dist/24/chevron';

const daysID = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];


const Days = ({go}) => {
    const weekDays = days.map((day, index) => 
    <CellButton
        before={<Today day={daysID[index]}/>}
        key={daysID[index]}
        onClick={go}
        data-to={daysID[index]}>
        {day}
    </CellButton>
    );

    return (
        <Group header={<Header mode='secondary'>Дни недели</Header>}>
            {weekDays}
        </Group>
    );
}

const Today = ({day}) => {
    const today = new Date();

    return (
        day === daysID[today.getDay()+1] ? <Icon24Chevron/> : null
    )
}
const Day = ({id, day, onBackClick}) => {
    return (
        <Panel id={id}>
            <PanelHeader left={<PanelHeaderBack onClick={onBackClick} data-to='main'/>}>
                {day}
            </PanelHeader>

            Тело панели {day}
        </Panel>
    )
}

const Shedule = ({id}) => {
    const [activePanel, setActivePanel] = useState('main');

    const go = e => {
        setActivePanel(e.currentTarget.dataset.to)
    }

    return (
        <View id={id} activePanel={activePanel}>
            <Panel id='main'>
                <PanelHeader>
                    Расписание
                </PanelHeader>

                <Days go={go}/>
            </Panel>
            <Day id='monday' day='Понедельник' onBackClick={go}/>
            <Day id='tuesday' day='Вторник' onBackClick={go}/>
            <Day id='wednesday' day='Среда' onBackClick={go}/>
            <Day id='thursday' day='Четверг' onBackClick={go}/>
            <Day id='friday' day='Пятница' onBackClick={go}/>
            <Day id='saturday' day='Суббота' onBackClick={go}/>
        </View>
    )
}

Shedule.propTypes = {
    id: PropTypes.string.isRequired
}

export default Shedule;