import React from 'react';
import {FormLayout, Select, Button, Input, FormLayoutGroup, Checkbox, Textarea} from '@vkontakte/vkui'

const days = {
    'monday': 'Понедельник',
    'tuesday': 'Вторник',
    'wednesday': 'Среда',
    'thursday': 'Четверг',
    'friday': 'Пятница',
    'saturday': 'Суббота'
}
const pairs = {
    'first':  '8:00',
    'second': '9:40',
    'third':  '11:30',
    'fourth': '13:20',
    'fifth':  '15:00',
    'sixth':  '16:40'
}
const weeks = {
    'first': 'Первая',
    'second': 'Вторая',
    'all': 'Обе'
}

const WeekSelect = ({id, top, placeholder}) => {
    return (
        <Select id={id} top={top} placeholder={placeholder}>
            {Object.keys(weeks).map(week => 
                <option value={week}>{weeks[week]}</option>)}
        </Select>
    )
}

const DaysSelect = top => {
    return (
        <FormLayoutGroup top={top}>

        {
            Object.keys(days).map((day) =>
                <Checkbox value={day}>{days[day]}</Checkbox>
            )
        }

    </FormLayoutGroup>
    )
}

const PairSelect = ({id, top, placeholder}) => {
    const list = Object.keys(pairs).map((key) =>
    <option value={key}>{pairs[key]}</option>
    )

    return (
        <Select id={id} top={top} placeholder={placeholder}>
            {list}
        </Select>
    )
}

const TimeSelect = () => {
    return (
        <FormLayout>
            <WeekSelect id='weekSelect' top='Неделя' placeholder='Выберите неделю'/>
            <DaysSelect top='Дни недели'/>
            <PairSelect id="pairSelect" top='Время начала пары' placeholder='Выберите время начала пары'/>
        </FormLayout>
    )
}



const Form = ({go, day}) => {
    return (
        <FormLayout>
            <TimeSelect/>
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