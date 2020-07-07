import React from 'react';
import {FormLayout, Select, Button, Input, FormLayoutGroup, Checkbox, Textarea} from '@vkontakte/vkui'

const daysID = ['sunday' ,'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

const Form = ({day, go}) => {
    return (
        <FormLayout >
        <Select id="choiceWeek" top='Неделя' placeholder='Выберите неделю'>
            <option value='fst'>Первая</option>
            <option value='snd'>Вторая</option>
            <option value='all'>Обе</option>
        </Select>
        <FormLayoutGroup top='Дни недели'>

            {
                days.map((day, index) =>
                    <Checkbox id={daysID[index+1]} value={day}>{day}</Checkbox>
                )
            }

        </FormLayoutGroup>

        <Select id="choiceWeek" top='Время начала пары' placeholder='Выберите время начала пары'>
            <option value='first'>8:00</option>
            <option value='second'>9:40</option>
            <option value='third'>11:30</option>
            <option value='fourth'>13:20</option>
            <option value='fifth'>15:00</option>
            <option value='sixth'>16:40</option>
        </Select>

        <Input id='subject' top='Предмет'/>
        <Input id='teacher' top='Имя преподавателя (опционально)'/>

        <Textarea id='notes' top='Заметки'/>

        <Button mode='commerce' size='xl' onClick={go} data-to='placeholder'> 
            Сохранить изменения
        </Button>
    </FormLayout>
    )
}

export default Form;