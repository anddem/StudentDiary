import React, {useState} from 'react'
import {View, Panel, PanelHeader} from '@vkontakte/vkui'

import {Days, Day} from './Day'

const Main = ({id, go}) => { //Панель с общим списком дней
    return(
    <Panel id={id}>
        <PanelHeader>
            Расписание
        </PanelHeader>
        
        <Days go={go}/>
    </Panel>
    )
}

const Week = ({id, db}) => { //Панели для второй вкладки -- общий список дней и панель с каждыйм из них подробнее
    const [activePanel, setActivePanel] = useState('main');

    const go = e => {
        setActivePanel(e.currentTarget.dataset.to)
    }

    return (
        <View id={id} activePanel={activePanel}>
            <Main id='main' go={go}/> 
            <Day id='monday' day='Понедельник' go={go} db={db}/>
            <Day id='tuesday' day='Вторник' go={go} db={db}/>
            <Day id='wednesday' day='Среда' go={go} db={db}/>
            <Day id='thursday' day='Четверг' go={go} db={db}/>
            <Day id='friday' day='Пятница' go={go} db={db}/>
            <Day id='saturday' day='Суббота' go={go} db={db}/>
        </View>
    )
}

export default Week