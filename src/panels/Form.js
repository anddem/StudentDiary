import React, { useState } from 'react';
import {View, Panel, PanelHeader} from '@vkontakte/vkui'
import {FormLayout, Select, Button, Input, FormLayoutGroup, Checkbox, Textarea} from '@vkontakte/vkui'

const checkDay = () => {
    const days =['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
    const result = []
    days.map((day, index) => document.getElementById(`day-${index}`).checked ? result.push(day) : null)
    return result
}

//subject TEXT, day TEXT, week TEXT, time TEXT, teacher TEXT, notes TEXT

const UpdateOrSave = (db, info, len) => {
    db.transaction(
        t=>{
            for (let i = 0; i < len; i++){
                t.executeSql('SELECT * FROM shedule WHERE subject = ? and day = ? and week = ? and time = ?', [info[0], info[1][i], ...info.slice(2, 4)],
                (tx, result) => {
                    if (result.rows.length) {
                        tx.executeSql('UPDATE shedule\
                                        SET subject = ? day = ?, week = ?, time = ? teacher = ?, notes = ?\
                                        WHERE  subject = ? and day = ? and week = ? and time = ?', [info[0], info[1][i], ...info.slice(2), info[0], info[1][i], ...info.slice(2, 4)]
                        )
                    }
                    else {
                        tx.executeSql('INSERT INTO shedule values(?, ?, ?, ?, ?, ?)', [info[0], info[1][i], ...info.slice(2)])
                    }
                })
            }
        }
    )
    return true
}
const CheckAndSave = ({db}) => {

    const days = checkDay()
    const week = document.getElementById('weekSelect').value
    const time = document.getElementById('timeSelect').value 
    const subject = document.getElementById('subject').value
    if(!week || days.length === 0 || !time || !subject) {
        return false
    }
    const teacher = document.getElementById('teacher').value ? document.getElementById('teacher').value : null
    const notes = document.getElementById('notes').value ? document.getElementById('notes').value : null 

    let arr = [subject, days, week, time, teacher, notes]
    return (UpdateOrSave(db, arr, days.length))
}

const WeekSelect = ({id, top, placeholder}) => {
    const [week, setWeek] = useState('')
    const weeks = ['Первая', 'Вторая', 'Обе']

    return (
        <Select id={id} top={top} placeholder={placeholder} value={week} status={week ? 'valid' : 'error'} onChange={(e) => setWeek(e.currentTarget.value)}>
            {Object.keys(weeks).map(week => <option key={week} value={weeks[week]}>{weeks[week]}</option>)}
        </Select>
    )
}

const DaysSelect = ({top, id}) => {
    const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
    
    return (
        <FormLayoutGroup top={top} id={id}>
            {Object.keys(week).map(day =><Checkbox id={`day-${day}`} key={day} value={week[day]}>{week[day]}</Checkbox>)}
        </FormLayoutGroup>
    )
}

const TimeSelect = ({id, top, placeholder}) => {
    const startTimes = ['08:00', '09:40', '11:30', '13:20', '15:00', '16:40']
    const [time, setTime] = useState('')

    return (
        <Select id={id} top={top} placeholder={placeholder} value={time} status={time ? 'valid' : 'error'} onChange={(e) => setTime(e.currentTarget.value)}>
            {Object.keys(startTimes).map(time => <option key={time} value={startTimes[time]}>{startTimes[time]}</option>)}
        </Select>
    )
}

const RequiredFields = ({top}) => {
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

const OptionalFields = (top) => {
    return (
        <FormLayout top={top}>
            <Input id='teacher' top='Имя преподавателя'/>
            <Textarea id='notes' top='Заметки'/>
        </FormLayout>
    )
}

const FLayout = ({db}) => {
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

const Form = ({id, db}) => {
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