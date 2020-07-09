import React, {useState} from 'react';

import List from '@vkontakte/vkui/dist/components/List/List';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';


import PHolder from './PHolder'

const Today = shedule => { //Функция, формирующая расписание на главном экране
    if (shedule.length) { //Если в ответе на запрос есть записи
      const list = Object.keys(shedule).map((num) => <Cell>{shedule.item(num).time} {shedule.item(num).subject}</Cell>) //Формируется map из необходимых элементов
      return (<List>{list}</List>) //Возвращается в одном элементе Group
    }
      return (<PHolder/>) //Иначе возвращается плейсхолдер
  }
  
const createNewShedule = (db) => { //создание новой таблицы БД
      db.transaction( //Транзакция на запись
          t => {
            t.executeSql("CREATE TABLE shedule (subject TEXT, day TEXT, week TEXT, time TEXT, teacher TEXT, notes TEXT)") //SQL запрос на создание таблицы с необходимыми полями
          }
      )
}

export const SheduleForToday = ({db, day}) => {
    const [shedule, setShedule] = useState(null); //Элемент с расписанием, по умолчанию null
    db.readTransaction( //начало транзакции на чтение
      t => { //lamиda-функция транзакции
        t.executeSql( //Выполнить SQL запрос к БД на устройстве
            'SELECT * FROM shedule WHERE LOWER(day) = ? ORDER BY time', [day], //Запрос, подстановки вместо знаков вопроса
            (t, success) => {//lambda-функция, вызываемая при успешном запросе
            if (shedule === null) { setShedule(Today(success.rows)) }
            },
            error => { //lambda-функция, вызываемая при ошибке (обычно один раз при первом запуске приложения)
            createNewShedule(db);
            }
        )
      }
    )
  
    return (shedule) //Возврат полученного react-элемента
}
