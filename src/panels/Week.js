import React, {useState} from 'react'
import {View, Panel, PanelHeader, PanelHeaderBack} from '@vkontakte/vkui'

import {Placeholder, Button} from '@vkontakte/vkui'
import Icon56FaceIdOutline from '@vkontakte/icons/dist/56/face_id_outline';

import {Days, Day} from './Day'

const PHolder = ({id, go}) => {
    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={go} data-to='main'/>}
            >
                Так, тут заглушечка красивая
            </PanelHeader>
            <Placeholder
            icon={<Icon56FaceIdOutline/>}
            action={<Button size='xl' mode='primary' onClick={go} data-to='main'>Убегаю</Button>}
            stretched
        >
                Ну тут в общем нет ничего пока, да-да
            </Placeholder>
        </Panel>
    )
}

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

const Week = ({id}) => {
    const [activePanel, setActivePanel] = useState('main');

    const saveToStorage = e => {
        return 0
    }

    const go = e => {
        setActivePanel(e.currentTarget.dataset.to)
    }

    return (
        <View id={id} activePanel={activePanel}>
            <Main id='main' go={go}/>
            <Day id='monday' day='Понедельник' go={go} saveToStorage={saveToStorage}/>
            <Day id='tuesday' day='Вторник' go={go} saveToStorage={saveToStorage}/>
            <Day id='wednesday' day='Среда' go={go} saveToStorage={saveToStorage}/>
            <Day id='thursday' day='Четверг' go={go} saveToStorage={saveToStorage}/>
            <Day id='friday' day='Пятница' go={go} saveToStorage={saveToStorage}/>
            <Day id='saturday' day='Суббота' go={go} saveToStorage={saveToStorage}/>

            <PHolder id='placeholder' go={go}/>
        </View>
    )
}

export default Week