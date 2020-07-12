import React, { useState } from 'react';
import {View, Panel, PanelHeader} from '@vkontakte/vkui'
import {FormLayout, Select, Button, Input, FormLayoutGroup, Checkbox, Textarea} from '@vkontakte/vkui'

const checkDay = () => { //Проверка checkbox элементов с выбором дня
    const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'] //Исходный массив
    const result = [] //Массив с выбранными днями пополняется
    days.map((day, index) => document.getElementById(`day-${index}`).checked ? result.push(day) : null)
    return result
}

async function UpdateOrSave(db, info, len) { //Функция записи информации в БД
    db.transaction( //Транзакция на запись
        t=>{
            for (let i = 0; i < len; i++) { //len -- количество дней, выбранных пользователем в форме
                t.executeSql('SELECT * FROM shedule WHERE subject = ? and day = ? and week = ? and time = ?', [info[0], info[1][i], ...info.slice(2, 4)], //Запрос к БД
                (tx, result) => {
                    if (result.rows.length) { //Если на предыдущий запрос есть записи
                        tx.executeSql('UPDATE shedule SET teacher = ?, notes = ? WHERE subject = ? and day = ? and week = ? and time = ?', //Обновляем поля, которые могли измениться
                                        [...info.slice(4), info[0], info[1][i], ...info.slice(2, 4)]
                        )
                    }
                    else { //Иначе вносим новую запись в БД
                        tx.executeSql('INSERT INTO shedule values(?, ?, ?, ?, ?, ?)', [info[0], info[1][i], ...info.slice(2)])
                    }
                })
            }
        }
    )
}

const clearForm = () => { //Очистка формы
    //Поэлементно ставятся значения "" и false на соответствующие поля формы
    document.getElementById('weekSelect').value = ''

    const days = Object.values(document.getElementById('daysSelect').children)
    days.forEach(item => Object.values(item.children)[0].checked = false)

    document.getElementById('timeSelect').value = ''
    document.getElementById('subject').value = ''
    document.getElementById('teacher').value = ''
    document.getElementById('notes').value = ''
}

const CheckAndSave = ({db}) => { //Проверка заполненных полей
    const days = checkDay() //Массив выбранных дней
    const week = document.getElementById('weekSelect').value //Выбранная неделя
    const time = document.getElementById('timeSelect').value //Выбранное время
    const subject = document.getElementById('subject').value //Введённый предмет

    if( week && days.length !== 0 && time && subject) { //Если все необходимые поля заполнены
        const teacher = document.getElementById('teacher').value ? document.getElementById('teacher').value : null
        const notes = document.getElementById('notes').value ? document.getElementById('notes').value : null 

        let arr = [subject, days, week, time, teacher, notes] //Общий массив с информацией
        UpdateOrSave(db, arr, days.length); //Функция записи информации в БД

        clearForm() //Очистка формы после записи
    }
}

const WeekSelect = ({id, top, placeholder}) => { //Компонент выбора недели (список)
    const [week, setWeek] = useState('')
    const weeks = ['Первая', 'Вторая', 'Обе']

    return (
        <Select id={id} top={top} placeholder={placeholder} value={week} status={week ? 'valid' : 'error'} onChange={(e) => setWeek(e.currentTarget.value)}>
            {Object.keys(weeks).map(week => <option key={week} value={weeks[week]}>{weeks[week]}</option>)}
        </Select>
    )
}

const DaysSelect = ({id, top}) => { //Компонент выбора дней недели (лист чекбокс элементов)
    const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
    
    return (
        <FormLayoutGroup  id={id} top={top}>
            {Object.keys(week).map(day =><Checkbox id={`day-${day}`} key={day} value={week[day]}>{week[day]}</Checkbox>)}
        </FormLayoutGroup>
    )
}

const TimeSelect = ({id, top, placeholder}) => { //Компонент выбора времени (список)
    const startTimes = ['08:00', '09:40', '11:30', '13:20', '15:00', '16:40']
    const [time, setTime] = useState('')

    return (
        <Select id={id} top={top} placeholder={placeholder} value={time} status={time ? 'valid' : 'error'} onChange={(e) => setTime(e.currentTarget.value)}>
            {Object.keys(startTimes).map(time => <option key={time} value={startTimes[time]}>{startTimes[time]}</option>)}
        </Select>
    )
}

const RequiredFields = ({top}) => { //Компонент рендера обязательных к заполнению полей
    const [subject, setSubject] = useState('')

    return (
        <FormLayout top={top}>
            <WeekSelect id='weekSelect' top='Неделя' placeholder='Выберите неделю'/>
            <DaysSelect id='daysSelect'top='Дни недели'/>
            <TimeSelect id="timeSelect" top='Время начала занятия' placeholder='Выберите время начала занятия'/>
            <Input id='subject' top='Предмет' value={subject} status={subject ? 'valid' : 'error'} onChange={e => setSubject(e.currentTarget.value)}/>
        </FormLayout>
    )
}

const OptionalFields = (top) => { //Компонент рендера необязательных полей
    return (
        <FormLayout top={top}>
            <Input id='teacher' top='Имя преподавателя'/>
            <Textarea id='notes' top='Заметки' placeholder='Например, номер аудитории или ДЗ на следующее занятие'/>
        </FormLayout>
    )
}

const FLayout = ({db}) => { //Компонент рендера полей формы добавления занятия
    return (
        <FormLayout>
            <RequiredFields top='Обязательные поля'/>
            <OptionalFields top='Опциональные поля'/>

            <Button mode='commerce' size='xl' onClick={() => CheckAndSave({db})}> 
                Сохранить изменения
            </Button>
        </FormLayout>
    )
}

const Form = ({id, db}) => { //Компонент рендера панели с формой
    return (
        <View id={id} activePanel='addPair'>
            <Panel id='addPair'>
                <PanelHeader>Добавить занятие</PanelHeader>
                <FLayout db={db}/>
            </Panel>
        </View>
    )
}

export default Form;