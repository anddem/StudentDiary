import React from 'react'

import {Placeholder} from '@vkontakte/vkui'
import Icon56FaceIdOutline from '@vkontakte/icons/dist/56/face_id_outline';

const PHolder = () => {
    return (
        <Placeholder icon={<Icon56FaceIdOutline/>} header='Сегодня занятий нет' stretched>
            Либо расписание не заполнено
        </Placeholder>
    )
}

export default PHolder