import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, PanelHeaderBack, Group, CellButton, View, Button } from '@vkontakte/vkui';
import {FormLayout, Select, Input, List} from '@vkontakte/vkui'
import Icon24Chevron from '@vkontakte/icons/dist/24/chevron';
import Icon24Done from '@vkontakte/icons/dist/24/done'

const daysID = ['sunday' ,'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

const Days = ({go}) => {
    const weekDays = days.map((day, index) => 
    <CellButton
        before={<Today day={daysID[index+1]}/>}
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

const Pair = ({number}) => {

}

const Today = ({day}) => {
    const today = new Date();

    return (
        day === daysID[today.getDay()] ? <Icon24Chevron/> : null
    )
}
const Day = ({id, day, go, week}) => {

    var store = require('store');

    if (!store.get({id})) {
        store.set({id})
    }

    const saveToStore = (e) => {
        store.set({id}, {})
    }

    const foo = () => {
        console.log(document.getElementById('choiceWeek').value)
    }

    return (
        <Panel id={id}>
            <PanelHeader left={<PanelHeaderBack onClick={go} data-to='main'/>}>
                {day}
            </PanelHeader>
            <FormLayout>
                <Select id="choiceWeek" placeholder='Выберите неделю'>
                    <option value='fst'>Первая</option>
                    <option value='snd'>Вторая</option>
                    <option value='all'>Обе</option>
                </Select>

                <Button mode='commerce' size='xl' onClick={foo}>Сохранить изменения</Button>
            </FormLayout>
        </Panel>
    )
}

const Shedule = ({id}) => {
    const [activePanel, setActivePanel] = useState('main');
    const [day, lastDay] = useState(null)
    const [week, setWeek] = useState('');

    const go = e => {
        if (e.currentTarget.dataset.from) {
            lastDay(e.currentTarget.dataset.from)
        }
        if (e.currentTarget.dataset.week) {
            setWeek(e.currentTarget.dataset.week)
        }
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
            <Day id='monday' day='Понедельник' go={go}/>
            <Day id='tuesday' day='Вторник' go={go}/>
            <Day id='wednesday' day='Среда' go={go}/>
            <Day id='thursday' day='Четверг' go={go}/>
            <Day id='friday' day='Пятница' go={go}/>
            <Day id='saturday' day='Суббота' go={go}/>

        </View>
    )
}

Shedule.propTypes = {
    id: PropTypes.string.isRequired
}

export default Shedule;