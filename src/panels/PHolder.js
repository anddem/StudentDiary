import React from 'react'

import Placeholder from '@vkontakte/vkui/dist/components/Placeholder/Placeholder'
import Icon56FaceIdOutline from '@vkontakte/icons/dist/56/face_id_outline';

const PHolder = () => { //Плейсхолдер для экранов без занятий
    return (
    <Placeholder stretched icon={<Icon56FaceIdOutline/>} header='Сегодня занятий нет, либо расписание не заполнено'>
        Добавить занятия можно на третьей вкладке
    </Placeholder>
    )
}

export default PHolder