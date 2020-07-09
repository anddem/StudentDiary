import React, {useState} from 'react';
import PropTypes from 'prop-types';
import View from '@vkontakte/vkui/dist/components/View/View';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import List from '@vkontakte/vkui/dist/components/List/List';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Title from '@vkontakte/vkui/dist/components/Typography/Title/Title'

const FormShedule = (shedule) => { //Функция, формирующая расписание
  if (shedule.length) { //Если в ответе на запрос есть записи
    const list = Object.keys(shedule).map((num) => <Cell>`${shedule.item(num).time} ${shedule.item(num).subject}`</Cell>) //Формируется map из необходимых элементов
    return (<List>{list}</List>) //Возвращается в одном элементе Group
  }
  else {
    return (<Title level='1' weight='bold'>Сегодня занятий нет</Title>)
  }
}

const createNewShedule = (db) => {
    db.transaction(
        t => {
          t.executeSql("CREATE TABLE shedule (subject TEXT, day TEXT, week TEXT, time TEXT, teacher TEXT, notes TEXT)")
        }
    )
}

const SheduleForToday = ({db, day}) => {
  const [shedule, setShedule] = useState(null); //Элемент с расписанием, по умолчанию null

  db.readTransaction( //Транзакиция на чтение
    t => { //lamda-функция транзакции
      t.executeSql( //Выполнить SQL запрос к БД на усттройстве
        'select * from shedule where day = ? order by time', [day], //Запрос, подстановки вместо знаков вопроса
        (t, success) => {//lambda-функция, вызываемая при успешном запросе
        if (shedule === null) { setShedule(FormShedule(success.rows)) }
        },
        error => { //lambda-функция, вызываемая при ошибке (обычно один раз при первом запуске приложения)
          createNewShedule(db);
        }
      )
    }
  )

  return (shedule)
}

const Home = ({id, db}) => {
    const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const activePanel = 'home';
    const day = days[new Date().getDay()];

    return (
        <View id={id} activePanel={activePanel}>
            <Panel id='home'>
                <PanelHeader>
                        Дневник студента
                </PanelHeader>
                <SheduleForToday db={db}/>
            </Panel>
        </View>
    )
};

Home.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Home;
