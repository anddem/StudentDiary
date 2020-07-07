import React, {useState} from 'react'
import {View, Panel, PanelHeader, PanelHeaderBack} from '@vkontakte/vkui'

import {Placeholder, Button} from '@vkontakte/vkui'
import Icon56FaceIdOutline from '@vkontakte/icons/dist/56/face_id_outline';

import {Days, Day} from './Day'

const Week = ({id}) => {
    const [activePanel, setActivePanel] = useState('main');

    const go = e => {
        setActivePanel(e.currentTarget.dataset.to)
    }

    return (
        <View id={id}
        activePanel={activePanel}>
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

            <Panel id='placeholder'>
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
        </View>
    )
}

export default Week