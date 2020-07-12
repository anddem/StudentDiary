import React, {useState} from 'react';
import List from '@vkontakte/vkui/dist/components/List/List';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';

import PHolder from './PHolder' //Плейсхолдер
import today from './DateTime' //Получение текущего дня и номера недели
import { Title, Headline, Text } from '@vkontakte/vkui';

const Today = shedule => { //Функция, формирующая расписание на главном экране
    if (shedule.length) { //Если в ответе на запрос есть записи
        const list = Object.keys(shedule).map(num =>
            <Cell key={num} multiline>
                <Title level='1'>{shedule.item(num).subject}</Title>
                <Headline weight='semibold'>{shedule.item(num).time}</Headline>
                {shedule.item(num).notes ? <Text>{shedule.item(num).notes}</Text> : null}
            </Cell>
        )
        return (<List>{list}</List>) //Возвращается в одном элементе List
    }
    return (<PHolder/>) //Иначе возвращается плейсхолдер
}

const createNewTable = (db) => { //создание новой таблицы БД
    db.transaction( //Транзакция на запись
        t => {
            t.executeSql("CREATE TABLE shedule (subject TEXT, day TEXT, week TEXT, time TEXT, teacher TEXT, notes TEXT)") //SQL запрос на создание таблицы с необходимыми столбцами
        }
    )
}

const SheduleForToday = ({db}) => {
    const [shedule, setShedule] = useState(null); //Элемент с расписанием, по умолчанию null
    db.readTransaction( //начало транзакции на чтение
        t => { //Функция транзакции
            t.executeSql( //Выполнить SQL запрос к БД на устройстве
                'SELECT * FROM shedule WHERE day = ? AND (week = ? OR week = "Обе") ORDER BY time', [today.day, today.week], //Запрос, подстановки вместо знаков вопроса
                (t, success) => {//Функция, вызываемая при успешном запросе
                    if (shedule === null) {
                        setShedule(Today(success.rows))
                    }
                },
                error => { //Функция, вызываемая при ошибке (обычно один раз при первом запуске приложения на устройстве)
                    createNewTable(db); //Таблица создаётся
                    setShedule(<PHolder/>) //Выводится плейсхолдер
                }
            )
        }
    )
    return (shedule) //Возврат полученного react-элемента
}

export default SheduleForToday