import React, {useState} from 'react'
import {List, Cell} from '@vkontakte/vkui'
import {Title, Text, Caption} from '@vkontakte/vkui'
import PHolder from './PHolder'

const DeleteNote = (db, note) => { //Удаление записи из БД
    db.transaction( //Транзакция на запись
        t => {
            t.executeSql('DELETE FROM shedule WHERE subject = ? and day = ? and week = ? and time = ?', //SQL запрос на удаление
            [note.subject, note.day, note.week, note.time]) //Подстановки вместо знаков вопроса
        }
    )
}

const GeneralList = ({db, shedule}) => {
    const [removeList, removeCell] = useState(Object.entries(shedule.rows))

    const remove = (note, index) => { //Функция при нажатии на удаление занятия
        removeCell([...removeList.slice(0, index), ...removeList.slice(index + 1)]) //Запись удаляется из рендера
        DeleteNote(db, note[1]) //Запись удаляется из БД
    }

    if (shedule.rows.length) { //Если в результате запроса есть записи
        const list = removeList.map((note, index) => //Генерируется список элеметов Cell с информацией
        <Cell key={note} multiline removable onRemove={() => remove(note, index)}>
            <Title level='1'>{note[1].subject} </Title>
            <Caption level='1' weight='semibold'>{note[1].time} | {note[1].week === 'Обе' ? `${note[1].week} недели` : `${note[1].week} неделя`} </Caption>
            {note[1].teacher ? <Text>{note[1].teacher}</Text> : null}
            {note[1].notes ? <Text>{note[1].notes}</Text> : null}
        </Cell>)

        return <List>{list}</List> //И далее возвращается для рендера в элементе List
    }
    else {
        return (<PHolder/>) //Иначе рендерится плейсхолдер
    }
}

const CheckShedule = ({db, day}) => { //Функция проверки расписания на выбранный день недели
    const [sheduleList, changeList] = useState(null)
    db.readTransaction(
        t => {
            t.executeSql(
                'SELECT * FROM shedule WHERE day = ? ORDER BY time', [day], //sql Запрос к БД для получения всех записей на выбранный день
                (t, success) => {
                    if (sheduleList === null) {
                        changeList(<GeneralList db={db} shedule={success}/>) //Оформление полученного результата
                    }
                }
            )
        }
    )
    return (sheduleList)
}

export default CheckShedule