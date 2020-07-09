import React, {useState} from 'react'
import {View, Panel, PanelHeader} from '@vkontakte/vkui'

import {Days, Day} from './Day'

const Main = ({id, go}) => {
    return(
    <Panel id={id}>
        <PanelHeader>
            Расписание
        </PanelHeader>
        
        <Days go={go}/>
    </Panel>
    )
}

const Week = ({id, db}) => {
    const [activePanel, setActivePanel] = useState('main');

    const go = e => {
        setActivePanel(e.currentTarget.dataset.to)
    }

    return (
        <View id={id} activePanel={activePanel}>
            <Main id='main' go={go}/>
            <Day id='monday' day='понедельник' go={go} db={db}/>
            <Day id='tuesday' day='вторник' go={go} db={db}/>
            <Day id='wednesday' day='среда' go={go} db={db}/>
            <Day id='thursday' day='четверг' go={go} db={db}/>
            <Day id='friday' day='пятница' go={go} db={db}/>
            <Day id='saturday' day='суббота' go={go} db={db}/>
        </View>
    )
}

export default Week